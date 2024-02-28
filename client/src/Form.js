import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

const Form = 

({
  handleNombreChange,
  handleEdadChange,
  handlePaisChange,
  handleCargoChange,
  handleAniosChange,
  handlerAddEmployee,
  handlerUpdateEmployee,
}) => {
  
  const { nombre, edad, pais, cargo, anios, editar, handlerClearFields } =
    useContext(EmployeeContext);

  return (
    <div className="App">
      <div className="card text-center">
        <div className="card-header">Gestión de Empleados</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre:
            </span>
            <input
              onChange={handleNombreChange}
              value={nombre}
              type="text"
              className="form-control"
              placeholder="Nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Edad:{" "}
            </span>
            <input
              onChange={handleEdadChange}
              value={edad}
              type="text"
              className="form-control"
              placeholder="Edad"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              País
            </span>
            <input
              onChange={handlePaisChange}
              value={pais}
              type="text"
              className="form-control"
              placeholder="País"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Cargo:
            </span>
            <input
              onChange={handleCargoChange}
              value={cargo}
              type="text"
              className="form-control"
              placeholder="Cargo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Años de Experiencia:
            </span>
            <input
              onChange={handleAniosChange}
              value={anios}
              type="text"
              className="form-control"
              placeholder="Años"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          {editar ? (
            <div>
              <button
                className="btn btn-success m-2"
                onClick={()=>handlerUpdateEmployee()}
              >
                Actualizar
              </button>
              <button
                className="btn btn-info"
                onClick={() => handlerClearFields()}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => handlerAddEmployee()}
            >
              Registrar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
