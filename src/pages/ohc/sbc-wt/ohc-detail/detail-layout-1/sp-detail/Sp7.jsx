import Table from "../../../../../../share-components/Table";
import TableOhcCycleCondition from "../../../../../../share-components/TableOhcCycleCondition";
import { useOhcSocket } from "@src/share-components/useOhcSocket";
import sp7_1 from "@src/assets/sp7-1.PNG";
import sp7_2 from "@src/assets/sp7-2.PNG";

export const Sp7 = () => {
  const { spData, id } = useOhcSocket();
  const selectedData = spData?.find((data) => data.name === id);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 mt-4">
      <div className="lg:col-span-4 bg-white rounded-lg">
        <div className="p-2 text-md font-bold">Layout</div>
        <div>
          <img
            src={sp7_1}
            alt=""
            className="w-full rounded-lg h-32 object-cover"
          />
        </div>
        <div>
          <img src={sp7_2} alt="" className="w-full rounded-lg mt-2 mb-4" />
        </div>
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 gap-2">
        <div className="bg-white rounded-lg py-2 pl-5 pr-2">
          <div className="text-md font-bold mb-4">Current Conditions</div>
          <Table />
        </div>

        <div className="bg-white rounded-lg py-2 pl-5 pr-2">
          <div className="text-md font-bold mb-4">Cycle Time</div>
          <TableOhcCycleCondition
            data={selectedData?.cycle?.cycleDescription}
          />
        </div>
      </div>
    </div>
  );
};
