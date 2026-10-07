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

  const [lastNameFilter, setLastNameFilter] = useState<string>("");
  const [userList, setUserList] = useState<UserResponse[]>(users);

  useEffect(() => {
    console.log("Ejecutando useEffect");
    
    if (lastNameFilter.trim() !== "") {
      setUserList(
        users.filter((user) =>
          user.last_name?.toLowerCase().includes(lastNameFilter.toLowerCase())
        )
      );
    } else {
      setUserList(users);
    }
  }, [lastNameFilter, users]);

  const handelLastNameFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setLastNameFilter(value);
  };

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px", fontWeight: "600" }}>Buscar por apellido: </label>
        <input 
          value={lastNameFilter}
          onChange={handelLastNameFilterChange}
          placeholder="Escribe un apellido..."
          style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

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
            {userList.length > 0 ? (
              userList.map((user) => (
                <tr key={user.id} style={styles.tr}>
                  <td style={styles.td}>{user.id}</td>
                  <td style={styles.td}>{user.first_name}</td>
                  <td style={styles.td}>{user.last_name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.phone || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} style={{ padding: "20px", textAlign: "center", color: "#888" }}>
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
