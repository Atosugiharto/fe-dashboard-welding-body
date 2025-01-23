/* eslint-disable react/prop-types */
import { useState } from "react";
import { SwapVert, PlayArrowOutlined } from "@mui/icons-material";

const TableWithSorting = ({ maxHeight = "max-h-96" }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const data = [
    {
      no: 1,
      date: 30,
      month: "October",
      year: 2024,
      id: "LSX70C",
      error: 0,
      description: "Down End 1",
    },
    {
      no: 2,
      date: 30,
      month: "October",
      year: 2024,
      id: "LSX709",
      error: 0,
      description: "Upper End 1",
    },
    {
      no: 3,
      date: 29,
      month: "October",
      year: 2024,
      id: "LSX702",
      error: 0,
      description: "Chain Over Run",
    },
    {
      no: 4,
      date: 28,
      month: "October",
      year: 2024,
      id: "LSX701",
      error: 0,
      description: "Close Hanger Arm",
    },
    {
      no: 5,
      date: 28,
      month: "October",
      year: 2024,
      id: "LSX70C",
      error: 0,
      description: "Open Hanger Arm",
    },
    {
      no: 6,
      date: 27,
      month: "October",
      year: 2024,
      id: "LSX709",
      error: 0,
      description: "Upper End 1",
    },
    {
      no: 7,
      date: 27,
      month: "October",
      year: 2024,
      id: "LSX702",
      error: 0,
      description: "Chain Over Run",
    },
    {
      no: 8,
      date: 26,
      month: "October",
      year: 2024,
      id: "LSX701",
      error: 0,
      description: "Close Hanger Arm",
    },
    {
      no: 9,
      date: 25,
      month: "October",
      year: 2024,
      id: "LSX70C",
      error: 0,
      description: "Down End 1",
    },
    {
      no: 10,
      date: 25,
      month: "October",
      year: 2024,
      id: "LSX709",
      error: 0,
      description: "Upper End 1",
    },
    {
      no: 11,
      date: 24,
      month: "October",
      year: 2024,
      id: "LSX709",
      error: 0,
      description: "High Temperature",
    },
    {
      no: 12,
      date: 24,
      month: "October",
      year: 2024,
      id: "LSX704",
      error: 0,
      description: "Voltage",
    },
    {
      no: 13,
      date: 23,
      month: "October",
      year: 2024,
      id: "LSX705",
      error: 0,
      description: "Body Double",
    },
    {
      no: 14,
      date: 23,
      month: "October",
      year: 2024,
      id: "LSX706",
      error: 0,
      description: "E/CAT",
    },
    {
      no: 15,
      date: 22,
      month: "October",
      year: 2024,
      id: "LSX70D",
      error: 0,
      description: "EIP",
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
    <div className={`overflow-x-auto text-sm ${maxHeight}`}>
      <table className="table-auto w-full border-collapse border-2 border-dongker text-center">
        <thead className="bg-dongker text-white">
          <tr>
            {[
              "No",
              "Date",
              "Month",
              "Years",
              "ID",
              "Descriptions",
              "Error",
            ].map((header, index) => (
              <th
                key={index}
                onClick={() => handleSort(header.toLowerCase())}
                className="px-2 cursor-pointer"
              >
                {header}
                <span className="ml-2 text-xs pt-0.5 pb-1.5 bg-tombol-abu-tua text-tulisan-tombol-abu-tua">
                  {sortConfig.key === header.toLowerCase() ? (
                    sortConfig.direction === "asc" ? (
                      <PlayArrowOutlined className="h-6 w-auto -rotate-90" />
                    ) : (
                      <PlayArrowOutlined className="h-6 w-auto rotate-90" />
                    )
                  ) : (
                    <SwapVert className="h-5 w-auto" />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.no} className="">
              <td className="border-x-2 border-dongker px-1 py-0.5">
                {row.no}
              </td>
              <td className="border-x-2 border-dongker px-1 py-0.5">
                {row.date}
              </td>
              <td className="border-x-2 border-dongker px-1 py-0.5">
                {row.month}
              </td>
              <td className="border-x-2 border-dongker px-1 py-0.5">
                {row.year}
              </td>
              <td className="border-x-2 border-dongker px-1 py-0.5">
                {row.id}
              </td>
              <td className="border-x-2 border-dongker px-1 py-0.5 text-left">
                {row.description}
              </td>
              <td className="border-x-2 border-dongker px-1 py-0.5">
                {row.error}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithSorting;
