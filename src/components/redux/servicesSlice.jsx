import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    loadServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const { loadServices, setSearchTerm } = servicesSlice.actions;
export default servicesSlice.reducer;
