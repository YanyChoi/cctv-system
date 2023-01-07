from pydantic import BaseModel
from typing import List

class VideoList(BaseModel):
    list: dict
