import Axios from "axios";
import Form from "./Form";
import { toast } from "react-toastify";
import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const EmployeeRegistrationForm = () => {
  const {
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
    id,
    handlerClearFields,
    handleNetworkError,
    getEmpleados,
  } = useContext(EmployeeContext);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };
  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };
  const handlePaisChange = (e) => {
    setPais(e.target.value);
  };
  const handleCargoChange = (e) => {
    setCargo(e.target.value);
  };
  const handleAniosChange = (e) => {
    setAnios(e.target.value);
  };
  const MySwal = withReactContent(Swal);
  //creamos una funcion que utiliza el metodo post para registrar un empleado
  const handlerAddEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios,
    })
      .then((response) => {
        MySwal.fire({
          title: "Registro exitoso",
          text: `El empleado ${nombre} ha sido registrado con éxito`,
          icon: "success",
          timer: 3000,
        });
        getEmpleados();
        handlerClearFields();
        console.log("registrado")
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          handleNetworkError();
        }
      });
  };
  //creamos una funcion que utiliza el metodo put  para actualizar un empleado
  const handlerUpdateEmployee = () => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios,
    })
      .then((response) => {
        toast(response.data);
        getEmpleados()
        handlerClearFields();
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          handleNetworkError();
        }
      });
  };

  return (
    <div>
<Form
      handleNombreChange={handleNombreChange}
      handleEdadChange={handleEdadChange}
      handlePaisChange={handlePaisChange}
      handleCargoChange={handleCargoChange}
      handleAniosChange={handleAniosChange}
      handlerAddEmployee={handlerAddEmployee}
      handlerUpdateEmployee={handlerUpdateEmployee}
    />
    </div>
    
  );
};

export default EmployeeRegistrationForm;
