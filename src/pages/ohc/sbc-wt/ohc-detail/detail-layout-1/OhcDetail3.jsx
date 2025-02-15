/* eslint-disable react/jsx-key */
import { MenuDate } from "@src/share-components/MenuDate";
import { Tab } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { OhcHistoryConditions } from "./OhcHistoryConditions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const OhcDetail3 = () => {
  const navigate = useNavigate();
  const listOhc = [
    {
      id: "OHC1",
      name: "OHC 1",
      component: <OhcHistoryConditions />,
    },
    {
      id: "OHC2",
      name: "OHC 2",
      component: <OhcHistoryConditions />,
    },
    {
      id: "OHC3",
      name: "OHC 3",
      component: <OhcHistoryConditions />,
    },
    {
      id: "OHC4",
      name: "OHC 4",
      component: <OhcHistoryConditions />,
    },
    {
      id: "OHC5",
      name: "OHC 5",
      component: <OhcHistoryConditions />,
    },
    {
      id: "OHC6",
      name: "OHC 6",
      component: <OhcHistoryConditions />,
    },
  ];

  const handleTabChange = (index) => {
    const selectedTab = listOhc[index];
    if (selectedTab) {
      navigate(`/ohc-sbc-wt-detail-history/${selectedTab?.id}`);
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
            {listOhc?.map((item) => (
              <Tab
                as="div"
                key={item?.id}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "bg-dongker text-white"
                      : "bg-white hover:bg-dongker hover:text-white",
                    "w-full text-center py-3 text-sm 4k:text-2xl font-bold rounded-lg cursor-pointer"
                  )
                }
              >
                {item?.name}
              </Tab>
            ))}
            <Link
              as="div"
              to={`/ohc-sbc-wt-sp/SP1`}
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
