import type { RoleResponse } from "../../types/role";
import { sharedStyles } from "../../styles/theme";
import React, { useMemo, useState } from "react";

interface RolesTableProps {
  roles: RoleResponse[];
  isLoading :boolean
}
export default function RolesTable({ roles, isLoading}: RolesTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRole = useMemo(() => {
    if (!searchTerm.trim()) {
      return roles;
    }

    const lowerCaseSearch = searchTerm.toLowerCase();

    return roles.filter((role) =>
      role.name.toLocaleLowerCase().includes(lowerCaseSearch)
    );
    
  }, [roles, searchTerm]);

  const handleSearchRolesChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  if (isLoading) return <p>CargandoRoles</p>;

  if (roles.length === 0) {
    return (
      <div style={sharedStyles.emptyState}>
        <p>No hay roles registrados en la base de datos</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px", fontWeight: "600" }}>
          Buscar por nombre del role:{" "}
        </label>
        <input
          onChange={handleSearchRolesChange}
          value={searchTerm}
          placeholder="Nombre del role..."
          style={{
            padding: "6px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={sharedStyles.tableContainer}>
        <table style={sharedStyles.table}>
          <thead>
            <tr style={sharedStyles.thRow}>
              <th style={sharedStyles.th}>ID</th>
              <th style={sharedStyles.th}>Nombre</th>
              <th style={sharedStyles.th}>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {filteredRole.length > 0 ? (
              filteredRole.map((role) => (
                <tr key={role.id} style={sharedStyles.tr}>
                  <td style={sharedStyles.td}>{role.id}</td>
                  <td style={sharedStyles.td}>{role.name}</td>
                  <td style={sharedStyles.td}>{role.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#888",
                  }}
                >
                  No se encontraron usuarios con ese apellido.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
