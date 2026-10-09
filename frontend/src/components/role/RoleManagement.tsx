import RoleForm from "./RoleForm";
import { sharedStyles } from "../../styles/theme";
import { useEffect, useState } from "react";
import RoleTable from "./RoleTable";
import { type RoleResponse } from "../../types/role";
import { rolesService } from "../../services/roleService";

export default function RoleManagement() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [roles, setRoles] = useState<RoleResponse[]>([]);

  const fetchRoles = async () => {
    try {
      const data = await rolesService.getAllRoles({page:1, size: 10});
      setRoles(data);
      console.log(`roles q: ${data.length}`)
    }
    catch (error) {
      console.error("An error happen when system try to fetch roles ", error)
    }
  }

  useEffect(() => {
    fetchRoles();
  }, []);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <>
      <section style={sharedStyles.formSection}>
        <button onClick={toggleForm}
        style={showForm ? sharedStyles.buttonClose : sharedStyles.buttonOpen}>
          {showForm ? "✖ Cerrar Formulario" : "➕ Agregar Role"}
        </button>
        {showForm && <RoleForm/>}
      </section>
      <section style={sharedStyles.listSection}>
        <h2 style={sharedStyles.sectionTitle}>Roles registrados</h2>
        <RoleTable roles={roles}/>
      </section>
    </>
  );
}
