/* eslint-disable react/jsx-key */
import { MenuDate } from "@src/share-components/MenuDate";
import { Tab } from "@headlessui/react";
import { Sp1 } from "./sp-detail/Sp1";
import { Sp7 } from "./sp-detail/Sp7";
import { Sp8 } from "./sp-detail/Sp8";
import { SpRepair } from "./sp-detail/SpRepair";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const SpLayout = () => {
  const listOhc = [
    {
      id: 1,
      name: "SP 1",
    },
    {
      id: 2,
      name: "SP 7",
    },
    {
      id: 3,
      name: "SP 8",
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
            className={"grid grid-cols-8 items-center gap-4 my-2"}
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
              key={4}
              className={({ selected }) =>
                classNames(
                  selected ? "bg-kuning" : "bg-white hover:bg-kuning",
                  "w-full text-center py-3 text-sm font-bold rounded-lg cursor-pointer"
                )
              }
            >
              Repair
            </Tab>
            <div />
            <div />
            <div />
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
              <Link to={"/ohc-sbc-wt-sp-fault"}>Fault</Link>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Sp1 />
            </Tab.Panel>
            <Tab.Panel>
              <Sp7 />
            </Tab.Panel>
            <Tab.Panel>
              <Sp8 />
            </Tab.Panel>
            <Tab.Panel>
              <SpRepair />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
