import { MenuDate } from "@src/share-components/MenuDate";
import { CardWithValue } from "@src/share-components/CardWithValue";
import { CardOhcDetail } from "../../../share-components/CardOhcDetail";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import layoutWelding from "@src/assets/layout-welding.PNG";

export const SbcWt = () => {
  const warningLogs = [
    { date: "25/08/24", time: "14:12", message: "OHC 3 High Temp" },
    { date: "25/08/24", time: "07:10", message: "OHC 5 High Temp" },
    { date: "24/08/24", time: "15:12", message: "OHC 4 High Temp" },
    { date: "24/08/24", time: "15:12", message: "E-CAT Fault" },
  ];

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
            value={100}
            unit={"H"}
          />
          <CardWithValue
            classAdditional={"col-span-2"}
            label={"Efficiency"}
            value={99.7}
            unit={"%"}
          />
          <CardWithValue
            classAdditional={"col-span-2"}
            label={"Stop Time"}
            value={10}
            unit={"H"}
          />
          <CardWithValue
            classAdditional={"col-span-2"}
            label={"Performance"}
            value={83.3}
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
                <img src={layoutWelding} alt="" className="w-full h-auto" />
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
                  <CardOhcDetail
                    to={"/ohc-sbc-wt-detail1"}
                    title={"OHC 1"}
                    backgroundColor={"bg-hijau"}
                    borderColor={"border-hijau"}
                  />
                  <CardOhcDetail
                    to={"/ohc-sbc-wt-detail1"}
                    title={"OHC 2"}
                    backgroundColor={"bg-hijau"}
                    borderColor={"border-hijau"}
                  />
                  <CardOhcDetail
                    to={"/ohc-sbc-wt-detail1"}
                    title={"OHC 3"}
                    backgroundColor={"bg-hijau"}
                    borderColor={"border-hijau"}
                  />
                  <CardOhcDetail
                    to={"/ohc-sbc-wt-detail1"}
                    title={"OHC 4"}
                    backgroundColor={"bg-hijau"}
                    borderColor={"border-kuning"}
                  />
                  <CardOhcDetail
                    to={"/ohc-sbc-wt-detail1"}
                    title={"OHC 5"}
                    backgroundColor={"bg-hijau"}
                    borderColor={"border-hijau"}
                  />
                  <CardOhcDetail
                    to={"/ohc-sbc-wt-detail1"}
                    title={"OHC 6"}
                    backgroundColor={"bg-merah"}
                    borderColor={"border-merah"}
                  />
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
