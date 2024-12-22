/* eslint-disable react/jsx-key */
import { MenuDate } from "../../../../share-components/MenuDate";
import { Tab } from "@headlessui/react";
import { OhcDetail1 } from "./detail-layout-1/OhcDetail1";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const OhcDetail = () => {
  const listOhc = [
    {
      id: 1,
      name: "OHC 1",
    },
    {
      id: 2,
      name: "OHC 2",
    },
    {
      id: 3,
      name: "OHC 3",
    },
    {
      id: 4,
      name: "OHC 4",
    },
    {
      id: 5,
      name: "OHC 5",
    },
    {
      id: 6,
      name: "OHC 6",
    },
  ];
  return (
    <div>
      <div>
        <MenuDate menu={"OHC SBC -WT"} />
      </div>

      <div>
        <Tab.Group>
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
                    "w-full text-center py-3 text-sm font-bold rounded-lg cursor-pointer"
                  )
                }
              >
                {item.name}
              </Tab>
            ))}
            <Tab
                as="div"
                // className={({ selected }) =>
                //   classNames(
                //     selected
                //       ? "bg-dongker text-white"
                //       : "bg-white hover:bg-dongker hover:text-white",
                //     "w-full text-center py-3 text-sm font-bold rounded-lg cursor-pointer"
                //   )
                // }
                className={"w-full text-center py-3 text-sm font-bold rounded-lg cursor-pointer bg-tombol-abu-tua text-tulisan-tombol-abu-tua "}
              >
                Next
              </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
                <OhcDetail1 />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
