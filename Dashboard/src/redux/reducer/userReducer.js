import { createSlice } from "@reduxjs/toolkit";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";

const initialState = {
  user: undefined,
  formations: null,
  formationsId: null,
  alumnos: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.user = action.payload;
    },
    setFormations(state, action) {
      state.formations = action.payload;
    },
    setFormationsId(state, action) {
      state.formationsId = action.payload;
    },
    setAlumnos(state, action) {
      state.alumnos = action.payload;
    },
  },
});

//ACA SE EXPORTAN LAS ACTIONS QUE SE CREAN AUTOMATICAMENTE MAS ARRIVA
export const { setUsers, setFormations, setFormationsId, setAlumnos } =
  userReducer.actions;

//ACA SE EXPORTAN O EXPORTA EL REDUCER
export default userReducer.reducer;
