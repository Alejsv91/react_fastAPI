export const sharedStyles = {
    tabsContainer: {
      listStyleType: "none",
      display: "flex",
      gap: "4px",
      padding: 0,
      margin: "0 0 30px 0",
      borderBottom: "1px solid #e0e0e0",
    },
    tabActive: {
      padding: "12px 24px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      color: "#0d6efd", // Azul institucional
      borderBottom: "3px solid #0d6efd",
      marginBottom: "-1px", // Se superpone al borde del contenedor
      transition: "all 0.2s ease",
    },
    tabInactive: {
      padding: "12px 24px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "500",
      color: "#7f8c8d",
      borderBottom: "3px solid transparent",
      transition: "all 0.2s ease",
    },
    dashboardContainer: {
      padding: "40px",
      fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
    },
    header: {
      marginBottom: "20px",
    },
    mainTitle: {
      margin: 0,
      fontSize: "28px",
      color: "#1a252f",
      fontWeight: "700",
    },
    subtitle: {
      margin: "4px 0 0 0",
      color: "#7f8c8d",
      fontSize: "14px",
    },
    divider: {
      border: 0,
      height: "1px",
      backgroundColor: "#e0e0e0",
      marginBottom: "30px",
    },
    mainContent: {
      display: "flex",
      gap: "40px",
      flexWrap: "wrap" as const,
    },
    formSection: {
      flex: "1",
      minWidth: "320px",
      maxWidth: "400px",
    },
    listSection: {
      flex: "2",
      minWidth: "350px",
    },
    sectionTitle: {
      marginTop: 0,
      marginBottom: "20px",
      fontSize: "22px",
      color: "#2c3e50",
    },
    placeholderCard: {
      border: "2px dashed #bdc3c7",
      borderRadius: "8px",
      padding: "40px",
      textAlign: "center" as const,
      backgroundColor: "#fafbfc",
    },
    placeholderText: {
      color: "#7f8c8d",
      margin: 0,
      fontSize: "15px",
    },
    // Estilo cuando el formulario está oculto (Botón Azul)
    buttonOpen: {
      backgroundColor: "#0d6efd",
      color: "#fff",
      border: "none",
      padding: "12px 20px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "15px",
      width: "100%",
      transition: "background-color 0.2s",
    },
    // Estilo cuando el formulario está visible (Botón Gris/Rojo)
    buttonClose: {
      backgroundColor: "#6c757d",
      color: "#fff",
      border: "none",
      padding: "12px 20px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "15px",
      width: "100%",
      transition: "background-color 0.2s",
    },
  };
  