import Button from "./Button";
import { useSelector } from "react-redux";
import { getAllModulos } from "@/peticiones/dashboard";
import { useEffect, useState } from "react";

const Table = ({ options, alumnoId }) => {
  const [modulos, setModulos] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const formation = useSelector((state) => state.userReducer.formations);

  useEffect(() => {
    getAllModulos({
      success: (data) => {
        setModulos(data.payload);
        console.log(data.payload, "MODULOS");
      },
      loading: (isLoading) => {
        setIsLoading(isLoading);
      },
      error: (err) => {
        console.log(err, "ERROR");
      },
    });
  }, []);

  const alumno = options?.find((e) => e._id === alumnoId);
  const moduloCurso = modulos?.find((e) => e._id === alumno?.moduloActual);
  console.log(modulos, "MODULOCCURSOO");
  console.log(alumno, "ALUMNO");

  const formacion = formation.find((e) => e._id === alumno?.formacion);
  console.log(formacion, "FORMACION");

  const formatCreatedAt = (obj) => {
    // Verifica si el objeto tiene la propiedad createdAt y si es una cadena de fecha válida
    if (obj.createdAt && !isNaN(Date.parse(obj.createdAt))) {
      // Crea un objeto Date a partir de la cadena de fecha
      const date = new Date(obj.createdAt);

      // Usa toISOString() para obtener la cadena de fecha en formato ISO
      const isoString = date.toISOString();

      // Extrae las partes de la fecha de la cadena ISO
      const [year, month, day] = isoString.split("T")[0].split("-");

      // Construye la cadena de fecha en el formato deseado
      const formattedDate = `${parseInt(day)}/${parseInt(month)}/${year}`;

      return formattedDate;
    } else {
      throw new Error("El objeto no tiene una propiedad createdAt válida.");
    }
  };

  return (
    <div className="mt-12">
      <table className="min-w-full bg-white rounded-lg shadow-md text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 text-gray-500 font-normal">Nombre</th>
            <th className="px-4 py-2 text-gray-500 font-normal">
              Modulo en curso
            </th>
            <th className="px-4 py-2 text-gray-500 font-normal">
              Alumno desde
            </th>
            <th className="px-4 py-2 text-gray-500 font-normal">Curso</th>
            <th className="px-4 py-2 text-gray-500 font-normal">
              Puntuacion promedio
            </th>
            <th className="px-4 py-2 text-gray-500 font-normal">
              Hs de conexion
            </th>
            <th className="px-4 py-2 text-gray-500 font-normal">Gestionar</th>
          </tr>
        </thead>
        <tbody>
          {alumno ? (
            <tr className="border-t border-gray-300 text-center">
              <td className="px-4 py-2 text-sm ">
                {alumno.name} {alumno.lastName}
              </td>
              <td className="px-4 py-2 text-sm">{moduloCurso?.nombre}</td>
              <td className="px-4 py-2 text-sm">{formatCreatedAt(alumno)}</td>
              <td className="px-4 py-2 text-sm">{formacion?.nombre}</td>
              <td className="px-4 py-2 text-sm">10</td>
              <td className="px-4 py-2 text-sm">20</td>
              <td className="px-4 py-2 text-sm">
                <Button text={"Gestionar alumno"} />
              </td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
