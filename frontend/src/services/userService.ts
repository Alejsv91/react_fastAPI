import { apiRequest } from "./api";
import { type UserCreate, type UserResponse } from "../types/user";

const usersEndpoint = "/users"

export const userService = {
  /**
   * Envía los datos de un nuevo usuario a FastAPI para registrarlo en la BD.
   */
  createUser: async (userData: UserCreate): Promise<UserResponse> => {
    return apiRequest<UserResponse>(usersEndpoint, {
      method: "POST",
      body: JSON.stringify(userData),
    });
  },

  getAllUsers: async (): Promise<UserResponse[]> => {
    return apiRequest<UserResponse[]>(usersEndpoint)
  }
  
  // En el futuro puedes agregar más funciones aquí:
  // getAllUsers: () => apiRequest<UserResponse[]>("/users"),
};
