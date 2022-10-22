import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
// import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AllState {
  user: any;
}

// Initial state
const initialState: AllState = {
  user: {},
};

// Actual Slice
export const allSlice = createSlice({
  name: "allState",
  initialState,
  reducers: {

    // Action to set the authentication status
    setUser(state, action) {
      
      state.user = action.payload;
      console.log(action.payload);
    },
    // // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   [HYDRATE]: (state: any, action: any) => {
    //     return {
    //       ...state,
    //       ...action.payload.auth,
    //     };
    //   },
    // },

  },
});

export const { setUser } = allSlice.actions;

export const selectState = (state: AppState) => state.allState;

export default allSlice.reducer;
