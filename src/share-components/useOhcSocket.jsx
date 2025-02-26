import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import {
  setOhcData,
  setSpData,
  setSummary,
  setWarningLogs,
  setWarningRecordByMonth,
  setWarningRecordBytype,
  setSelectedMonth,
  setSelectedYear,
} from "../slices/ohcSlice";
import { baseApiUrl, token } from "./api";

export const useOhcSocket = () => {
  const {
    ohcData,
    spData,
    summary,
    warningLogs,
    warningRecordByMonth,
    warningRecordBytype,
    selectedMonth,
    selectedYear,
  } = useSelector((state) => state.ohc);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const socket = io(baseApiUrl, {
      transports: ["websocket", "polling"],
      withCredentials: true,
      reconnection: true,
    });

    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(`${baseApiUrl}/api/monitoring`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setOhcData(data?.data?.ohcs));
        dispatch(setSummary(data?.data?.summary));
        dispatch(setWarningLogs(data?.data?.warningRecord?.data));
        dispatch(setWarningRecordBytype(data?.data?.warningRecord?.byType));
        dispatch(setWarningRecordByMonth(data?.data?.warningRecord?.byMonth));
        dispatch(setSpData(data?.data?.sp));
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    socket.on("ohcStatus", (data) => {
      dispatch(setOhcData(data?.ohcs));
      dispatch(setSummary(data?.summary));
      dispatch(setWarningLogs(data?.warningRecord?.data));
      dispatch(setWarningRecordBytype(data?.warningRecord?.byType));
      dispatch(setWarningRecordByMonth(data?.warningRecord?.byMonth));
      dispatch(setSpData(data?.sp));
    });

    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("disconnect", () => {
      console.warn("Socket disconnected, fetching data from API...");
      fetchDataFromApi();
    });

    socket.on("connect_error", () => {
      console.error("Socket connection error, fetching data from API...");
      fetchDataFromApi();
    });

    // Emit filter request setiap kali bulan atau tahun berubah
    if (selectedMonth && selectedYear) {
      socket.emit("getFilteredWarnigRecord", {
        year: selectedYear,
        month: selectedMonth,
      });
    }

    return () => {
      socket.off("ohcStatus");
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");
      socket.close();
    };
  }, [dispatch, selectedMonth, selectedYear]);

  return {
    ohcData,
    id,
    spData,
    summary,
    warningLogs,
    warningRecordBytype,
    warningRecordByMonth,
    selectedMonth,
    selectedYear,
    setSelectedMonth: (month) => dispatch(setSelectedMonth(month)),
    setSelectedYear: (year) => dispatch(setSelectedYear(year)),
  };
};
