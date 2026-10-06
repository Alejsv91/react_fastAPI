export const validateStringIsEmpty = (value: string, fieldName: string): string | null => {
    // 4. LÓGICA DE VALIDACIÓN EN TIEMPO REAL
    if (value.trim() === "") {
        return `El ${fieldName} es obligatorio.`
      } else if (value.trim().length < 3) {
        return `El ${fieldName} debe tener al menos 3 caracteres.`;
      } else {
        return null; // Borra el error si todo está correcto
      }
}