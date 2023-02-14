import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [Pacientes, setPacientes] = useState([]);
  return (
    <div className="container mx-auto mt-20">
      <Header 
        numeros = {1}
      />
      <div className="mt-12 md:flex">
        <Formulario />
          pacientes={pacientes}
          setPacientes={setPacientes}
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
