from fastapi import APIRouter, Request, Depends
from service.video import get_video_list_service, range_requests_response
from models.video import VideoList
from fastapi.security.api_key import APIKey
import auth

router = APIRouter(
    prefix="/video",
    tags=["video"],
    responses={404: {"description": "Not found"}},
)

CHUNK_SIZE=10*1024*1024

@router.get("/", response_model=VideoList)
async def get_video_list(api_key: APIKey = Depends(auth.get_api_key)):
    result = get_video_list_service()
    return {"list": result}

@router.get("/{video_id}")
async def stream_video(request: Request, video_id: str):
    # start, end = range.replace("bytes=", "").split("-")
    # start = int(start)
    # end = int(end) if end else start + CHUNK_SIZE
    # result = await stream_video_service(video_id=video_id, start=start, end=end)
    # return result
    return range_requests_response(request, file_path=f'./video/{video_id}', content_type="video/mp4")

@router.delete("/{video_id}")
async def delete_video(request: Request, video_id: str, api_key: APIKey = Depends(auth.get_api_key)):
    return {"video": ""}