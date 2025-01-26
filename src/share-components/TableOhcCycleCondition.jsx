import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableOhcCycleCondition = ({
  maxHeight = "max-h-64 4k:max-h-96",
  data = [],
}) => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState("11px");
  const [marginTop, setMarginTop] = useState("28px");
  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth >= 3840) {
        // 4K resolution
        setFontSize("20px");
        setMarginTop("38px");
      } else {
        // Default resolution (smaller screens)
        setFontSize("11px");
        setMarginTop("28px");
      }
    };

    // Initial check
    updateFontSize();

    // Add resize event listener
    window.addEventListener("resize", updateFontSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);
  return (
    <div
      className={`flex overflow-x-auto text-sm 4k:text-2xl gap-1 overflow-y-auto ${maxHeight}`}
    >
      {/* Bagian Tabel */}
      <div className="flex-1">
        <table className="table-auto w-full border-collapse border-2 border-dongker text-center">
          <thead className="bg-dongker text-white">
            <tr>
              <th className="px-1 py-0.5">No</th>
              <th className="px-1 py-0.5">ID</th>
              <th className="px-1 py-0.5">Descriptions</th>
              <th className="px-1 py-0.5">Actual</th>
              <th className="px-1 py-0.5">Standard</th>
              <th className="px-1 py-0.5">RE</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
            {data?.map((row, index) => (
              <tr
                key={index}
                className={`${row.re === "NG" ? "bg-red-500" : ""}`}
                onClick={() =>
                  row.re === "NG" && navigate(`/ohc-sbc-wt-sp/fault`)
                }
              >
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {index + 1}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {row?.cycleId}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5 text-left">
                  {row?.name}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {row?.actualValue}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {row?.standardValue}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {/* {row?.re} */}OK
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bagian Tombol Reset */}
      <div className="flex flex-col gap-1" style={{ marginTop: marginTop }}>
        {data.map((row, index) => (
          <button
            key={index}
            style={{ fontSize: fontSize }}
            className={`pl-1 pr-4 rounded-sm ${
              row.re === "NG"
                ? "bg-black text-white"
                : "bg-tombol-abu-tua text-tulisan-tombol-abu-tua"
            }`}
          >
            Rst
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableOhcCycleCondition;
