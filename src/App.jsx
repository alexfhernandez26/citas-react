import { useState } from "react"
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
function App() {

  const[pacientes,setPacientes] = useState([]);
  const[paciente,setPaciente] = useState({});

  const EliminarPaciente = (id) =>{
     const pacientesActualizados = pacientes.filter(pacienteFilter => pacienteFilter.id !== id)
     console.log(pacientesActualizados)
     setPacientes(pacientesActualizados)
  }
  return (
   <div className="container mx-auto  mt-20 ">
   <Header 

   />

   <div className="mt-12 md:flex">
   <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente = {paciente}
      setPaciente = {setPaciente}
      
   />
   <ListadoPacientes
    pacientes={pacientes}
    setPaciente={setPaciente}
    EliminarPaciente={EliminarPaciente}
   />
   </div>
   
   </div>
  )
}

export default App
