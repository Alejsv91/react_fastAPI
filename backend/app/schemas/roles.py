from pydantic import BaseModel
from typing import List

class RoleCreate(BaseModel):
    name: str
    description: str
    
class RoleResponse(RoleCreate):
    id: int

    model_config = {
        "from_attributes": True
    }

# 🌟 3. NUEVO ESQUEMA ENVOLVENTE: Contrato para las respuestas paginadas
class PaginatedRoleResponse(BaseModel):
    items: List[RoleResponse]  # Lista con los roles de la página actual
    total: int                 # Conteo total de filas en PostgreSQL
    page: int                  # Número de página solicitada
    size: int                  # Cantidad de registros por página
