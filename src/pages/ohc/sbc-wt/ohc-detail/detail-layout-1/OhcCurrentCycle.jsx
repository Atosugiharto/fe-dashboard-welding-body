/* eslint-disable react/prop-types */
import Table from "../../../../../share-components/Table";
import TableOhcCycleCondition from "../../../../../share-components/TableOhcCycleCondition";
import ohc1_1 from "@src/assets/ohc-cycle.PNG";

export const OhcCurrentCycle = ({ dataCycleConditions = [] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 mt-4">
      <div className="lg:col-span-4 bg-white rounded-lg">
        <div className="p-2 text-md font-bold">Layout</div>
        <img src={ohc1_1} alt="" className="w-full rounded-lg mt-2 mb-4" />
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 gap-2">
        <div className="bg-white rounded-lg py-2 pl-5 pr-2">
          <div className="text-md font-bold mb-4">Current Conditions</div>
          <Table />
        </div>

        <div className="bg-white rounded-lg py-2 pl-5 pr-2">
          <div className="text-md font-bold mb-4">Cycle Time</div>
          <TableOhcCycleCondition data={dataCycleConditions} />
        </div>
      </div>
    </div>
  );
};
