import { API } from "../utils/prefix";

const StreamPlayer = () => {
  return (
    <>
      <img
        src={`${API}/stream`}
        style={{
          width: "95vw",
        }}
      />
    </>
  );
};
export default StreamPlayer;
