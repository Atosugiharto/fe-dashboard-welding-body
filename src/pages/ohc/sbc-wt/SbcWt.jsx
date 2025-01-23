import { MenuDate } from "@src/share-components/MenuDate";
import { CardWithValue } from "@src/share-components/CardWithValue";
import { CardOhcDetail } from "../../../share-components/CardOhcDetail";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
// import layoutWelding from "@src/assets/layout-welding.PNG";
import Diagram from "./Diagram";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setOhcData, setSummary } from "../../../slices/ohcSlice";

export const SbcWt = () => {
  const dispatch = useDispatch();
  const { ohcData, summary, warningLogs } = useSelector((state) => state.ohc);

  useEffect(() => {
    const socket = io("http://147.93.30.33:8000", {
      transports: ["websocket", "polling"],
      withCredentials: true,
      reconnection: true, // Aktifkan reconnect
    });

    socket.on("ohcStatus", (data) => {
      // console.log("Received data:", data);
      dispatch(setSummary(data?.summary));
      dispatch(setOhcData(data?.ohcs));
    });

    // Cleanup saat komponen di-unmount
    return () => {
      socket.off("ohcStatus"); // Hapus event listener
      socket.close(); // Tutup koneksi WebSocket
    };
  }, [dispatch]);

  return (
    <div>
      <div>
        <MenuDate menu={"OHC SBC -WT"} />
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-4 lg:grid-cols-9 gap-2 items-center">
          <CardWithValue
            classAdditional={"col-span-2"}
            label={"Running Time"}
            value={summary?.runningTime}
            unit={"H"}
          />
          <CardWithValue
            classAdditional={"col-span-2"}
            label={"Efficiency"}
            value={summary?.efficiency}
            unit={"%"}
          />
          <CardWithValue
            classAdditional={"col-span-2"}
            label={"Stop Time"}
            value={summary?.stopTime}
            unit={"H"}
          />
          <CardWithValue
            classAdditional={"col-span-2"}
            label={"Performance"}
            value={summary?.performance}
            unit={"%"}
          />
          <div className="col-span-1 grid grid-cols-1 gap-2">
            <button className="bg-gray-300 rounded-lg py-2 px-4 text-md font-bold">
              Daily
            </button>
            <button className="bg-gray-300 rounded-lg py-2 px-4 text-md font-bold">
              Total
            </button>
          </div>
        </div>

        <div className="mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-2">
            <div className="lg:col-span-5 bg-white rounded-lg p-2">
              <p>Layout</p>
              <div className="mt-4">
                {/* <img src={layoutWelding} alt="" className="w-full h-auto" /> */}
                <Diagram />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg">
                <div className="grid grid-cols-3 gap-2 items-center p-2 font-bold">
                  <div className="col-span-1">OHC Status</div>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-hijau border border-black" />
                      <p>Ready</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-hijau border border-kuning" />
                      <p>Repair</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-merah border border-black" />
                      <p>NG</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center mt-2 p-2 font-semibold">
                  {ohcData?.map((ohc) => (
                    <CardOhcDetail
                      key={ohc.id}
                      to={`/ohc-sbc-wt-detail/${ohc.id}`}
                      title={`OHC ${ohc?.id}`}
                      amp={ohc?.tempMotorLifter}
                      temp={ohc?.tempMotorTransfer}
                      backgroundColor={
                        ohc?.status === "NG" ? "bg-merah" : "bg-hijau"
                      }
                      borderColor={
                        ohc?.status === "NG"
                          ? "border-merah"
                          : ohc?.status === "Repair"
                          ? "border-kuning"
                          : "border-hijau"
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <div className="bg-white rounded-lg p-2 grid grid-cols-12 gap-2">
                  <div className="col-span-11">
                    <p className="font-bold">Warning</p>
                    {warningLogs.map((item, index) => (
                      <div key={index} className="mt-2 ml-6">
                        <p>{`${item.date} ${item.time} : ${item.message}`}</p>
                      </div>
                    ))}
                  </div>
                  <div className="col-span-1 mt-10">
                    <button>
                      <ChevronRightIcon className="h-7" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
