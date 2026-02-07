from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model for POST/PUT/PATCH operations
class ItemData(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None

@app.get("/")
def root():
    return {"message": "FastAPI CRUD API is running"}

@app.get("/crud")
def get_op():
    return {
        "operation": "GET",
        "message": "GET operation performed successfully",
        "status": "success"
    }

@app.post("/crud")
def post_op(item: Optional[ItemData] = None):
    return {
        "operation": "POST",
        "message": "POST operation performed successfully",
        "data": item.dict() if item else None,
        "status": "success"
    }

@app.put("/crud")
def put_op(item: Optional[ItemData] = None):
    return {
        "operation": "PUT",
        "message": "PUT operation performed successfully",
        "data": item.dict() if item else None,
        "status": "success"
    }

@app.patch("/crud")
def patch_op(item: Optional[ItemData] = None):
    return {
        "operation": "PATCH",
        "message": "PATCH operation performed successfully",
        "data": item.dict() if item else None,
        "status": "success"
    }

@app.delete("/crud")
def delete_op():
    return {
        "operation": "DELETE",
        "message": "DELETE operation performed successfully",
        "status": "success"
    }