import RoleForm from "./RoleForm";
import { sharedStyles } from "../../styles/theme";
import { useEffect, useCallback, useState } from "react";
import RolesTable from "./RolesTable";
import { type RoleResponse } from "../../types/role";
import { rolesService } from "../../services/roleService";
import { usePagination } from "../../hooks/usePagination";

export default function RoleManagement() {
  const { currentPage, pageSize, nextPage, prevPage, changePageSize } =
    usePagination(1, 10);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [currentRoles, setCurrentRoles] = useState<RoleResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const totalPages = Math.ceil(currentRoles.length / pageSize);

  const fetchRoles = async () => {
    try {
      setIsLoading(true);
      const data = await rolesService.getAllRoles({ page: 1, size: 5 });
      let roles = data.items;
      setCurrentRoles(
        roles.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      );
      console.log(`roles q: ${roles.length}`);
    } catch (error) {
      console.error("An error happen when system try to fetch roles ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleDeleteRoleFromState = useCallback((idToDelete: number) => {
    setCurrentRoles((prevRoles) =>
      prevRoles.filter((role) => role.id !== idToDelete)
    );
  }, []);

  return (
    <>
      <section style={sharedStyles.formSection}>
        <button
          onClick={toggleForm}
          style={showForm ? sharedStyles.buttonClose : sharedStyles.buttonOpen}
        >
          {showForm ? "✖ Cerrar Formulario" : "➕ Agregar Role"}
        </button>
        {showForm && <RoleForm />}
      </section>
      <section style={sharedStyles.listSection}>
        <h2 style={sharedStyles.sectionTitle}>Roles registrados</h2>
        <RolesTable
          roles={currentRoles}
          isLoading={isLoading}
          onDeleteRole={handleDeleteRoleFromState}
        />
        <div className="pagination-controls">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <span>
            {currentPage} de {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </section>
    </>
  );
}
