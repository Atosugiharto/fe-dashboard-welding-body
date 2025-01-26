/* eslint-disable react/jsx-key */
import { MenuDate } from "@src/share-components/MenuDate";
import DetailCaseChart from "@src/share-components/DetailCaseChart";
import TotalCaseChart from "../../../../../../share-components/TotalCaseChart";
import TableWithSorting2 from "../../../../../../share-components/TableWithSorting2";

export const SpFault = () => {
  return (
    <div>
      <div>
        <MenuDate menu={"OHC SBC -WT"} />
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
          <div className="bg-white rounded-lg py-2 pl-5 pr-2">
            <div className="text-md 4k:text-3xl font-bold mb-4">Warning</div>
            <TableWithSorting2 maxHeight="max-h-screen" />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div className="bg-white rounded-lg">
              <TotalCaseChart />
            </div>
            <div className="bg-white rounded-lg">
              <DetailCaseChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
