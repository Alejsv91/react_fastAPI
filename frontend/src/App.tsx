import { useState } from 'react';
import UserForm from './components/UserForm';

export default function App() {
  // 1. Estado booleano para controlar la visibilidad del formulario (inicia oculto)
  const [showForm, setShowForm] = useState<boolean>(false);

  // 2. Función para alternar (toggle) el estado entre true y false
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div style={styles.dashboardContainer}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Panel de Gestión de Usuarios</h1>
        <p style={styles.subtitle}>Cargill Internal Engineering Standard</p>
      </header>
      
      <hr style={styles.divider} />
      
      <main style={styles.mainContent}>
        
        {/* Columna Izquierda: Control del Formulario */}
        <section style={styles.formSection}>
          {/* Botón dinámico que cambia de texto según el estado */}
          <button onClick={toggleForm} style={showForm ? styles.buttonClose : styles.buttonOpen}>
            {showForm ? '✖ Cerrar Formulario' : '➕ Agregar Usuario'}
          </button>

          {/* 3. RENDERIZADO CONDICIONAL: Si showForm es true, monta el componente */}
          {showForm && <UserForm />}
        </section>

        {/* Columna Derecha: Lista de Usuarios */}
        <section style={styles.listSection}>
          <h2 style={styles.sectionTitle}>Usuarios Registrados</h2>
          <div style={styles.placeholderCard}>
            <p style={styles.placeholderText}>
              La lista de usuarios se mantendrá estática en este espacio.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}

// 🎨 Estilos actualizados para los botones interactivos
const styles = {
  dashboardContainer: {
    padding: '40px',
    fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
  header: {
    marginBottom: '20px',
  },
  mainTitle: {
    margin: 0,
    fontSize: '28px',
    color: '#1a252f',
    fontWeight: '700',
  },
  subtitle: {
    margin: '4px 0 0 0',
    color: '#7f8c8d',
    fontSize: '14px',
  },
  divider: {
    border: 0,
    height: '1px',
    backgroundColor: '#e0e0e0',
    marginBottom: '30px',
  },
  mainContent: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap' as const,
  },
  formSection: {
    flex: '1',
    minWidth: '320px',
    maxWidth: '400px',
  },
  listSection: {
    flex: '2',
    minWidth: '350px',
  },
  sectionTitle: {
    marginTop: 0,
    marginBottom: '20px',
    fontSize: '22px',
    color: '#2c3e50',
  },
  placeholderCard: {
    border: '2px dashed #bdc3c7',
    borderRadius: '8px',
    padding: '40px',
    textAlign: 'center' as const,
    backgroundColor: '#fafbfc',
  },
  placeholderText: {
    color: '#7f8c8d',
    margin: 0,
    fontSize: '15px',
  },
  // Estilo cuando el formulario está oculto (Botón Azul)
  buttonOpen: {
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '15px',
    width: '100%',
    transition: 'background-color 0.2s',
  },
  // Estilo cuando el formulario está visible (Botón Gris/Rojo)
  buttonClose: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '15px',
    width: '100%',
    transition: 'background-color 0.2s',
  }
};
