import { useEffect, useState } from "react";
import { videoListAPI } from "../api/video";
import { Grid, List, ListItemButton, ListItemText } from "@mui/material";

const VideoList = ({
  targetVideo,
  setTargetVideo,
}: {
  targetVideo: string;
  setTargetVideo: (value: string) => void;
}) => {
  const [videoList, setVideoList] = useState<Array<string>>([]);

  const initialize = async () => {
    const newList = await videoListAPI();
    setVideoList(newList);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <Grid
        container
        alignContent="center"
        style={{
          marginTop: "20px",
        }}
      >
        <List>
          {videoList.map((video) => (
            <ListItemButton
              onClick={() => {
                setTargetVideo(video);
              }}
            >
              <ListItemText primary={video} />
            </ListItemButton>
          ))}
        </List>
      </Grid>
    </>
  );
};

export default VideoList;
