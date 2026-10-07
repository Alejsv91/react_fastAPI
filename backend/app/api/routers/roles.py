from fastapi import APIRouter, Depends
from app.database import get_db
from sqlalchemy.orm import Session
from app.schemas.roles import RoleResponse, RoleCreate
from app.models.role import Role

router = APIRouter(
    prefix="/roles",
    tags=["roles"]
)

@router.post("", response_model=RoleResponse, status_code=201)
def create_role(
    role: RoleCreate,
    db: Session = Depends(get_db)
):
    try:
        
        db_role = Role(
            name = role.name,
            description= role.description
        )
        
        db.add(db_role)
        db.commit()
        db.refresh(db_role)
        
        return db_role
    except:
        raise SystemError("Hubo un error:")

@router.get("", response_model=list[RoleResponse], status_code=200)
def get_roles(db: Session = Depends(get_db)):
    return db.query(Role)