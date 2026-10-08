// src/App.tsx
import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { userService } from "./services/userService";
import { type UserResponse } from "./types/user";

export default function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [users, setUsers] = useState<UserResponse[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await userService.getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div style={styles.dashboardContainer}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Panel de Gestión de Usuarios</h1>
        <p style={styles.subtitle}>Cargill Internal Engineering Standard</p>
      </header>

      <hr style={styles.divider} />

      <main style={styles.mainContent}>
        <section style={styles.formSection}>
          <button
            onClick={toggleForm}
            style={showForm ? styles.buttonClose : styles.buttonOpen}
          >
            {showForm ? "✖ Cerrar Formulario" : "➕ Agregar Usuario"}
          </button>

          {showForm && <UserForm onUserAdded={fetchUsers} />}
        </section>

        <section style={styles.listSection}>
          <h2 style={styles.sectionTitle}>Usuarios Registrados</h2>

          <UserTable users={users} />
        </section>
      </main>
    </div>
  );
}

const styles = {
  dashboardContainer: {
    padding: "40px",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "20px",
  },
  mainTitle: {
    margin: 0,
    fontSize: "28px",
    color: "#1a252f",
    fontWeight: "700",
  },
  subtitle: {
    margin: "4px 0 0 0",
    color: "#7f8c8d",
    fontSize: "14px",
  },
  divider: {
    border: 0,
    height: "1px",
    backgroundColor: "#e0e0e0",
    marginBottom: "30px",
  },
  mainContent: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap" as const,
  },
  formSection: {
    flex: "1",
    minWidth: "320px",
    maxWidth: "400px",
  },
  listSection: {
    flex: "2",
    minWidth: "350px",
  },
  sectionTitle: {
    marginTop: 0,
    marginBottom: "20px",
    fontSize: "22px",
    color: "#2c3e50",
  },
  placeholderCard: {
    border: "2px dashed #bdc3c7",
    borderRadius: "8px",
    padding: "40px",
    textAlign: "center" as const,
    backgroundColor: "#fafbfc",
  },
  placeholderText: {
    color: "#7f8c8d",
    margin: 0,
    fontSize: "15px",
  },
  // Estilo cuando el formulario está oculto (Botón Azul)
  buttonOpen: {
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "15px",
    width: "100%",
    transition: "background-color 0.2s",
  },
  // Estilo cuando el formulario está visible (Botón Gris/Rojo)
  buttonClose: {
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "15px",
    width: "100%",
    transition: "background-color 0.2s",
  },
};
