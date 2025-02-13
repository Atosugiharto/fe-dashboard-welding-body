/* eslint-disable no-unused-vars */
import layoutDiagram from "@src/assets/layout-welding.PNG";
import { useEffect, useState } from "react";
import { useOhcSocket } from "@src/share-components/useOhcSocket";

const Diagram = () => {
  const { spData } = useOhcSocket();
  const [ohcsInSP0, setOhcsInSP0] = useState([]);
  const [ohcsInSP1, setOhcsInSP1] = useState([]);
  const [ohcsInSP2, setOhcsInSP2] = useState([]);
  const [ohcsInSP3, setOhcsInSP3] = useState([]);
  const [ohcsInSP4, setOhcsInSP4] = useState([]);
  const [ohcsInSP5, setOhcsInSP5] = useState([]);
  const [ohcsInSP6, setOhcsInSP6] = useState([]);
  const [ohcsInSP7, setOhcsInSP7] = useState([]);
  const [ohcsInSP8, setOhcsInSP8] = useState([]);
  const [ohcsInSP8C, setOhcsInSP8C] = useState([]);
  const [ohcsInSP9, setOhcsInSP9] = useState([]);
  const [ohcsInSP10, setOhcsInSP10] = useState([]);
  const [ohcsInSP11, setOhcsInSP11] = useState([]);

  useEffect(() => {
    const ohcsInSP0 = spData
      ?.filter((sp) => sp?.name === "SP0")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP1 = spData
      ?.filter((sp) => sp?.name === "SP1")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP2 = spData
      ?.filter((sp) => sp?.name === "SP2")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP3 = spData
      ?.filter((sp) => sp?.name === "SP3")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP4 = spData
      ?.filter((sp) => sp?.name === "SP4")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP5 = spData
      ?.filter((sp) => sp?.name === "SP5")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP6 = spData
      ?.filter((sp) => sp?.name === "SP6")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP7 = spData
      ?.filter((sp) => sp?.name === "SP7")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP8 = spData
      ?.filter((sp) => sp?.name === "SP8")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP8C = spData
      ?.filter((sp) => sp?.name === "SP8C")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP9 = spData
      ?.filter((sp) => sp?.name === "SP9")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP10 = spData
      ?.filter((sp) => sp?.name === "SP10")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    const ohcsInSP11 = spData
      ?.filter((sp) => sp?.name === "SP11")
      .map((spDetail) => spDetail?.ohc?.name)
      .map((name) => name?.replace("OHC", ""));

    setOhcsInSP0(ohcsInSP0);
    setOhcsInSP1(ohcsInSP1);
    setOhcsInSP2(ohcsInSP2);
    setOhcsInSP3(ohcsInSP3);
    setOhcsInSP4(ohcsInSP4);
    setOhcsInSP5(ohcsInSP5);
    setOhcsInSP6(ohcsInSP6);
    setOhcsInSP7(ohcsInSP7);
    setOhcsInSP8(ohcsInSP8);
    setOhcsInSP8C(ohcsInSP8C);
    setOhcsInSP9(ohcsInSP9);
    setOhcsInSP10(ohcsInSP10);
    setOhcsInSP11(ohcsInSP11);
  }, [spData]);

  const spDatas = [
    {
      label: "SP0",
      value: ohcsInSP0 ? ohcsInSP0.join(", ") : "-",
      position: "top-[52%] left-[40%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP1",
      value: ohcsInSP1 ? ohcsInSP1.join(", ") : "-",
      position: "top-[72.5%] left-[78%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP2",
      value: ohcsInSP2 ? ohcsInSP2.join(", ") : "-",
      position: "top-[67.5%] left-[88%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP3",
      value: ohcsInSP3 ? ohcsInSP3.join(", ") : "-",
      position: "top-[40.5%] left-[88%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP4",
      value: ohcsInSP4 ? ohcsInSP4.join(", ") : "-",
      position: "top-[9.2%] left-[81.5%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP5",
      value: ohcsInSP5 ? ohcsInSP5.join(", ") : "-",
      position: "top-[9.2%] left-[67.3%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP6",
      value: ohcsInSP6 ? ohcsInSP6.join(", ") : "-",
      position: "top-[9.2%] left-[51.3%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP7",
      value: ohcsInSP7 ? ohcsInSP7.join(", ") : "-",
      position: "top-[3.3%] left-[39%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP8",
      value: ohcsInSP8 ? ohcsInSP8.join(", ") : "-",
      position: "top-[36.3%] left-[5.5%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP8C",
      value: ohcsInSP8C ? ohcsInSP8C.join(", ") : "-",
      position: "top-[74%] left-[21.3%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP9",
      value: ohcsInSP9 ? ohcsInSP9.join(", ") : "-",
      position: "top-[77%] left-[34.5%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP10",
      value: ohcsInSP10 ? ohcsInSP10.join(", ") : "-",
      position: "top-[77%] left-[54.3%]",
      rotateIcon: "rotate-90",
    },
    {
      label: "SP11",
      value: ohcsInSP11 ? ohcsInSP11.join(", ") : "-",
      position: "top-[77%] left-[67%]",
      rotateIcon: "rotate-90",
    },
  ];

  return (
    <div className="relative w-full">
      <img src={layoutDiagram} alt="Diagram" className="w-full" />
      {spDatas?.map((sp, index) => (
        <div
          key={index}
          className={`absolute text-[4px] md:text-xs 4k:text-xl ${sp?.position}`}
        >
          <div className="flex items-center">
            <span className="bg-dongker text-white py-0.5 px-1 rounded">
              {sp?.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diagram;
