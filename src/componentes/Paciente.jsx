import PropTypes from 'prop-types'
const Paciente = ({paciente}) => {
  
  const {id,nombre,propietario,email,alta,sintomas} =paciente;
  return (
    <div className="m-3 bg-white px-10 py-10 shadow-md rounded-md">
       <p className="mb-5 text-gray-700 font-bold uppercase">
        ID: {""} <span className="font-normal normal-case">{id}</span>
      </p>
    <p className="mb-5 text-gray-700 font-bold uppercase">
      Nombre: {""} <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="mb-5 text-gray-700 font-bold uppercase">
      Propietario: {""} <span className="font-normal normal-case">{propietario}</span>
    </p>
    <p className="mb-5 text-gray-700 font-bold uppercase">
      Email: {""} <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="mb-5 text-gray-700 font-bold uppercase">
      Fecha Alta: {""} <span className="font-normal normal-case">{alta}</span>
    </p>
    <p className="mb-5 text-gray-700 font-bold uppercase">
      Sintomas: {""} <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div className='flex justify-between mt-10'>
      <button
      type='button'
      className='py-2 px-10 mr-3 bg-indigo-600 hover:bg-indigo-800 rounded-md text-white'
      >
        Editar
      </button>
      <button
      type='button'
      className='py-2 px-10 bg-indigo-600  hover:bg-red-700 rounded-md text-white'
      >
        Eliminar
      </button>
    </div>
  </div>
  )
}

Paciente.propTypes = {
  // Define prop types here
  paciente: PropTypes.object.isRequired,
};
export default Paciente
