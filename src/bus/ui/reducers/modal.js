import { createReducer } from "@reduxjs/toolkit";

import { uiActions } from "bus/ui/actions";

const initialState = {
  open: false,
};

const uiReducer = createReducer(initialState, {
  [uiActions.modal.open]: (state) => ({
    ...state,
    open: true,
  }),
  [uiActions.modal.close]: (state) => ({
    ...state,
    open: false,
  }),
});

export default uiReducer;
