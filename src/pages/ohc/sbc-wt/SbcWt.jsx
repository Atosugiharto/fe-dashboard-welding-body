import { MenuDate } from "@src/share-components/MenuDate";
import { CardWithValue } from "@src/share-components/CardWithValue";
import { CardOhcDetail } from "../../../share-components/CardOhcDetail";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Diagram from "./Diagram";
import { useOhcSocket } from "@src/share-components/useOhcSocket";
import { formatDateTimeWarningLogs } from "../../../share-components/Helper";
import { Link } from "react-router-dom";

export const SbcWt = () => {
  const { ohcData, summary, warningLogs } = useOhcSocket();

  return (
    <div className="4k:text-3xl">
      <div>
        <MenuDate menu={"OHC SBC -WT"} />
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-4 lg:grid-cols-9 gap-2 items-center 4k:text-4xl">
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
          <div className="col-span-1 grid grid-cols-1 gap-2 text-md">
            <button className="bg-gray-300 rounded-lg py-2 px-4 font-bold">
              Daily
            </button>
            <button className="bg-gray-300 rounded-lg py-2 px-4 font-bold">
              Total
            </button>
          </div>
        </div>

        <div className="mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-2">
            <div className="lg:col-span-5 4k:col-span-6 bg-white rounded-lg p-2">
              <p>Layout</p>
              <div className="mt-4">
                <Diagram />
              </div>
            </div>
            <div className="lg:col-span-3 4k:col-span-2">
              <div className="bg-white rounded-lg">
                <div className="grid grid-cols-3 gap-2 items-center p-2 font-bold">
                  <div className="col-span-1">OHC Status</div>
                  <div className="flex items-center gap-4 text-xs 4k:text-2xl">
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
                      key={ohc?.id}
                      to={`/ohc-sbc-wt-detail/${ohc?.name}`}
                      title={ohc?.name}
                      amp={ohc?.currentMotorTransferAsset?.value}
                      temp={ohc?.tempMotorTransferAsset?.value}
                      backgroundColor={
                        ohc?.status?.toLowerCase() === "ng"
                          ? "bg-merah"
                          : "bg-hijau"
                      }
                      borderColor={
                        ohc?.status?.toLowerCase() === "ng"
                          ? "border-merah"
                          : ohc?.status?.toLowerCase() === "repair"
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
                    <div className="max-h-60 overflow-y-scroll">
                      {warningLogs?.map((item) => (
                        <div key={item?.id} className="mt-2 ml-6">
                          <p>{`${formatDateTimeWarningLogs(
                            item?.createdAt
                          )} : ${item?.detail} ${item?.type}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1 mt-10">
                    <Link to={"/ohc-sbc-wt-sp-fault"}>
                      <ChevronRightIcon className="h-7" />
                    </Link>
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
