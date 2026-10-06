// src/services/userService.ts
import { apiRequest } from "./api";
import { type UserCreate, type UserResponse } from "../types/user";

export const userService = {
  /**
   * Envía los datos de un nuevo usuario a FastAPI para registrarlo en la BD.
   */
  createUser: async (userData: UserCreate): Promise<UserResponse> => {
    return apiRequest<UserResponse>("/users", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  },
  
  // En el futuro puedes agregar más funciones aquí:
  // getAllUsers: () => apiRequest<UserResponse[]>("/users"),
};
