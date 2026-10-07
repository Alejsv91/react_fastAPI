// src/components/UserTable.tsx
import React, { useEffect, useState } from "react";
import { type UserResponse } from "../types/user";

interface UserTableProps {
  users: UserResponse[];
}

export default function UserTable({ users }: UserTableProps) {
  if (users.length === 0) {
    return (
      <div style={styles.emptyState}>
        <p>No hay usuarios registrados en la base de datos todavía.</p>
      </div>
    );
  }
  const [lastNameFilter, setLastNameFilter] = useState<string | null>("");
// Quede aqui
//   useEffect(()=> {}, [
//     // Search by lastName
//     users = users.filter
//   ]);

  const handelLastNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastNameFilter(value);
    console.log(`Nuevo valor ${lastNameFilter}`);
  };

  return (
    <div>
        {/* Crear con el use effect una funcion para buscar por apellido */}
      <label>Buscar por apellido</label>
      <input onChange={handelLastNameFilterChange}></input>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.thRow}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nombre</th>
              <th style={styles.th}>Apellido</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={styles.tr}>
                <td style={styles.td}>{user.id}</td>
                <td style={styles.td}>{user.first_name}</td>
                <td style={styles.td}>{user.last_name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.phone || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  tableContainer: {
    overflowX: "auto" as const,
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "14px",
    textAlign: "left" as const,
  },
  thRow: {
    backgroundColor: "#f8f9fa",
    borderBottom: "2px solid #e0e0e0",
  },
  th: {
    padding: "12px 16px",
    fontWeight: "600",
    color: "#495057",
  },
  tr: {
    borderBottom: "1px solid #efefef",
  },
  td: {
    padding: "12px 16px",
    color: "#212529",
  },
  emptyState: {
    padding: "30px",
    textAlign: "center" as const,
    backgroundColor: "#fafbfc",
    border: "1px dashed #bdc3c7",
    borderRadius: "8px",
    color: "#7f8c8d",
  },
};
