import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../reusableComponents/Button";
import { getCursoId } from "@/peticiones/dashboard";
import { useDispatch } from "react-redux";
import { setFormationsId } from "@/redux/reducer/userReducer";

const FormationCard = ({ formation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cursoData, setCursoData] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleIngresarClick = async (formation) => {
    setError(null);
    setIsLoading(true);

    try {
      await getCursoId({
        id: formation._id,
        success: (data) => {
          setCursoData(data);
          setIsLoading(false);
          dispatch(setFormationsId(data));
          router.push(`/home/formaciones/${formation._id}`);
        },
        error: (err) => {
          setError(err);
          setIsLoading(false);
        },
        loading: (isLoading) => setIsLoading(isLoading),
      });
    } catch (err) {
      console.error("Error fetching curso data:", err);
      setError(err);
      setIsLoading(false);
    }
  };

  return (
    <article className="w-full flex justify-between items-center border-b border-gray-300 pb-2 mt-2">
      <p
        style={{
          scrollbarColor: "#8781e0ae transparent",
          scrollbarWidth: "thin",
        }}
        className="text-base font-semibold ">
        {formation.nombre}
      </p>
      <div className="boton">
        <Button
          action={() => handleIngresarClick(formation)}
          disabled={isLoading}>
          {isLoading ? "Cargando..." : "Ingresar"}
        </Button>
      </div>
      {error && <p className="text-red-500">{error.message}</p>}{" "}
    </article>
  );
};

export default FormationCard;
