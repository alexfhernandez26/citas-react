import { useState,useEffect } from "react"
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const[pacientes,setPacientes] = useState([]);
  const[paciente,setPaciente] = useState({});

  useEffect(() =>{
   const obtenerLs = () =>{
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      pacientesLs?.length > 0 && setPacientes(pacientesLs)
      
   }

   obtenerLs();
  },[])
  useEffect(() =>{
   localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])


  const EliminarPaciente = (id) =>{
     const pacientesActualizados = pacientes.filter(pacienteFilter => pacienteFilter.id !== id)
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
