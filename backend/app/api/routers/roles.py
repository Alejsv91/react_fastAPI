from fastapi import APIRouter, Depends, status, Query
from app.database import get_db
from sqlalchemy.orm import Session
from app.schemas.roles import RoleResponse, RoleCreate, PaginatedRoleResponse
from app.models.role import Role

router = APIRouter(
    prefix="/roles",
    tags=["roles"]
)

@router.post("", response_model=RoleResponse, status_code=status.HTTP_201_CREATED)
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

@router.get("", response_model=PaginatedRoleResponse, status_code=status.HTTP_200_OK)
def get_roles(db: Session = Depends(get_db),
              page: int = Query(default=1, ge=1, description="page number to take"),
              size: int = Query(default=10, ge=1, le=100, description="registers per page")):
    
    total_records = db.query(Role).count()
    offset_value = (page - 1) * size
    roles_records = db.query(Role).offset(offset_value).limit(size).all()
    
    return {
        "items": roles_records,
        "total": total_records,
        "page": page,
        "size": size
    }