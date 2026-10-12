import React from 'react';

interface DeleteButtonProps {
  roleId: number;
  onDelete: (id: number) => void;
}

// React.memo evita que el botón se re-renderice si sus props no cambian
export const DeleteButton = React.memo(({ roleId, onDelete }: DeleteButtonProps) => {
  console.log(`Renderizando botón de eliminar para el rol: ${roleId}`);
  
  return (
    <button onClick={() => onDelete(roleId)} style={{ color: 'red' }}>
      Eliminar
    </button>
  );
});
