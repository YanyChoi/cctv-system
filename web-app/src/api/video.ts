import Axios from "axios";
import { API, APIKey } from "../utils/prefix";

export const videoListAPI = async () => {
    
    const request = `${API}/video/`

    const response = await Axios.get(request, {
        headers: {
            'access_token': APIKey
        }
    });
    return response.data.list;
}