import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ohcData: [],
  spData: [],
  summary: {},
  warningLogs: [],
};

const ohcSlice = createSlice({
  name: "ohc",
  initialState,
  reducers: {
    setOhcData(state, action) {
      state.ohcData = action.payload;
    },
    setSpData(state, action) {
      state.spData = action.payload;
    },
    setSummary(state, action) {
      state.summary = action.payload;
    },
    setWarningLogs(state, action) {
      state.warningLogs = action.payload;
    },
  },
});

export const { setOhcData, setSpData, setSummary, setWarningLogs } =
  ohcSlice.actions;
export default ohcSlice.reducer;
