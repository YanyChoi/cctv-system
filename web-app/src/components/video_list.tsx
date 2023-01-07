import { useEffect, useState } from "react";
import { videoListAPI } from "../api/video";
import { Grid, List, ListItemButton, ListItemText } from "@mui/material";

const VideoList = ({
  targetVideo,
  setTargetVideo,
  listBrought,
  setListBrought
}: {
  targetVideo: string;
  setTargetVideo: (value: string) => void;
  listBrought: boolean;
  setListBrought: (value: boolean) => void;
}) => {
  const [videoList, setVideoList] = useState<any>();

  const initialize = async () => {
    const newList = await videoListAPI();
    setVideoList(newList);
    setListBrought(true);
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
          {listBrought &&
            Object.keys(videoList).map((date) => (
              <>
                <h1>{date}</h1>
                {videoList[date].map((video: string) => (
                  <ListItemButton
                    onClick={() => {
                      setTargetVideo(video);
                    }}
                  >
                    <ListItemText primary={video} />
                  </ListItemButton>
                ))}
              </>
            ))}
        </List>
      </Grid>
    </>
  );
};

export default VideoList;
