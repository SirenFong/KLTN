import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("eventCreateRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("eventCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase("eventCreateFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase("getAlleventsEmployeeRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAlleventsEmployeeSuccess", (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    .addCase("getAlleventsEmployeeFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("deleteeventRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteeventSuccess", (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase("deleteeventFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getAlleventsRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAlleventsSuccess", (state, action) => {
      state.isLoading = false;
      state.allevents = action.payload;
    })
    .addCase("getAlleventsFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
