import axios from "axios";

export const getAllFormations = async ({ success, error, loading }) => {
  const token = localStorage.getItem("Token");
  try {
    loading(true);

    let response = await axios.get("/dashboard/formaciones", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err);
    loading(false);
  }
};

export const getCursoId = async ({ id, success, error, loading }) => {
  const token = localStorage.getItem("Token");

  try {
    loading(true);

    const response = await axios.get(`/dashboard/curso/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error(err);
    error(err);
    loading(false);
  }
};

export const createFormations = async ({
  success,
  error,
  loading,
  formacion,
}) => {
  const token = localStorage.getItem("Token");
  try {
    loading(true);

    let response = await axios.post(
      "/dashboard/crearformacion",
      {
        nombreFormacion: formacion.nombreFormacion,
        descripcionFormacion: formacion.descripcionFormacion,
        modulos: formacion.modulos,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err);
    loading(false);
  }
};

export const putTemas = async ({
  success,
  error,
  loading,
  moduloActualizar,
}) => {
  const token = localStorage.getItem("Token");

  try {
    loading(true);

    let response = await axios.post(
      "/dashboard/modificartemas",
      {
        moduloActualizar,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err);
    loading(false);
  }
};

export const createQuizletToTheme = async ({
  success,
  error,
  loading,
  themeId,
  quizlet,
}) => {
  const token = localStorage.getItem("Token");
  try {
    loading(true);

    let response = await axios.post(
      "/dashboard/crearpreguntas",
      {
        themeId,
        quizlet,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err);
    loading(false);
  }
};

export const getQuizletId = async ({ id, success, error, loading }) => {
  const token = localStorage.getItem("Token");

  try {
    loading(true);

    const response = await axios.get(`/dashboard/quizletbyid/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error(err);
    error(err);
    loading(false);
  }
};

export const postAlumnos = async ({
  success,
  error,
  loading,
  email,
  name,
  lastName,
  phone,
  cursoId,
}) => {
  const token = localStorage.getItem("Token");
  try {
    loading(true);

    let response = await axios.post(
      "/dashboard/inscripcionManual",
      { email, name, lastName, phone, cursoId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err);
    loading(false);
  }
};

export const getAllAlumnos = async ({ success, error, loading }) => {
  const token = localStorage.getItem("Token");
  try {
    loading(true);

    let response = await axios.get("/dashboard/alumnos", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err);
    loading(false);
  }
};

export const getAllModulos = async ({ success, error, loading }) => {
  const token = localStorage.getItem("Token");
  try {
    loading(true);

    let response = await axios.get("/dashboard/modulos", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err);
    loading(false);
  }
};
