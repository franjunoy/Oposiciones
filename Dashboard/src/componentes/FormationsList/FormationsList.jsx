import FormationCard from "../FormationCard/FormationCard";
import { useState, useEffect } from "react";
import { getAllFormations } from "@/peticiones/dashboard";
import Button from "../reusableComponents/Button";
import { useRouter } from "next/router";
import { setFormations } from "@/redux/reducer/userReducer";
import { useDispatch } from "react-redux";

const FormationsList = () => {
  const [formationData, setFormationData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    getAllFormations({
      success: (dataRecibida) => {
        setFormationData(dataRecibida.payload);
        dispatch(setFormations(dataRecibida.payload));
      },
      loading: (isLoading) => setIsLoading(isLoading),
      error: (error) => setError(error.response?.data),
    });
  }, []);

  return (
    <section className="formation__list__general__container w-full flex flex-col pr-3 pl-3 pt-2 mt-6">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">Formaciones</h3>
        </div>
        <div className="boton">
          <Button action={() => router.push("/home/crear-formacion")}>
            Añadir nueva formación
          </Button>
        </div>
      </div>

      <div className="formations__list__cards__container w-full mt-4 pl-7 flex flex-col gap-7 ">
        {formationData?.map((formation) => (
          <FormationCard
            key={formation._id}
            formationId={formation._id}
            formation={formation}
          />
        ))}
      </div>
    </section>
  );
};

export default FormationsList;
