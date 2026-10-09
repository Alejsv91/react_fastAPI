import { apiRequest } from "./api";
import {
  type RoleCreate,
  type RoleParams,
  type RoleResponse,
} from "../types/role";

const rolesEndPoint = "/roles";

export const rolesService = {
  createRole: async (roleData: RoleCreate): Promise<RoleResponse> => {
    return apiRequest<RoleResponse>(rolesEndPoint, {
      method: "POST",
      body: JSON.stringify(roleData),
    });
  },

  getAllRoles: async (params?: RoleParams): Promise<RoleResponse[]> => {
    let querySelector = "";

    if (params) {
      const searchParams = new URLSearchParams(
        Object.entries(params).map(([key, val]) => [key, String(val)])
      );
      querySelector = `?${searchParams.toString()}`;
    }
    return apiRequest<RoleResponse[]>(`${rolesEndPoint}${querySelector}`, {
      method: "GET",
    });
  },
};
