// src/services/api.ts

const BASE_URL = "http://localhost:8000";

/**
 * Helper centralizado para hacer peticiones HTTP asíncronas con tipado estricto.
 */
export const apiRequest = async <T>(
  endpoint: string, 
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Error en la petición: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
};
