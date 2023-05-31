import { useState } from "react"

const Formulario = () => {

  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [alta,setAlta] = useState('');
  const [sintomas,setSintomas] = useState('');
  const [error,setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre,propietario,email,alta,sintomas].includes('')){
       console.log("Debe llenar todos los campos  ");
       setError(true);
    }else{
      console.log("Enviando Formulario");
      setError(false);
    }
    
  }
  return (


    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>  
      <p className="text-lg mt-5 text-center mb-10">
        Agrega pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>   

      <form className="bg-white py-10 px-10 rounded-lg shadow-md"
      onSubmit={handleSubmit}
      >
        <div className={`bg-red-800 text-white p-3 text-center mb-2 ${error ? 'block' : 'hidden'}`}>
          {error && 'Todos los campos son obligatorios'}
        </div>
        <div className="mb-5">
        <label htmlFor="mascota"
          className="block text-gray-600 font-bold uppercase ">NOMBRE MASCOTA
        </label>
        <input 
        id="mascota"
        type="text"
        placeholder="Nombre de la mascota"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={nombre}
        onChange={(e) => {setNombre(e.target.value)}}
        />
        </div>
       
        <div className="mb-5">
        <label htmlFor="propietario"
          className="block text-gray-600 font-bold uppercase ">NOMBRE PROPIETARIO
        </label>
        <input 
        id="propietario"
        type="text"
        placeholder="Nombre del propietario"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={propietario}
        onChange={(e) => {setPropietario(e.target.value)}}
        />
        </div>
        <div className="mb-5">
        <label htmlFor="email"
          className="block text-gray-600 font-bold uppercase ">EMAIL
        </label>
        <input 
        id="email"
        type="text"
        placeholder="Email del propietario"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        />
        </div>
        <div className="mb-5">
        <label htmlFor="alta"
          className="block text-gray-600 font-bold uppercase ">ALTA
        </label>
        <input 
        id="alta"
        type="date"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={alta}
        onChange={(e) => {setAlta(e.target.value)}}
        />
        </div>
        <div className="mb-5">
        <label htmlFor="sintomas"
          className="block text-gray-600 font-bold uppercase ">SINTOMAS
        </label>
           <textarea
              id="sintomas"
              placeholder="Describa los sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={sintomas}
              onChange={(e) => {setSintomas(e.target.value)}}
           />
        </div>

        <input 
        type="submit"
        className="bg-indigo-600 w-full text-white font-bold p-3 uppercase hover:bg-indigo-700 cursor-pointer rounded-md" 
        value="Agregar Paciente"
        />
      </form>
    </div>
    
  )
}

export default Formulario
