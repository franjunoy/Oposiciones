import { useRouter } from "next/router";
import Button from "../reusableComponents/Button";

const FormationCardReu = ({ formation }) => {
  const router = useRouter();

  const nameModulo = () => {
    const name = formation.modulos.map((e) => {
      const newName = e.nombre.trim();
      const nameUpper =
        newName.trim().charAt(0).toUpperCase() + newName.slice(1);
      return nameUpper;
    });
    return name.join(", ");
  };

  return (
    <div className="font-primary flex flex-row mx-6 space-x-4 space-y-4 my-3">
      <div className="w-full sm:w-80 min-h-40 flex flex-col justify-between rounded-2xl bg-[#ACB1CC] p-5">
        <div>
          <h1 className="text-lg font-primary">{formation.nombre}</h1>
          <p className="pt-3 text-sm">{nameModulo()}</p>
          <p className="pt-1 text-sm">Alumnos: {formation.alumnos.length}</p>
        </div>
        <div className="flex justify-between items-center mt-3 mx-8">
          <Button
            text={"Alumnos"}
            action={(e) =>
              router.push(
                `/home/alumnos?title=${encodeURIComponent(
                  formation.nombre
                )}&id=${encodeURIComponent(formation._id)}`
              )
            }
          />
          <Button
            text={"Modulos"}
            action={() => router.push(`/home/formaciones/${formation._id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default FormationCardReu;
