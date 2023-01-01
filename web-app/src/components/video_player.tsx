import { API } from "../utils/prefix";
import { WIDTH } from "../utils/size";

const VideoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <>
      <video
        src={`${API}/video/${videoId}`}
        style={{
          width: WIDTH
        }}
        controls
        autoPlay
      />
    </>
  );
};
export default VideoPlayer;
