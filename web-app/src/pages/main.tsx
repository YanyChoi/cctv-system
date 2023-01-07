import VideoPlayer from "../components/video_player";
import { useState } from "react";
import VideoList from "../components/video_list";
import StreamPlayer from "../components/stream_player";
import {
  CircularProgress,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import AuthPage from "./auth";
import { WIDTH } from "../utils/size";
const MainPage = () => {
  const [listBrought, setListBrought] = useState(false);
  const [targetVideo, setTargetVideo] = useState("");
  const [content, setContent] = useState("stream");
  const [pass, setPass] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {pass ? (
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
              <ToggleButton
                value="stream"
                onClick={() => {
                  setListBrought(false);
                }}
              >
                실시간
              </ToggleButton>
              <ToggleButton value="video">이전 영상</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid container justifyContent="center">
            {content === "stream" ? (
              <Grid container direction="column" alignContent="center">
                {!isLoaded && <CircularProgress />}
                <StreamPlayer setIsLoaded={setIsLoaded} />
              </Grid>
            ) : (
              <>
                <VideoPlayer videoId={targetVideo} />
                {/* <ReactPlayer url={`${API}/video/${targetVideo}`} controls /> */}
                <Grid
                  container
                  style={{
                    marginTop: "10px",
                    height: `calc(100vh - (${WIDTH} / 2 + 140px) )`,
                    overflowY: "scroll",
                  }}
                >
                  <VideoList
                    targetVideo={targetVideo}
                    setTargetVideo={setTargetVideo}
                    listBrought={listBrought}
                    setListBrought={setListBrought}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </>
      ) : (
        <AuthPage setPass={setPass} />
      )}
    </>
  );
};

export default MainPage;
