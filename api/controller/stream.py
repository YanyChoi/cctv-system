from fastapi import APIRouter, Response
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
    result = stream_video_service()
    if result is False:
        return Response(status_code=406)
    return StreamingResponse(result, media_type="multipart/x-mixed-replace; boundary=frame")
