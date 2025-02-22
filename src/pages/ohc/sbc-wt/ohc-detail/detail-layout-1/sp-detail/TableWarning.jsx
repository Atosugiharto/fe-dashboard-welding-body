/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { SwapVert, PlayArrowOutlined } from "@mui/icons-material";

const TableWarning = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = Array.isArray(data)
    ? [...data].sort((a, b) => {
        if (sortConfig.key) {
          const order = sortConfig.direction === "asc" ? 1 : -1;
          return a[sortConfig.key] > b[sortConfig.key] ? order : -order;
        }
        return 0;
      })
    : [];

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div
      style={{ maxHeight: "80%" }}
      className="overflow-x-auto text-sm 4k:text-2xl"
    >
      <table className="table-auto w-full border-collapse border border-black text-center">
        <thead className="border border-black">
          <tr>
            {["No", "Date", "Month", "Year", "Type", "Detail"].map(
              (header, index) => (
                <th
                  key={index}
                  onClick={() =>
                    header !== "No" && handleSort(header.toLowerCase())
                  }
                  className={`px-2 cursor-pointer border border-black ${
                    header === "No" ? "cursor-default" : ""
                  }`}
                >
                  {header}
                  {header !== "No" && (
                    <span className="ml-2 text-xs pt-0.5 pb-1.5 bg-tombol-abu-tua text-tulisan-tombol-abu-tua">
                      {sortConfig.key === header.toLowerCase() ? (
                        sortConfig.direction === "asc" ? (
                          <PlayArrowOutlined className="h-4 w-auto -rotate-90" />
                        ) : (
                          <PlayArrowOutlined className="h-4 w-auto rotate-90" />
                        )
                      ) : (
                        <SwapVert className="h-4 w-auto" />
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
              <tr key={row?.id}>
                <td className="border-x border-black px-1 py-0.5">
                  {index + 1}
                </td>
                <td className="border-x border-black px-1 py-0.5">
                  {row?.date}
                </td>
                <td className="border-x border-black px-1 py-0.5">
                  {row?.month}
                </td>
                <td className="border-x border-black px-1 py-0.5">
                  {row?.year}
                </td>
                <td className="border-x border-black px-1 py-0.5 text-left">
                  {row?.type}
                </td>
                <td className="border-x border-black px-1 py-0.5 text-left">
                  {row?.detail}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border border-black py-2 text-center">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableWarning;
