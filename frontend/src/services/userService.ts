import { apiRequest } from "./api";
import { type UserCreate, type UserResponse } from "../types/user";

const usersEndpoint = "/users";

export const userService = {
  createUser: async (userData: UserCreate): Promise<UserResponse> => {
    return apiRequest<UserResponse>(usersEndpoint, {
      method: "POST",
      body: JSON.stringify(userData),
    });
  },

  getAllUsers: async (): Promise<UserResponse[]> => {
    return apiRequest<UserResponse[]>(usersEndpoint)
  }
  
};
