import axios from "axios";

export const udploadFileinTheme = async ({ themeId, file, description, success, error, loading }) => {
  const token = localStorage.getItem("Token");
  console.log("aca", themeId, file);
  try {
    loading(true);
    
    // Usando FormData para enviar el archivo
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);

    const response = await axios.post(`/ia/udploadPdf/${themeId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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

export const getAllDocuments = async ({ themeId, success, error, loading }) => {
  const token = localStorage.getItem("Token");
  try {
    loading(true);
    

    const response = await axios.get(`/ia/getAllDocument/${themeId}`, {
      headers: {
        "Content-Type": "multipart/form-data",
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
export const generateQuizlet = async ({ themeId,docId, success, error, loading }) => {
  try {
    loading(true);
    
    const token = localStorage.getItem("Token");

    const response = await axios.post(`/ia/generateQuestion/${docId}/${themeId}`, {
      headers: {
        'Content-Type': 'application/json',
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
