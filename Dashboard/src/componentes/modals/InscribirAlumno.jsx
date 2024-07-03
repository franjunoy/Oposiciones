import Button from "@/componentes/reusableComponents/Button";
import EmailInput from "@/componentes/reusableComponents/EmailInput";
import NameInput from "@/componentes/reusableComponents/NameInput";
import SelectSearch from "@/componentes/reusableComponents/SelectSearch";
import { useState } from "react";
import { useSelector } from "react-redux";
import NumberInput from "@/componentes/reusableComponents/NumberInput";
import { postAlumnos } from "@/peticiones/dashboard";
import { useModal } from "@/context/ModalContext";

const InscribirAlumno = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cursoId, setCursoId] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const formations = useSelector((state) => state.userReducer.formations);

  const { closeModal } = useModal();

  const handleSubmit = () => {
    setLoading(true);

    postAlumnos({
      email,
      name,
      lastName,
      phone,
      cursoId,
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        setError("Error al crear alumno " + err.message);
      },
      loading: (isLoading) => {
        setLoading(isLoading);
      },
    });
  };
  console.log(cursoId, "CURSOID");
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-primary text-4xl font-medium my-8 ">
        Inscribir alumnos
      </h1>
      <div className="w-4/5 h-full flex flex-col justify-center items-center">
        <SelectSearch
          title={"Formacion"}
          placeholder={"Selecciona una formacion"}
          options={formations}
          setValue={setCursoId}
          value={cursoId}
        />
        <NameInput setValue={setName} value={name} />
        <NameInput setValue={setLastName} value={lastName} />
        <NumberInput setValue={setPhone} value={phone} weight={"w-full"} />
        <EmailInput setValue={setEmail} value={email} />
      </div>
      <div className="flex flex-row justify-center items-center mt-4">
        <Button text={"Cancelar"} action={() => closeModal()} />
        <Button text={"Inscribir"} action={(e) => handleSubmit(e)} />
      </div>
    </div>
  );
};

export default InscribirAlumno;
