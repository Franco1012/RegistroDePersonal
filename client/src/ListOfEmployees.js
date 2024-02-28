import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ListOfEmployees = ({
  empleados,
  handlerEditar,
  handlerDeleteEmployee,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">País</th>
          <th scope="col">Cargo</th>
          <th scope="col">Experiencia</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      {empleados ? (
        <tbody>
          {empleados.map((empleado, index) => (
            <tr key={empleado.id}>
              <th scope="row">{index + 1}</th>
              <td>{empleado.nombre}</td>
              <td>{empleado.edad}</td>
              <td>{empleado.pais}</td>
              <td>{empleado.cargo}</td>
              <td>{empleado.anios}</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    onClick={() => handlerEditar(empleado)}
                    variant="primary"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => handlerDeleteEmployee(empleado)}
                    variant="danger"
                  >
                    Eliminar
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      ) : null}
    </table>
  );
};

export default ListOfEmployees;
