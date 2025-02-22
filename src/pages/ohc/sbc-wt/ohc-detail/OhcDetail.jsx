/* eslint-disable react/jsx-key */
import { MenuDate } from "../../../../share-components/MenuDate";
import { Tab } from "@headlessui/react";
import { OhcDetail1 } from "./detail-layout-1/OhcDetail1";
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const OhcDetail = () => {
  const navigate = useNavigate();
  const listOhc = [
    {
      id: "OHC 1",
      elemenId: "1",
      name: "OHC 1",
    },
    {
      id: "OHC 2",
      elemenId: "2",
      name: "OHC 2",
    },
    {
      id: "OHC 3",
      elemenId: "3",
      name: "OHC 3",
    },
    {
      id: "OHC 4",
      elemenId: "4",
      name: "OHC 4",
    },
    {
      id: "OHC 5",
      elemenId: "5",
      name: "OHC 5",
    },
    {
      id: "OHC 6",
      elemenId: "6",
      name: "OHC 6",
    },
  ];

  const handleTabChange = (index) => {
    const selectedTab = listOhc[index];
    if (selectedTab) {
      navigate(`/ohc-sbc-wt-detail/${selectedTab.id}`);
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
                {item.name}
              </Tab>
            ))}
            <Link
              as="div"
              to="/ohc-sbc-wt-detail-cycle/OHC 1"
              className={
                "w-full text-center py-3 text-sm 4k:text-2xl font-bold rounded-lg cursor-pointer bg-tombol-abu-tua text-tulisan-tombol-abu-tua "
              }
            >
              Next
            </Link>
          </Tab.List>
          <Tab.Panels>
            {listOhc?.map((item, index) => (
              <Tab.Panel key={index}>
                <OhcDetail1 elementId={item?.id} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
