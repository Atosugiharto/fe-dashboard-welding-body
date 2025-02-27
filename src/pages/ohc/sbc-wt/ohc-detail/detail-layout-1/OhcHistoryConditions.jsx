import ohc1_1 from "@src/assets/ohc-cycle.PNG";
import TableHistoryCondition from "./TableHistoryCondition";
import { useOhcSocket } from "../../../../../share-components/useOhcSocket";
import TableDetailHistory from "../../../../../share-components/TableDetailHistory";

export const OhcHistoryConditions = () => {
  const { ohcData, id } = useOhcSocket();
  const selectedData = ohcData?.find((data) => data?.name === id);
  // console.log(selectedData, "data");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 mt-4">
      <div className="lg:col-span-4 bg-white rounded-lg">
        <div className="p-2 text-md 4k:text-3xl font-bold">Layout</div>
        <img src={ohc1_1} alt="" className="w-full rounded-lg mt-2 mb-4" />
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 gap-2">
        <div className="bg-white rounded-lg py-2 pl-5 pr-2">
          <div className="text-md 4k:text-3xl font-bold mb-4">
            History Conditions
          </div>
          <TableHistoryCondition data={selectedData?.ohcConditionRecord} />
          <div className="mt-2">
            <TableDetailHistory data={selectedData?.ohcConditionRecord} />
          </div>
        </div>
      </div>
    </div>
  );
};
