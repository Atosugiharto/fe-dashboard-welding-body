/* eslint-disable react/prop-types */
import { useState } from "react";
import { SwapVert, PlayArrowOutlined } from "@mui/icons-material";

const TableWithSorting2 = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const data = [
    {
      no: 1,
      date: 30,
      month: "October",
      year: 2024,
      type: "High Temp",
      detail: "OHC 3",
    },
    {
      no: 2,
      date: 30,
      month: "October",
      year: 2024,
      type: "High Temp",
      detail: "OHC 5",
    },
    {
      no: 3,
      date: 29,
      month: "October",
      year: 2024,
      type: "High Temp",
      detail: "OHC 4",
    },
    {
      no: 4,
      date: 29,
      month: "October",
      year: 2024,
      type: "E-Cat",
      detail: "OHC 4",
    },
    {
      no: 5,
      date: 28,
      month: "October",
      year: 2024,
      type: "High Temp",
      detail: "OHC 2",
    },
    {
      no: 6,
      date: 27,
      month: "October",
      year: 2024,
      type: "Body Double",
      detail: "OHC 4",
    },
    {
      no: 7,
      date: 27,
      month: "October",
      year: 2024,
      type: "Body Double",
      detail: "OHC 4",
    },
    {
      no: 8,
      date: 26,
      month: "October",
      year: 2024,
      type: "L/C",
      detail: "No 1",
    },
    {
      no: 9,
      date: 26,
      month: "October",
      year: 2024,
      type: "L/C",
      detail: "No 5",
    },
    {
      no: 10,
      date: 25,
      month: "October",
      year: 2024,
      type: "EIP",
      detail: "OHC 1",
    },
    {
      no: 11,
      date: 25,
      month: "October",
      year: 2024,
      type: "EIP",
      detail: "OHC 2",
    },
    {
      no: 12,
      date: 24,
      month: "October",
      year: 2024,
      type: "Voltage",
      detail: "OHC 5",
    },
    {
      no: 13,
      date: 24,
      month: "October",
      year: 2024,
      type: "Voltage",
      detail: "OHC 3",
    },
    {
      no: 14,
      date: 23,
      month: "October",
      year: 2024,
      type: "E/S",
      detail: "No 3",
    },
    {
      no: 15,
      date: 23,
      month: "October",
      year: 2024,
      type: "E/S",
      detail: "No 1",
    },
    {
      no: 16,
      date: 22,
      month: "October",
      year: 2024,
      type: "E-CAT",
      detail: "OHC 6",
    },
    {
      no: 17,
      date: 22,
      month: "October",
      year: 2024,
      type: "E-CAT",
      detail: "OHC 3",
    },
    {
      no: 18,
      date: 21,
      month: "October",
      year: 2024,
      type: "Voltage",
      detail: "OHC 1",
    },
    {
      no: 19,
      date: 21,
      month: "October",
      year: 2024,
      type: "Voltage",
      detail: "OHC 2",
    },
  ];

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
      style={{ maxHeight: "80%" }}
      className={`overflow-x-auto text-sm 4k:text-2xl`}
    >
      <table className="table-auto w-full border-collapse border border-black text-center">
        <thead className="border border-black">
          <tr>
            {["No", "Date", "Month", "Year", "Type", "Detail"].map(
              (header, index) => (
                <th
                  key={index}
                  onClick={() => handleSort(header.toLowerCase())}
                  className="px-2 cursor-pointer border border-black"
                >
                  {header}
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
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.no} className="">
              <td className="border-x border-black px-1 py-0.5">{row.no}</td>
              <td className="border-x border-black px-1 py-0.5">{row.date}</td>
              <td className="border-x border-black px-1 py-0.5">{row.month}</td>
              <td className="border-x border-black px-1 py-0.5">{row.year}</td>
              <td className="border-x border-black px-1 py-0.5 text-left">
                {row.type}
              </td>
              <td className="border-x border-black px-1 py-0.5 text-left">
                {row.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithSorting2;
