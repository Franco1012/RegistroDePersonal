import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Navbars";
import { ToastContainer } from "react-toastify";
import { EmployeeProvider } from "./EmployeeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./Nosotros";
import EmployeeRegistrationForm from "./EmployeeRegistrationForm";
import ContainerListOfEmployees from "./ContainerListOfEmployees";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbars />
        <ToastContainer />
        <EmployeeProvider>
          <div className="container">
            <Routes>
              <Route exact path="/" element={render()} />
              <Route exact path="/nosotros" element={<Nosotros />} />
            </Routes>
          </div>
        </EmployeeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
//funcion para renderizar dos componentes y asi poder compartir una ruta común
function render() {
  return (
    <div>
      <EmployeeRegistrationForm />
      <ContainerListOfEmployees />
    </div>
  );
}
