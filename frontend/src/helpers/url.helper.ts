/**
 * Convierte un objeto de filtros/parámetros en un query string válido (?key=value&key2=value2)
 * Filtra automáticamente valores nulos, indefinidos o strings vacíos.
 */
export const buildQueryString = (params?: Record<string, any>): string => {
    if (!params) return "";
  
    const cleanParams: Record<string, string> = {};
  
    Object.entries(params).forEach(([key, value]) => {
      // Evitamos enviar parámetros vacíos, null o undefined a la API
      if (value !== undefined && value !== null && value !== "") {
        cleanParams[key] = String(value);
      }
    });
  
    if (Object.keys(cleanParams).length === 0) return "";
  
    const searchParams = new URLSearchParams(cleanParams);
    return `?${searchParams.toString()}`;
  };
  