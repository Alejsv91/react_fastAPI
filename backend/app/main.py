from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routers.users import router as users_router
from app.api.routers.roles import router as roles

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# 2. Agrega el middleware a tu aplicación
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # Permite las URLs de tu frontend
    allow_credentials=True,
    allow_methods=["*"],            # Permite todos los métodos (POST, GET, OPTIONS, etc.)
    allow_headers=["*"],            # Permite todos los encabezados (Content-Type, etc.)
)

app.include_router(users_router)
app.include_router(roles)