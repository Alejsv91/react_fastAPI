from datetime import date

from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    first_name: str
    last_name: str
    birth_date: date
    email: EmailStr
    phone: str
    
class UserResponse(UserCreate):
    id: int

    model_config = {
        "from_attributes": True
    }