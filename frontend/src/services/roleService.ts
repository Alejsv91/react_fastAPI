import { apiRequest } from "./api";
import { type RoleCreate, type RoleResponse } from "../types/role";
import {type PaginationParams} from "../types/pagination";
import { buildQueryString } from "../helpers/url.helper";

const rolesEndPoint = "/roles";

export const rolesService = {
  createRole: async (roleData: RoleCreate): Promise<RoleResponse> => {
    return apiRequest<RoleResponse>(rolesEndPoint, {
      method: "POST",
      body: JSON.stringify(roleData),
    });
  },

  getAllRoles: async (params?: PaginationParams): Promise<RoleResponse[]> => {
    const query = buildQueryString(params); // Genera "?page=1&size=10"

    return apiRequest<RoleResponse[]>(`${rolesEndPoint}${query}`, {
      method: "GET",
    });
  },
};
