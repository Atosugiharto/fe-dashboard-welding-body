/* eslint-disable react/prop-types */
import { useState } from "react";
import { SwapVert, PlayArrowOutlined } from "@mui/icons-material";

const TableHistoryCondition = ({data = []}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      const order = sortConfig.direction === "asc" ? 1 : -1;
      return a[sortConfig.key] > b[sortConfig.key] ? order : -order;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div
      style={{ maxHeight: "55%" }}
      className={`overflow-x-auto text-sm 4k:text-2xl`}
    >
      <table className="table-auto w-full border-collapse border-2 border-dongker text-center">
        <thead className="bg-dongker text-white">
          <tr>
            {["No", "Date", "Month", "Years", "ID", "Descriptions"].map(
              (header, index) => (
                <th
                  key={index}
                  onClick={() =>
                    header !== "No" && handleSort(header.toLowerCase())
                  }
                  className="px-2 cursor-pointer"
                >
                  {header}
                  {header !== "No" && (
                  <span className="ml-2 text-xs 4k:text-xl pt-0.5 pb-1.5 bg-tombol-abu-tua text-tulisan-tombol-abu-tua">
                    {sortConfig.key === header.toLowerCase() ? (
                      sortConfig.direction === "asc" ? (
                        <PlayArrowOutlined className="h-6 4k:h-12 w-auto -rotate-90" />
                      ) : (
                        <PlayArrowOutlined className="h-6 4k:h-12 w-auto rotate-90" />
                      )
                    ) : (
                      <SwapVert className="h-5 4k:h-14 w-auto" />
                    )}
                  </span>
                  )}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((row, index) => (
              <tr key={row?.id} className="">
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {index + 1}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {row?.date}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {row?.month}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {row?.year}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5">
                  {row?.tagCd}
                </td>
                <td className="border-x-2 border-dongker px-1 py-0.5 text-left">
                  {row?.description}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border-2 border-dongker px-1 py-2 text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableHistoryCondition;