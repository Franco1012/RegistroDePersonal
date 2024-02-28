import React, { createContext, useState, useEffect, useCallback, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Axios from "axios";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState("");
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState("");
  const [empleados, setEmpleados] = useState("");
  const MySwal = withReactContent(Swal);
  const ejecutadoPorThenRef = useRef(true);

  // Función para manejar errores de conexión
  const handleNetworkError = useCallback(() => {
    MySwal.fire({
      title: "Error",
      text: "Hubo un error al intentar realizar la operación, error de conexión",
      icon: "error",
      timer: 3000,
    });
  }, [MySwal]);

  // Solicitamos al servidor la lista de empleados
  const getEmpleados = useCallback(() => {
    Axios.get("http://localhost:3001/empleados")
      .then((response) => {
        setEmpleados(response.data);
       
        
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          handleNetworkError();
          console.log("error");
        } else {
          console.error("Error al obtener empleados:", error);
        }
      });
  }, [handleNetworkError]);

  useEffect(() => {
    // Solo ejecutar getEmpleados si no se ejecutó previamente por then
    if (ejecutadoPorThenRef.current) {
      getEmpleados();
      ejecutadoPorThenRef.current = false; // cambio la variable a false para eviar que el useEffect se ejecute dos veces al montarse el componente
    }
  }, [getEmpleados]);

  // Creamos una función para limpiar los campos del formulario
  const handlerClearFields = () => {
    setNombre("");
    setEdad("");
    setPais("");
    setCargo("");
    setAnios("");
    setEditar(false);
  };
  
  
  return (
    <EmployeeContext.Provider
      value={{
        nombre,
        setNombre,
        edad,
        setEdad,
        pais,
        setPais,
        cargo,
        setCargo,
        anios,
        setAnios,
        editar,
        setEditar,
        id,
        setId,
        handlerClearFields,
        handleNetworkError,
        empleados,
        getEmpleados,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
