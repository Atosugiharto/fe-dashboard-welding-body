/* eslint-disable no-unused-vars */
// import { PlayArrowOutlined, CarRepair } from "@mui/icons-material";
import layoutDiagram from "@src/assets/layout-welding.PNG";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import bracketIcon from "@src/assets/bracket-icon.svg";

const Diagram = () => {
  const { ohcData } = useSelector((state) => state.ohc);
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
    const ohcsInSP1 = ohcData
      ?.filter((ohc) => ohc.location === "SP1")
      .map((ohc) => ohc.id);

    const ohcsInSP2 = ohcData
      ?.filter((ohc) => ohc.location === "SP2")
      .map((ohc) => ohc.id);

    const ohcsInSP3 = ohcData
      ?.filter((ohc) => ohc.location === "SP3")
      .map((ohc) => ohc.id);

    const ohcsInSP4 = ohcData
      ?.filter((ohc) => ohc.location === "SP4")
      .map((ohc) => ohc.id);

    const ohcsInSP5 = ohcData
      ?.filter((ohc) => ohc.location === "SP5")
      .map((ohc) => ohc.id);

    const ohcsInSP6 = ohcData
      ?.filter((ohc) => ohc.location === "SP6")
      .map((ohc) => ohc.id);

    const ohcsInSP7 = ohcData
      ?.filter((ohc) => ohc.location === "SP7")
      .map((ohc) => ohc.id);

    const ohcsInSP8 = ohcData
      ?.filter((ohc) => ohc.location === "SP8")
      .map((ohc) => ohc.id);

    const ohcsInSP8C = ohcData
      ?.filter((ohc) => ohc.location === "SP8C")
      .map((ohc) => ohc.id);

    const ohcsInSP9 = ohcData
      ?.filter((ohc) => ohc.location === "SP9")
      .map((ohc) => ohc.id);

    const ohcsInSP10 = ohcData
      ?.filter((ohc) => ohc.location === "SP10")
      .map((ohc) => ohc.id);

    const ohcsInSP11 = ohcData
      ?.filter((ohc) => ohc.location === "SP11")
      .map((ohc) => ohc.id);

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
  }, [ohcData]);

  const spData = [
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
      {spData?.map((sp, index) => (
        <div
          key={index}
          className={`absolute text-[4px] md:text-xs ${sp?.position}`}
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
