/* eslint-disable react/prop-types */
import { useState } from "react";
import { SwapVert, PlayArrowOutlined } from "@mui/icons-material";

const TableDetailHistory = ({ data = [] }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = Array.isArray(data)
    ? [...data].sort((a, b) => {
        if (
          sortConfig.key &&
          a?.[sortConfig.key] !== undefined &&
          b?.[sortConfig.key] !== undefined
        ) {
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
    <div className="max-h-64 overflow-x-auto overflow-y-auto text-xl 4k:text-5xl font-bold">
      <table className="table-auto w-full border-collapse border-2 border-white text-center">
        <thead className="bg-dongker text-white border-2 border-dongker">
          <tr>
            {["ID", "Condition", "Counting Error", "Status"].map(
              (header, index) => (
                <th
                  key={index}
                  onClick={() => handleSort(header.toLowerCase())}
                  className="px-2 cursor-pointer"
                >
                  {header}
                  <span className="ml-2 text-xs 4k:text-xl pt-0.5 pb-1.5 bg-tombol-abu-tua text-tulisan-tombol-abu-tua">
                    {sortConfig.key === header.toLowerCase() ? (
                      sortConfig.direction === "asc" ? (
                        <PlayArrowOutlined className="h-6 4k:h-12 w-auto -rotate-90" />
                      ) : (
                        <PlayArrowOutlined className="h-6 w-auto rotate-90" />
                      )
                    ) : (
                      <SwapVert className="h-5 4k:h-14 w-auto" />
                    )}
                  </span>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData?.length > 0 ? (
            sortedData?.map((row, index) => (
              <tr key={row?.id || index}>
                <td className="border-x-2 uppercase text-center bg-tombol-abu-tua border-white px-1 py-4">
                  {row?.tagCd || "-"}
                </td>
                <td className="border-x-2 text-center bg-tombol-abu-tua uppercase border-white px-1 py-4">
                  {row?.condition || "-"}
                </td>
                <td className="border-x-2 text-5xl text-center bg-tombol-abu-tua border-white px-1 py-4">
                  {row?.counter ?? "-"}
                </td>
                <td className="border-x-2 text-5xl text-center bg-tombol-abu-tua border-white px-1 py-4">
                  {row?.status || "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="border-2 border-dongker px-1 py-2 text-center text-sm font-normal"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetailHistory;
