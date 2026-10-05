from fastapi import FastAPI

from app.database import Base
from app.database import engine

from app.models.user import User

app = FastAPI()

Base.metadata.create_all(bind=engine)


@app.get("/")
def health():
    return {"message": "CondoHub API Running"}