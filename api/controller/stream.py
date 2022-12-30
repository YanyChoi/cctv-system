from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from service.stream import stream_video_service
from fastapi.security.api_key import APIKey
import auth

router = APIRouter(
    prefix="/stream",
    tags=["stream"],
    responses={404: {"description": "Not found"}},
)

@router.get("/")
def get_stream():
    return StreamingResponse(stream_video_service(), media_type="multipart/x-mixed-replace; boundary=frame")