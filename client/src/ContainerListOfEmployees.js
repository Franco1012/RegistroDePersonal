import Axios from "axios";
import ListOfEmployees from "./ListOfEmployees";
import { useContext} from "react";
import { EmployeeContext } from "./EmployeeContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ContainerListOfEmployees = () => {
  
  const {
    setNombre,
    setEdad,
    setPais,
    setCargo,
    setAnios,
    setEditar,
    setId,
    handlerClearFields,
    handleNetworkError,
    empleados,
    getEmpleados
  } = useContext(EmployeeContext);
  
  
  //creamos una funcion que nos muestra en el formulario los campos con la informacion del empleado y asi poder editarla
  const handlerEditar = (empleado) => {
    if (empleado) {
      setEditar(true);
      setNombre(empleado.nombre || "");
      setEdad(empleado.edad || "");
      setPais(empleado.pais || "");
      setCargo(empleado.cargo || "");
      setAnios(empleado.anios || "");
      setId(empleado.id);
    }
  };

  const MySwal = withReactContent(Swal);
  //creamos una funcion para eliminar
  const handlerDeleteEmployee = (empleado) => {
    MySwal.fire({
      title: "Eliminar?",
      text: `Realmente desea eliminar a ${empleado.nombre} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${empleado.id}`)
          .then(
            () => {
              getEmpleados();
              handlerClearFields();
              MySwal.fire({
                title: "Eliminado!",
                text: `${empleado.nombre} fue eliminado.`,
                icon: "success",
                timer: 3000,
              });
            }
            //guardamos el error con un catch si la promesa no se resuelve
          )
          .catch((error) => {
            if (error.message === "Network Error") {
              handleNetworkError();
            }
          });
      }
    });
  };

  return (
    <div>
      <ListOfEmployees
        empleados={empleados}
        handlerEditar={handlerEditar}
        handlerDeleteEmployee={handlerDeleteEmployee}
      />
    </div>
  );
};

export default ContainerListOfEmployees;
