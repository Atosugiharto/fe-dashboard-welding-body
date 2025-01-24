import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { setOhcData, setSpData, setSummary } from "../slices/ohcSlice";
import { baseApiUrl, token } from "./api";

export const useOhcSocket = () => {
  const { ohcData, spData, summary } = useSelector((state) => state.ohc); // Ambil data dari Redux
  const dispatch = useDispatch();
  const { id } = useParams(); // Ambil ID dari parameter URL

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const socket = io(baseApiUrl, {
      transports: ["websocket", "polling"],
      withCredentials: true,
      reconnection: true, // Aktifkan reconnect
    });

    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(`${baseApiUrl}/api/monitoring`, config);
        const data = await response.json();
        dispatch(setOhcData(data?.data?.ohcs)); // Update data ke Redux
        dispatch(setSummary(data?.data?.summary)); // Update data ke Redux
        dispatch(setSpData(data?.data?.sp)); // Update data ke Redux
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchDataFromApi();
    // Event listener untuk menerima data dari socket
    socket.on("ohcStatus", (data) => {
      dispatch(setOhcData(data?.ohcs)); // Update data ke Redux
      dispatch(setSummary(data?.summary)); // Update data ke Redux
      dispatch(setSpData(data?.sp)); // Update data ke Redux
    });

    // Event listener saat socket berhasil terhubung
    socket.on("connect", () => {
      console.log("Socket connected");
    });

    // Event listener saat socket terputus
    socket.on("disconnect", () => {
      console.warn("Socket disconnected, fetching data from API...");
      fetchDataFromApi(); // Ambil data dari API saat socket mati
    });

    // Event listener jika terjadi error saat koneksi
    socket.on("connect_error", () => {
      console.error("Socket connection error, fetching data from API...");
      fetchDataFromApi(); // Ambil data dari API jika terjadi error koneksi
    });

    // Cleanup saat komponen di-unmount
    return () => {
      socket.off("ohcStatus");
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");
      socket.close();
    };
  }, [dispatch]);

  return { ohcData, id, spData, summary };
};
