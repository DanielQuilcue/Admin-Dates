import Paciente from "./Pacientes";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => { 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
      {pacientes && pacientes.length ? (
        <>
          <h1 className="font-black text-3xl text-center mb-10">
            Listado Pacientes
          </h1>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-violet-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente 
              key={paciente.id} 
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}  
            />
          ))}
        </>
      ) : (
        <>
          <h1 className="font-black text-3xl text-center mb-10">
            No hay pacientes
          </h1>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes
            <span className="text-indigo-600 font-bold">
              {" "}
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
