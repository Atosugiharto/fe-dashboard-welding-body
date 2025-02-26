import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ohcData: [],
  spData: [],
  summary: {},
  warningLogs: [],
  warningRecordBytype: [],
  warningRecordByMonth: [],
  ohcConditionRecord: [],
  spConditionRecord: [],
  selectedMonth: new Date().toLocaleString("id-ID", { month: "long" }), // Default ke bulan saat ini
  selectedYear: new Date().getFullYear().toString(), // Default ke tahun saat ini
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
    setSelectedMonth(state, action) {
      state.selectedMonth = action.payload;
    },
    setSelectedYear(state, action) {
      state.selectedYear = action.payload;
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
  setSelectedMonth,
  setSelectedYear,
} = ohcSlice.actions;
export default ohcSlice.reducer;
