export interface RoleCreate {
    name: string,
    description: string
}

export interface RoleResponse extends RoleCreate {
    id: number
}
