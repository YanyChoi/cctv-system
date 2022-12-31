import { API } from "../utils/prefix";

const StreamPlayer = ({setIsLoaded}: {setIsLoaded: (value: boolean) => void}) => {
  return (
    <>
      <img
        src={`${API}/stream`}
        style={{
          width: "95vw",
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};
export default StreamPlayer;
