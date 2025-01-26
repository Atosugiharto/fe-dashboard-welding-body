import Table from "../../../../../../share-components/Table";
import sp_repair_1 from "@src/assets/sp-repair-1.PNG";
import sp_repair_2 from "@src/assets/sp-repair-2.PNG";
import sp_repair_3 from "@src/assets/sp-repair-3.PNG";

export const SpRepair = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 mt-4">
      <div className="lg:col-span-4 bg-white rounded-lg">
        <div className="p-2 text-md 4k:text-3xl font-bold">Layout</div>
        <div className="flex items-center gap-1">
          <img
            src={sp_repair_1}
            alt=""
            className="w-full rounded-lg h-32 object-cover"
          />
          <img
            src={sp_repair_2}
            alt=""
            className="w-full rounded-lg h-32 object-cover"
          />
        </div>
        <div>
          <img
            src={sp_repair_3}
            alt=""
            className="w-full rounded-lg mt-2 mb-4"
          />
        </div>
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 gap-2">
        <div className="bg-white rounded-lg py-2 pl-5 pr-2">
          <div className="text-md 4k:text-3xl font-bold mb-4">
            Current Conditions
          </div>
          <Table maxHeight="max-h-96" />
        </div>
      </div>
    </div>
  );
};
