/* eslint-disable react/jsx-key */
import { MenuDate } from "@src/share-components/MenuDate";
import { Tab } from "@headlessui/react";
import { Sp1 } from "./sp-detail/Sp1";
import { Sp7 } from "./sp-detail/Sp7";
import { Sp8 } from "./sp-detail/Sp8";
import { SpRepair } from "./sp-detail/SpRepair";
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const SpLayout = () => {
  const navigate = useNavigate();
  const listOhc = [
    {
      id: "SP1",
      name: "SP 1",
    },
    {
      id: "SP7",
      name: "SP 7",
    },
    {
      id: "SP8",
      name: "SP 8",
    },
    {
      id: "repair",
      name: "Repair",
    },
  ];

  const handleTabChange = (index) => {
    const selectedTab = listOhc[index];
    if (selectedTab) {
      navigate(`/ohc-sbc-wt-sp/${selectedTab?.id}`);
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
            className={
              "grid grid-cols-4 lg:grid-cols-8 items-center gap-4 my-2"
            }
          >
            {listOhc.map((item) => (
              <Tab
                as="div"
                key={item.id}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? item.id === "repair"
                        ? "bg-kuning"
                        : "bg-dongker text-white"
                      : item.id === "repair"
                      ? "bg-white hover:bg-kuning"
                      : "bg-white hover:bg-dongker hover:text-white",
                    "w-full text-center py-3 text-sm font-bold rounded-lg cursor-pointer"
                  )
                }
              >
                {item.name}
              </Tab>
            ))}
            <div />
            <div />
            <div />
            <Link
              to={"/ohc-sbc-wt-sp-fault"}
              className={
                "w-full text-center py-3 text-sm font-bold rounded-lg cursor-pointer bg-tombol-abu-tua text-tulisan-tombol-abu-tua "
              }
            >
              {/* <Link to={"/ohc-sbc-wt-sp-fault"}>Fault</Link> */}
              Fault
            </Link>
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
