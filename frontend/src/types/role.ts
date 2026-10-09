export interface RoleCreate {
    name: String,
    description: String
}

export interface RoleResponse extends RoleCreate {
    id: number
}

export interface RoleParams {
    page?: number;
    size?: number;
}