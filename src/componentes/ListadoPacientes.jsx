import PropTypes from "prop-types";
import Paciente from "./Paciente";
const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll sm:mt-20 md:mt-0 lg:mt-0 mx-5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">
            Listado Pacientes
          </h2>
          <p className="text-xl text-center mt-5 mb-10">
            Admistra tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y citas
            </span>
          </p>

          {pacientes.map((paciente) => {
            return <Paciente key={paciente.id} paciente={paciente} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10">
            Agrega tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y citas
            </span>
          </p>
        </>
      )}
    </div>
  );
};

ListadoPacientes.propTypes = {
  // Define prop types here
  pacientes: PropTypes.array.isRequired,
};
export default ListadoPacientes;
