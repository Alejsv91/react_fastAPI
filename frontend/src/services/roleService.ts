import { apiRequest } from "./api";
import { type RoleCreate, type RoleResponse } from "../types/role";
import {type PaginationParams, type PaginationResponse} from "../types/pagination";
import { buildQueryString } from "../helpers/url.helper";

const rolesEndPoint = "/roles";

export const rolesService = {
  createRole: async (roleData: RoleCreate): Promise<RoleResponse> => {
    return apiRequest<RoleResponse>(rolesEndPoint, {
      method: "POST",
      body: JSON.stringify(roleData),
    });
  },

  getAllRoles: async (params?: PaginationParams): Promise<PaginationResponse<RoleResponse>> => {
    const query = buildQueryString(params); 

    return apiRequest<PaginationResponse<RoleResponse>>(`${rolesEndPoint}${query}`, {
      method: "GET",
    });
  },
};
