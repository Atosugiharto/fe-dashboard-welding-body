import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ohcData: [],
  spData: [],
  summary: {},
  warningLogs: [],
  warningRecordBytype: [],
  warningRecordByMonth: [],
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
    setWarningRecordBytype(state, action) {
      state.warningRecordBytype = action.payload;
    },
    setWarningRecordByMonth(state, action) {
      state.warningRecordByMonth = action.payload;
    },
  },
});

export const {
  setOhcData,
  setSpData,
  setSummary,
  setWarningLogs,
  setWarningRecordBytype,
  setWarningRecordByMonth,
} = ohcSlice.actions;
export default ohcSlice.reducer;
