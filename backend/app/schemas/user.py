from datetime import date

from pydantic import BaseModel, EmailStr
from.roles import RoleResponse


class UserCreate(BaseModel):
    first_name: str
    last_name: str
    birth_date: date
    email: EmailStr
    phone: str
    role_id: int
    
    
class UserResponse(UserCreate):
    id: int
    role: RoleResponse

    model_config = {
        "from_attributes": True
    }