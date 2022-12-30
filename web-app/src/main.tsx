import VideoPlayer from "./components/video_player";
import { useState } from "react";
import VideoList from "./components/video_list";
import StreamPlayer from "./components/stream_player";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
const MainPage = () => {
  const [targetVideo, setTargetVideo] = useState("");
  const [content, setContent] = useState("stream");
  return (
    <>
      <Grid
        container
        style={{ justifyContent: "center", margin: "50px 0px 30px 0px" }}
      >
        <ToggleButtonGroup
          color="primary"
          value={content}
          exclusive
          onChange={(event, value) => setContent(value)}
          aria-label="Platform"
        >
          <ToggleButton value="stream">실시간</ToggleButton>
          <ToggleButton value="video">이전 영상</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container justifyContent="center">
        {content === "stream" ? (
          <StreamPlayer />
        ) : (
          <>
            <VideoPlayer videoId={targetVideo} />
            <VideoList
              targetVideo={targetVideo}
              setTargetVideo={setTargetVideo}
            />
          </>
        )}
      </Grid>
    </>
  );
};

export default MainPage;
