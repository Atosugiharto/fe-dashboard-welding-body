/* eslint-disable react/jsx-key */
import { MenuDate } from "@src/share-components/MenuDate";
import { Tab } from "@headlessui/react";
import { OhcCurrentCycle } from "./OhcCurrentCycle";
import { Link, useNavigate } from "react-router-dom";
import { useOhcSocket } from "../../../../../share-components/useOhcSocket";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const OhcDetail2 = () => {
  const navigate = useNavigate();
  const { ohcData, id } = useOhcSocket();
  const selectedData = ohcData?.find((data) => data.name === id);

  const listOhc = [
    {
      id: "OHC1",
      name: "OHC 1",
      component: (
        <OhcCurrentCycle
          dataCycleConditions={selectedData?.cycle?.cycleDescription}
        />
      ),
    },
    {
      id: "OHC2",
      name: "OHC 2",
      component: (
        <OhcCurrentCycle
          dataCycleConditions={selectedData?.cycle?.cycleDescription}
        />
      ),
    },
    {
      id: "OHC3",
      name: "OHC 3",
      component: (
        <OhcCurrentCycle
          dataCycleConditions={selectedData?.cycle?.cycleDescription}
        />
      ),
    },
    {
      id: "OHC4",
      name: "OHC 4",
      component: (
        <OhcCurrentCycle
          dataCycleConditions={selectedData?.cycle?.cycleDescription}
        />
      ),
    },
    {
      id: "OHC5",
      name: "OHC 5",
      component: (
        <OhcCurrentCycle
          dataCycleConditions={selectedData?.cycle?.cycleDescription}
        />
      ),
    },
    {
      id: "OHC6",
      name: "OHC 6",
      component: (
        <OhcCurrentCycle
          dataCycleConditions={selectedData?.cycle?.cycleDescription}
        />
      ),
    },
  ];

  const handleTabChange = (index) => {
    const selectedTab = listOhc[index];
    if (selectedTab) {
      navigate(`/ohc-sbc-wt-detail-cycle/${selectedTab.id}`);
    }
  };

  return (
    <div>
      <div>
        <MenuDate menu={"OHC SBC -WT"} />
      </div>

      <div>
        <Tab.Group onChange={handleTabChange}>
          <Tab.List
            as="div"
            className={"flex items-center justify-between gap-4 my-2"}
          >
            {listOhc.map((item) => (
              <Tab
                as="div"
                key={item.id}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "bg-dongker text-white"
                      : "bg-white hover:bg-dongker hover:text-white",
                    "w-full text-center py-3 text-sm 4k:text-2xl font-bold rounded-lg cursor-pointer"
                  )
                }
              >
                {item.name}
              </Tab>
            ))}
            <Link
              to="/ohc-sbc-wt-detail-history/OHC1"
              as="div"
              className={
                "w-full text-center py-3 text-sm 4k:text-2xl font-bold rounded-lg cursor-pointer bg-tombol-abu-tua text-tulisan-tombol-abu-tua "
              }
            >
              Next
            </Link>
          </Tab.List>
          <Tab.Panels>
            {listOhc?.map((item) => (
              <Tab.Panel key={item?.id}>{item?.component}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
