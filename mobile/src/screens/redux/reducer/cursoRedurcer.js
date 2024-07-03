import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formacion: undefined,
  modulos: null,
  temas: '',
  loading: false,
  error: false
};

const cursoRedurcer = createSlice({
  name: 'cursoRedurcer',
  initialState,
  reducers: {
    setFormaciones(state, action) {
      state.formacion = action.payload;
    },
    setModulos(state, action) {
      state.modulos = action.payload;
    },
    setTemas(state, action) {
      state.temas = action.payload;
    }
  }
});

//ACA SE EXPORTAN LAS ACTIONS QUE SE CREAN AUTOMATICAMENTE MAS ARRIVA
export const { setFormaciones, setModulos, setTemas} = cursoRedurcer.actions;

//ACA SE EXPORTAN O EXPORTA EL REDUCER
export default cursoRedurcer.reducer;
