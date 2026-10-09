import type { RoleResponse } from "../../types/role";
import { sharedStyles } from "../../styles/theme";

interface RoleTableProps {
    roles: RoleResponse[];
}
export default function RoleTable({ roles }: RoleTableProps) {
    if(roles.length === 0){
        return (
            <div style={sharedStyles.emptyState}>
                <p>No hay roles registrados en la base de datos</p>
            </div>
        )
    }
    return <>
    <div>Existen Roles!</div>
    </>
}