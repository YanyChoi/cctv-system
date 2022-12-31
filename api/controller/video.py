from fastapi import APIRouter, Request
from service.video import get_video_list_service, range_requests_response
from models.video import VideoList

router = APIRouter(
    prefix="/video",
    tags=["video"],
    responses={404: {"description": "Not found"}},
)

CHUNK_SIZE=10*1024*1024

@router.get("/", response_model=VideoList)
async def get_video_list():
    result = get_video_list_service()
    return {"list": result}

@router.get("/{video_id}")
async def stream_video(request: Request, video_id: str):
    return range_requests_response(request, file_path=f'./video/{video_id}', content_type="video/mp4")

@router.delete("/{video_id}")
async def delete_video(request: Request, video_id: str):
    return {"video": ""}