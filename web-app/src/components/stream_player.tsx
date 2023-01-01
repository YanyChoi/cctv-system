import { API } from "../utils/prefix";
import { WIDTH } from "../utils/size";

const StreamPlayer = ({setIsLoaded}: {setIsLoaded: (value: boolean) => void}) => {
  return (
    <>
      <img
        src={`${API}/stream`}
        style={{
          width: WIDTH,
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};
export default StreamPlayer;
