from fastapi import APIRouter, Depends
from app.database import get_db
from sqlalchemy.orm import Session
from app.schemas.roles import RoleResponse, RoleCreate
from app.models.role import Role

router = APIRouter(
    prefix="/roles",
    tags=["roles"]
)

@router.get("", response_model=list[RoleResponse])
def get_roles(db: Session = Depends(get_db)):
    return db.query(Role)