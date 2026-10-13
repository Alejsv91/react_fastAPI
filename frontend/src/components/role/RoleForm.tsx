import { useReducer, type ChangeEvent, type FormEvent } from "react";
import { sharedStyles } from "../../styles/theme";
import { type RoleFormState, type RoleFormAction } from "../../types/formState";
import type { RoleCreate } from "../../types/role";

const initialState: RoleFormState = {
  values: { name: "", description: "" },
  errors: { name: "", description: "" },
  isFormValid: false,
};

function roleReducer(state: RoleFormState, action: RoleFormAction) {
  switch (action.type) {
    case "CHANGE_FIELD": {
      const { name, value } = action.payload;

      const newValues = { ...state.values, [name]: value };
      const newErrors = { ...state.errors };

      // Validate values
      if (name === "name") {
        if (!value.trim()) {
          newErrors.name = "El nombre es obligatorio";
        } else if (value.length > 30) {
          newErrors.name = "El nombre no puede ser mayor a 30 caracteres";
        } else {
          newErrors.name = "";
        }
      }
      if (name === "description") {
        if (!value.trim()) {
          newErrors.description = "la descripcion es obligatoria";
        } else {
          newErrors.description = "";
        }
      }

      // Validate rules
      const fieldsFilled =
        newValues.name.trim() !== "" && newValues.description.trim();
      const isNameLenghtValid = newValues.name.length <= 30;
      const noErrors = Object.values(newErrors).every((err) => err === "");

      return {
        ...state,
        values: newValues,
        errors: newErrors,
        isFormValid: fieldsFilled && isNameLenghtValid && noErrors,
      };
    }
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export default function RoleForm() {
  const [state, dispatch] = useReducer(roleReducer, initialState);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: {
        name: e.target.name as keyof RoleCreate,
        value: e.target.value,
      },
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (state.isFormValid) {
        console.log("Enviando datos al API...", state.values);
      }
    } catch (error) {
      console.error("Erro happens when try to create Role")
    }
  };

  // form useStateInfo
  return (
    <div style={sharedStyles.formContainer}>
      <h3 style={sharedStyles.title}>Formulario para crear Role</h3>
      <form style={sharedStyles.form} onSubmit={handleSubmit}>
        <div style={sharedStyles.inputGroup}>
          <label htmlFor="name" style={sharedStyles.label}>
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre del role"
            style={sharedStyles.input}
            value={state.values.name}
            onChange={handleInputChange}
          ></input>
          {state.errors.name && (
            <span style={sharedStyles.errorText}>{state.errors.name}</span>
          )}
        </div>

        <div style={sharedStyles.inputGroup}>
          <label style={sharedStyles.label}>Descripción</label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Agregar descripción del role"
            style={sharedStyles.input}
            value={state.values.description}
            onChange={handleInputChange}
          ></input>
          {state.errors.description && (
            <span style={sharedStyles.errorText}>
              {state.errors.description}
            </span>
          )}
          <button
            type="submit"
            style={{
              ...sharedStyles.submitButton,
              ...(!state.isFormValid ? sharedStyles.disabledButton : {}),
            }}
          >
            Registrar Role
          </button>
        </div>
      </form>
    </div>
  );
}
