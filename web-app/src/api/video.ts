import Axios from "axios";
import { API } from "../utils/prefix";

export const videoListAPI = async () => {
    
    const request = `${API}/video/`

    const response = await Axios.get(request);
    return response.data.list;
}