import { CloseOutlined, PlayArrowOutlined } from "@mui/icons-material";
import { CardOhcStatus } from "../../../../../share-components/CardOhcStatus";
import MotorLifterChart from "../../../../../share-components/MotorLifterChart";
import TemperatureMotorChart from "../../../../../share-components/TemperatureMotorChart";

export const OhcDetail1 = () => {
  const abnormalities = [
    {
      id: 1,
      label: "Current Motor Lifter",
      value: 0,
    },
    {
      id: 2,
      label: "Current Motor Transfer",
      value: 0,
    },
    {
      id: 3,
      label: "Current Motor Lifter",
      value: 0,
    },
    {
      id: 4,
      label: "Current Motor Transfer",
      value: 0,
    },
  ];

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 items-center">
        <div className="rounded-lg bg-white px-4 h-full flex items-center justify-center">
          <div
            className={`bg-hijau text-center font-bold text-xl p-2 rounded-lg w-full`}
          >
            <p>OHC</p>
            <p>STATUS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            to="/ohc-sbc-wt-sp"
            title="Current Location"
            value={"SP-1"}
            backgroundColor="bg-hijau"
          />
          <CardOhcStatus
            title="Current Location"
            value={"No Body"}
            backgroundColor="bg-kuning"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Running Time"
            value={90}
            unit={"H"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Stop Time"
            value={10}
            unit={"H"}
            backgroundColor="bg-outlet"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Efficiency"
            value={90.7}
            unit={"%"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Performance"
            value={84.3}
            unit={"%"}
            backgroundColor="bg-outlet"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Cycle time"
            value={98}
            unit={"sec"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Takt Time"
            value={98}
            unit={"sec"}
            backgroundColor="bg-outlet"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Current Motor Lifter/h"
            value={230}
            unit={"A"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Current Motor Transfer/h"
            value={150}
            unit={"A"}
            backgroundColor="bg-outlet"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CardOhcStatus
            title="Temp. Motor Lifter/h"
            value={60}
            unit={"°C"}
            backgroundColor="bg-outlet"
          />
          <CardOhcStatus
            title="Temp Motor Trans/h"
            value={40}
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
            <h2 className="text-2xl font-bold text-center mb-10">
              Abnormality
            </h2>
            <div>
              {abnormalities?.map((abnormality, index) => (
                <div key={index} className="grid grid-cols-5 gap-1 mb-2">
                  <div className="col-span-3 px-1 py-2 bg-tombol-abu-tua rounded-md text-center font-bold flex items-center">
                    {abnormality?.label}
                  </div>

                  <div className="col-span-2 px-1 py-2 bg-tombol-abu-tua rounded-md font-bold text-center text-7xl ">
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
