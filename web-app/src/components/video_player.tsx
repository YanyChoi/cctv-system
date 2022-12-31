import { API } from "../utils/prefix";

const VideoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <>
      <video
        src={`${API}/video/${videoId}`}
        style={{
          width: '95vw'
        }}
        controls
        autoPlay
      />
    </>
  );
};
export default VideoPlayer;
