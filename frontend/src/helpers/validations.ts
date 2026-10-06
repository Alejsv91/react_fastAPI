export const validateStringIsEmpty = (
  value: string,
  fieldName: string
): string | null => {
  // 4. LÓGICA DE VALIDACIÓN EN TIEMPO REAL
  if (value.trim() === "") {
    return `El ${fieldName} es obligatorio.`;
  } else if (value.trim().length < 3) {
    return `El ${fieldName} debe tener al menos 3 caracteres.`;
  } else {
    return null; // Borra el error si todo está correcto
  }
};

export const validateEmailFormat = (value: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let message = validateStringIsEmpty(value, "email");

  if (!emailRegex.test(value)) {
    return "El formato de correo no es válido";
  }

  return message;
};

export const validatePhoneFormat = (value: string): string | null => {
  const emailRegex = /^\d{8,12}$/;
  let message = validateStringIsEmpty(value, "teléfono");

  if (!emailRegex.test(value)) {
    return "El formato del teléfono no es válido";
  }

  return message;
};
