import RoleForm from "./RoleForm";
import { sharedStyles } from "../../styles/theme";
import { useState } from "react";

export default function RoleManagement() {
  const [showForm, setShowForm] = useState<boolean>(false);

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
        <RoleForm></RoleForm>
      </section>
    </>
  );
}
