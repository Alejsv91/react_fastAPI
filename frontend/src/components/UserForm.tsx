import React, { useState } from "react";
import {
  validateStringIsEmpty,
  validateEmailFormat,
  validatePhoneFormat,
} from "../helpers/validations";

export default function UserForm() {
  // 1. Estado para capturar lo que el usuario escribe en el nombre
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // 2. Estado para almacenar el mensaje de error del nombre (empieza vacío)
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [birthdateError, setBirthdateError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  // 3. Función que se ejecuta cada vez que el usuario presiona una tecla
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError(validatePhoneFormat(value));
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmailFormat(value));
  };

  const handlebrithDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthdate(value);
    setBirthdateError(validateStringIsEmpty(value, "fecha de nacimiento"));
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameError(validateStringIsEmpty(value, "apellido"));
  };
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value); // Guardamos el valor actual

    // 4. LÓGICA DE VALIDACIÓN EN TIEMPO REAL
    setFirstNameError(validateStringIsEmpty(value, "nombre"));
  };

  const isFormValid =
    firstName !== "" &&
    lastName !== "" &&
    birthdate !== "" &&
    email !== "" &&
    phone !== "" &&
    firstNameError === null &&
    lastNameError === null &&
    birthdateError === null &&
    emailError === null &&
    phoneError === null;

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
            onChange={handleFirstNameChange} // Escuchamos el cambio de texto
          />
          {/* 5. Si existe un error, lo renderizamos debajo del input */}
          {firstNameError && (
            <span style={styles.errorText}>{firstNameError}</span>
          )}
        </div>

        {/* Los demás campos quedan estáticos por ahora para que hagas tus pruebas */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Apellido:</label>
          <input
            type="text"
            placeholder="Ej. Solano"
            style={styles.input}
            value={lastName}
            onChange={handleLastNameChange}
          />
          {lastNameError && (
            <span style={styles.errorText}>{lastNameError}</span>
          )}
        </div>

        {/* Campo: Fecha de Nacimiento */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Fecha de Nacimiento:</label>
          <input
            type="date"
            style={styles.input}
            value={birthdate} // Enlazado a nuestro estado string
            onChange={handlebrithDateChange} // Escucha el cambio de fecha
          />
          {/* Renderizado del mensaje de error si existe */}
          {birthdateError && (
            <span style={styles.errorText}>{birthdateError}</span>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="text"
            placeholder="Ej. email@outlook.com"
            style={styles.input}
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <span style={styles.errorText}>{emailError}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>phone:</label>
          <input
            type="phone"
            placeholder="Ej. 88880011"
            style={styles.input}
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && <span style={styles.errorText}>{phoneError}</span>}
        </div>

        <button
          type="submit"
          // Combinamos el estilo base y añadimos el de disabled si NO es válido
          style={{
            ...styles.submitButton,
            ...(!isFormValid ? styles.disabledButton : {}),
          }}
          disabled={!isFormValid} // El botón se bloquea si el formulario NO es válido
        >
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
  errorText: {
    color: "#dc3545",
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "2px",
  }, // Rojo de alerta

  submitButton: {
    backgroundColor: "#198754", // Verde cuando está activo
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "4px",
    cursor: "pointer", // Cursor de manita
    fontWeight: "600" as const,
    fontSize: "14px",
    marginTop: "10px",
    transition: "background-color 0.2s ease", // Suaviza el cambio de color
  },
  disabledButton: {
    backgroundColor: "#6c757d", // Gris clásico de Bootstrap para deshabilitado
    cursor: "not-allowed", // Cursor con el símbolo de prohibido 🚫
    opacity: 0.65,
  },
};
