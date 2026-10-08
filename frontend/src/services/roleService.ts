import { apiRequest } from "./api";
import { type RoleCreate, type RoleResponse } from "../types/role";

const rolesEndPoint = "/roles";

export const rolesService = {
  createRole: async (roleData: RoleCreate): Promise<RoleResponse> => {
    return apiRequest<RoleResponse>(rolesEndPoint, {
      method: "POST",
      body: JSON.stringify(roleData),
    });
  },

  getAllRoles: async (): Promise<RoleResponse[]> => {
    return apiRequest<RoleResponse[]>(rolesEndPoint, {
      method: "GET",
    });
  },
};
