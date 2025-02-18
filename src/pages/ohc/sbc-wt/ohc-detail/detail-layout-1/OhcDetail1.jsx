/* eslint-disable react/prop-types */
import { CloseOutlined, PlayArrowOutlined } from "@mui/icons-material";
import { CardOhcStatus } from "../../../../../share-components/CardOhcStatus";
import MotorLifterChart from "../../../../../share-components/MotorLifterChart";
import TemperatureMotorChart from "../../../../../share-components/TemperatureMotorChart";
import { useParams } from "react-router-dom";
import { useOhcSocket } from "@src/share-components/useOhcSocket";
// import { convertSecondsToTime } from "../../../../../share-components/Helper";

export const OhcDetail1 = () => {
  const { ohcData } = useOhcSocket();
  const { elementId } = useParams();
  const selectedData = ohcData?.find((data) => data?.name === elementId);

  const abnormalities = [
    {
      id: 1,
      label: "Current Motor Lifter",
      value: selectedData?.currentMotorLifterAsset?.value,
    },
    {
      id: 2,
      label: "Current Motor Transfer",
      value: selectedData?.currentMotorTransferAsset?.value,
    },
    {
      id: 3,
      label: "Temperature Motor Lifter",
      value: selectedData?.tempMotorLifterAsset?.value,
    },
    {
      id: 4,
      label: "Temperature Motor Transfer",
      value: selectedData?.tempMotorTransferAsset?.value,
    },
  ];

  return (
    <div id={elementId} className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 items-center">
        <div className="rounded-lg bg-white px-4 h-full flex items-center justify-center">
          <div
            className={`bg-hijau text-center font-bold text-xl 4k:text-4xl p-2 rounded-lg w-full`}
          >
            <p>OHC</p>
            <p>STATUS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            // to="/ohc-sbc-wt-sp/1"
            title="Current Location"
            value={selectedData?.sp[0]?.name ? selectedData?.sp[0]?.name : "-"}
            backgroundColor="bg-hijau"
          />
          <CardOhcStatus
            title="Current Condition"
            value={selectedData?.condition}
            backgroundColor="bg-kuning"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Running Time"
            value={selectedData?.runningTime}
            unit={"H"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Stop Time"
            value={selectedData?.stopTime}
            unit={"H"}
            backgroundColor="bg-outlet"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Efficiency"
            value={selectedData?.efficiency}
            unit={"%"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Performance"
            value={selectedData?.performance}
            unit={"%"}
            backgroundColor="bg-outlet"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Cycle time"
            value={selectedData?.cycleTime}
            unit={"sec"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Takt Time"
            value={selectedData?.taktTime ? selectedData?.taktTime : 0}
            unit={"sec"}
            backgroundColor="bg-outlet"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Current Motor Lifter/h"
            value={selectedData?.currentMotorLifterAsset?.value}
            unit={"A"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Current Motor Transfer/h"
            value={selectedData?.currentMotorTransferAsset?.value}
            unit={"A"}
            backgroundColor="bg-outlet"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Temp. Motor Lifter/h"
            value={selectedData?.tempMotorLifterAsset?.value}
            unit={"°C"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Temp Motor Trans/h"
            value={selectedData?.tempMotorTransferAsset?.value}
            unit={"°C"}
            backgroundColor="bg-outlet"
          />
        </div>
      </div>

      {/* line chart & abnormality */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 mt-2">
        <div className="col-span-2 grid grid-cols-1 gap-2">
          <div className="rounded-lg bg-white w-full h-full p-2">
            <MotorLifterChart
              icon={
                <PlayArrowOutlined className="border border-black text-black bg-kuning h-20 w-20 -rotate-90" />
              }
            />
          </div>
          <div className="rounded-lg bg-white w-full h-full p-2">
            <MotorLifterChart
              icon={
                <CloseOutlined className="border border-black text-black bg-merah h-20 w-20 -rotate-90" />
              }
            />
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-2">
          <div className="rounded-lg bg-white w-full h-full p-2">
            <TemperatureMotorChart />
          </div>
          <div className="rounded-lg bg-white w-full h-full p-2">
            <TemperatureMotorChart />
          </div>
        </div>

        <div>
          <div className="rounded-lg bg-white w-full h-full p-2">
            <h2 className="text-2xl 4k:text-5xl font-bold text-center mb-10">
              Abnormality
            </h2>
            <div>
              {abnormalities?.map((abnormality, index) => (
                <div key={index} className="grid grid-cols-5 gap-1 mb-4">
                  <div className="4k:text-3xl col-span-3 px-2 py-4 bg-tombol-abu-tua rounded-md text-center font-bold flex items-center">
                    {abnormality?.label}
                  </div>

                  <div className="col-span-2 px-2 py-4 bg-tombol-abu-tua rounded-md font-bold text-center text-4xl 4k:text-7xl">
                    {abnormality?.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
