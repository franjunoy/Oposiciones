import React, { useState, useRef, useEffect } from "react";
import Button from "../reusableComponents/Button";
import _ from "lodash";

const FormationForm = ({
  onSubmit,
  updateFormacion,
  updateModulo,
  updateTema,
  handleAddModule,
  formacion,
  actulizarTemas,
  addTema,
  addModulo,
  index,
  detectarCambios,
}) => {
  const [stateTemas, setStateTemas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formacion);
  };

  const handleAddModuleAndTema = (e) => {
    e.preventDefault();
    updateTema(stateTemas);
    handleAddModule("add");
    setStateTemas("");
  };

  const handleAddTemas = (e) => {
    e.preventDefault();
    addTema(stateTemas, index);
    setStateTemas("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8  w-full px-6 py-2 rounded-xl ">
      {/* DATOS DE FORMACION SECTION====================================================================== */}
      <section className="formacion__general__container border border-gray-300 p-6 rounded-3xl shadow-2xl shadow-black ">
        <div className="flex flex-col mb-1 ">
          <div className="titulo&boton flex flex-row items-center justify-between mb-4  ">
            <h2 className="font-semibold text-gray-900">Datos Formación</h2>
            <div className="flex flex-row items-center gap-6">
              {addTema && (
                <Button
                  type="submit"
                  descripcion={"Actualizar módulo"}
                  disabled={_.isEqual(
                    detectarCambios?.modulos[index]?.temas,
                    formacion?.modulos[index]?.temas
                  )}
                />
              )}
              {addModulo && (
                <Button
                  type="submit"
                  descripcion={"Actualizar formación"}
                  disabled={_.isEqual(
                    detectarCambios?.modulos[index]?.temas,
                    formacion?.modulos[index]?.temas
                  )}
                />
              )}
              {!addTema && !addModulo && (
                <Button
                  type="submit"
                  descripcion={"Crear formación"}
                  disabled={
                    formacion?.modulos[0].nombreModulo !== "" &&
                    formacion?.nombreFormacion !== "" &&
                    formacion?.descripcionFormacion !== ""
                      ? false
                      : true
                  }
                />
              )}
            </div>
          </div>
          {(actulizarTemas || actulizarTemas === 0) && (
            <p className="text-gray-500">Agregar temas de la formacion:</p>
          )}
          {!actulizarTemas && actulizarTemas !== 0 && !addModulo && (
            <p className="text-gray-500">
              Ingresa la información básica de la formación
            </p>
          )}
          {addModulo && (
            <p className="text-gray-500">Agregar modulos de la formacion:</p>
          )}
        </div>

        <div className="formacion__inputs__container flex flex-col gap-2">
          <div className="flex flex-col gap-1 mb-4">
            {addTema || addModulo ? null : (
              <label
                htmlFor="formationName"
                className="text-sm font-medium mb-1">
                Nombre de la Formación:{" "}
                <label className="label text-xs italic text-gray-600">
                  (requerido)
                </label>
              </label>
            )}

            {addTema || addModulo ? (
              <div>{formacion.nombre}</div>
            ) : (
              <input
                type="text"
                value={formacion.nombreFormacion}
                onChange={(e) =>
                  updateFormacion("nombreFormacion", e.target.value)
                }
                name="formationName"
                id="formationName"
                placeholder="Ingresar nombre"
                className=" p-1 border border-indigo-600/25 rounded-md outline-none pl-2 text-sm"
              />
            )}
          </div>

          {!(addTema || addModulo) && (
            <div className="flex flex-col mb-2">
              <label
                htmlFor="formationDescription"
                className="text-sm font-medium mb-1">
                Descripción:{" "}
                {!actulizarTemas && actulizarTemas !== 0 && (
                  <label className="label text-xs italic text-gray-600">
                    (requerido)
                  </label>
                )}
              </label>
              <input
                type="text"
                value={formacion.descripcionFormacion}
                onChange={(e) =>
                  updateFormacion("descripcionFormacion", e.target.value)
                }
                name="formationDescription"
                id="formationDescription"
                placeholder="Ingresar descripción"
                className=" p-1 border border-indigo-600/25 rounded-md outline-none pl-2 text-sm"
              />
            </div>
          )}
        </div>
      </section>

      {/* MODULOS SECTION====================================================================== */}
      <section
        className="modulos__section  border border-gray-300 p-6 rounded-3xl shadow-2xl shadow-black"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#8781e0 transparent",
        }}>
        <div className="module__container  pr-4 flex flex-col gap-1 ">
          {/* Módulos ================================================= */}
          <div className="flex flex-col gap-1 ">
            {!actulizarTemas && actulizarTemas !== 0 && (
              <div className="titulo ">
                <h3 className="font-semibold text-gray-900 ">Módulos </h3>
                <p className="text-gray-500 mb-4">
                  Ingresa la información básica del módulo
                </p>
              </div>
            )}

            {(actulizarTemas || actulizarTemas === 0) && (
              <div className="actulizarTemasTitulo">
                <h3 className="font-semibold text-gray-900 ">Módulo: </h3>
                <p className="text-gray-500 mb-4">
                  {formacion?.modulos[actulizarTemas]?.nombre}
                </p>
              </div>
            )}

            {!actulizarTemas && actulizarTemas !== 0 && (
              <div className="flex flex-col mb-4 ">
                <label
                  htmlFor="moduleName"
                  className="text-sm font-medium mb-1">
                  Nombre del módulo:{" "}
                  <label className="label text-xs italic text-gray-600">
                    (requerido)
                  </label>
                </label>
                <input
                  type="text"
                  onChange={(e) => updateModulo("nombreModulo", e.target.value)}
                  value={
                    formacion.modulos[formacion.modulos.length - 1].nombreModulo
                  }
                  id="moduleName"
                  name="moduleName"
                  placeholder="Ingresar nombre"
                  className=" p-1 border border-indigo-600/25 rounded-md outline-none pl-2 text-sm"
                />
              </div>
            )}

            {/*TEMAS **************************************************************************/}
            <div
              key={"temaIndex"}
              className="theme__container flex flex-col gap-1 ">
              <div className="flex flex-col">
                <label htmlFor="theme" className="text-sm font-medium mb-1">
                  Agregar temas al módulo:
                </label>

                <textarea
                  type="text"
                  onChange={(e) => setStateTemas(e.target.value)}
                  value={stateTemas}
                  placeholder={`Introduzca los titulos de los temas de este módulo, separados por coma.\nEjemplo: Tema 1,  Tema 2,  Tema 3, ... `}
                  name="theme"
                  id="theme"
                  className=" p-2 border border-indigo-600/25 rounded-md outline-none pl-2 text-sm  "
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-3">
              <div className="flex flex-row items-center gap-6">
                <Button
                  action={addTema ? handleAddTemas : handleAddModuleAndTema}
                  disabled={
                    formacion.modulos[formacion.modulos.length - 1]
                      .nombreModulo === ""
                      ? true
                      : false
                  }>
                  {addTema ? "Agregar temas" : "Agregar módulo"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default FormationForm;
