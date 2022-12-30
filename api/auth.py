from fastapi.security.api_key import APIKeyHeader
from fastapi import Security, HTTPException, Depends
from starlette.status import HTTP_403_FORBIDDEN

import os
from dotenv import load_dotenv

api_key_header = APIKeyHeader(name="access_token", auto_error=False)

load_dotenv()

async def get_api_key(api_key_header: str = Security(api_key_header)):
    if api_key_header == os.getenv('KEY'):
        return api_key_header
    else:
        raise HTTPException(
            status_code=HTTP_403_FORBIDDEN, detail="Could not validate API KEY"
        )