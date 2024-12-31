/* eslint-disable react/jsx-key */
import { MenuDate } from "@src/share-components/MenuDate";
import { Tab } from "@headlessui/react";
import Table from "../../../../../share-components/Table";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const OhcDetail2 = () => {
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
              className={
                "w-full text-center py-3 text-sm font-bold rounded-lg cursor-pointer bg-tombol-abu-tua text-tulisan-tombol-abu-tua "
              }
            >
              Next
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {/* main component */}
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 mt-4">
                <div className="lg:col-span-4 bg-white rounded-lg">
                  <div className="p-2 text-md font-bold">Layout</div>
                  <img
                    src="https://images.unsplash.com/photo-1647427060118-4911c9821b82"
                    alt=""
                    className="w-full rounded-lg mt-2 mb-4"
                  />
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 gap-2">
                  <div className="bg-white rounded-lg py-2 pl-5 pr-2">
                    <div className="text-md font-bold mb-4">
                      Current Conditions
                    </div>
                    <Table />
                  </div>

                  <div className="bg-white rounded-lg py-2 pl-5 pr-2">
                    <div className="text-md font-bold mb-4">Cycle Time</div>
                    <Table />
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
