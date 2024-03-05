import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const doctorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadDoctorRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadDoctorSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.Doctor = action.payload;
    })
    .addCase("LoadDoctorFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
  // .addCase('clearMessages', (state) => {
  //   state.successMessage = null;
  // });
});
