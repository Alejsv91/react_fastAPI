import React, { useState } from "react";

export default function UserForm() {
  // 1. Estado para capturar lo que el usuario escribe en el nombre
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  // 2. Estado para almacenar el mensaje de error del nombre (empieza vacío)
  const [firstNameError, setFirstNameError] = useState<string | null>(null);

  // 3. Función que se ejecuta cada vez que el usuario presiona una tecla
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value); // Guardamos el valor actual

    // 4. LÓGICA DE VALIDACIÓN EN TIEMPO REAL
    if (value.trim() === "") {
      setFirstNameError("El nombre es obligatorio.");
    } else if (value.trim().length < 3) {
      setFirstNameError("El nombre debe tener al menos 3 caracteres.");
    } else {
      setFirstNameError(null); // Borra el error si todo está correcto
    }
  };

  return (
    <div style={styles.formContainer}>
      <h3 style={styles.title}>Formulario de Registro</h3>

      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        {/* Campo: Nombre */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nombre:</label>
          <input
            type="text"
            placeholder="Ej. Alejandro"
            style={styles.input}
            value={firstName} // Enlazamos el input al estado
            onChange={handleNameChange} // Escuchamos el cambio de texto
          />
          {/* 5. Si existe un error, lo renderizamos debajo del input */}
          {firstNameError && (
            <span style={styles.errorText}>{firstNameError}</span>
          )}
        </div>

        {/* Los demás campos quedan estáticos por ahora para que hagas tus pruebas */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Apellido:</label>
          <input type="text" placeholder="Ej. Solano" style={styles.input} />
        </div>

        <button type="submit" style={styles.submitButton}>
          Registrar en Base de Datos
        </button>
      </form>
    </div>
  );
}

// Agregamos estilos para el mensaje de error
const styles = {
  formContainer: {
    backgroundColor: "#f8f9fa",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    width: "100%",
    marginTop: "15px",
  },
  title: {
    marginTop: 0,
    marginBottom: "20px",
    color: "#212529",
    fontSize: "18px",
  },
  form: { display: "flex", flexDirection: "column" as const, gap: "16px" },
  inputGroup: { display: "flex", flexDirection: "column" as const, gap: "6px" },
  label: { fontSize: "14px", fontWeight: "600", color: "#495057" },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    fontSize: "14px",
  },
  submitButton: {
    backgroundColor: "#198754",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "10px",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "2px",
  }, // Rojo de alerta
};
