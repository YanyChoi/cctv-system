import cv2
from dotenv import load_dotenv
import os
import time

def stream_video_service():

    load_dotenv()
    
    ID = os.getenv('ID')
    PW = os.getenv('PW')
    IP = os.getenv('IP')
    #RTSP를 불러오는 곳

    video_capture = cv2.VideoCapture(f'rtsp://{ID}:{PW}@{IP}/stream2')
    # video_capture = cv2.VideoCapture(0)

    while True:
        # 카메라 값 불러오기
        success, frame = video_capture.read()

        if not success:
            return False
            # time.sleep(1)
            # continue
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            # frame을 byte로 변경 후 특정 식??으로 변환 후에
            # yield로 하나씩 넘겨준다.
            frame = buffer.tobytes()
            yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' +
               bytearray(frame) + b'\r\n')