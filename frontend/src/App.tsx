// src/App.tsx
import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { userService } from "./services/userService";
import { type UserResponse } from "./types/user";
import RoleManagement from "./components/role/RoleManagement";
import { sharedStyles } from "./styles/theme";

export default function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [activeTab, setActiveTab] = useState<"users" | "roles">("users");

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
    <div style={sharedStyles.dashboardContainer}>
      <header style={sharedStyles.header}>
        <h1 style={sharedStyles.mainTitle}>Panel de Gestión de Usuarios</h1>
        <p style={sharedStyles.subtitle}> Internal Engineering Standard</p>
        <ul style={sharedStyles.tabsContainer}>
          <li
            onClick={() => setActiveTab("users")}
            style={
              activeTab === "users" ? sharedStyles.tabActive : sharedStyles.tabInactive
            }
          >
            Users
          </li>
          <li
            onClick={() => setActiveTab("roles")}
            style={
              activeTab === "roles" ? sharedStyles.tabActive : sharedStyles.tabInactive
            }
          >
            Roles
          </li>
        </ul>
      </header>

      <hr style={sharedStyles.divider} />

      <main style={sharedStyles.mainContent}>
        {activeTab === "users" && (
          <>
            <section style={sharedStyles.formSection}>
              <button
                onClick={toggleForm}
                style={showForm ? sharedStyles.buttonClose : sharedStyles.buttonOpen}
              >
                {showForm ? "✖ Cerrar Formulario" : "➕ Agregar Usuario"}
              </button>

              {showForm && <UserForm onUserAdded={fetchUsers} />}
            </section>

            <section style={sharedStyles.listSection}>
              <h2 style={sharedStyles.sectionTitle}>Usuarios Registrados</h2>

              <UserTable users={users} />
            </section>
          </>
        )}
        {activeTab === "roles" && (
          <>
            <RoleManagement />
          </>
        )}
      </main>
    </div>
  );
}