import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { setOhcData } from "../slices/ohcSlice";

export const useOhcSocket = () => {
  const { ohcData } = useSelector((state) => state.ohc); // Ambil data dari Redux
  const dispatch = useDispatch();
  const { id } = useParams(); // Ambil ID dari parameter URL

  useEffect(() => {
    const socket = io("http://147.93.30.33:8000", {
      transports: ["websocket", "polling"],
      withCredentials: true,
      reconnection: true, // Aktifkan reconnect
    });

    socket.on("ohcStatus", (data) => {
      console.log("Received data:", data);
      dispatch(setOhcData(data?.ohcs)); // Update data ke Redux
    });

    // Cleanup saat komponen di-unmount
    return () => {
      socket.off("ohcStatus"); // Hapus event listener
      socket.close(); // Tutup koneksi WebSocket
    };
  }, [dispatch]);

  return { ohcData, id };
};
