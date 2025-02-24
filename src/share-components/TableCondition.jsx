/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseApiUrl } from "./api";
import Spinner from "./Spinner";
import { useLocation, useNavigate } from "react-router-dom";

const TableCondition = ({ maxHeight = "max-h-64 4k:max-h-96", data = [], pathApi = "" }) => {
  // const navigate = useNavigate();
  const [fontSize, setFontSize] = useState("11px");
  const navigate = useNavigate();
  const location = useLocation();
  // const [marginTop, setMarginTop] = useState("28px");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth >= 3840) {
        setFontSize("20px");
        // setMarginTop("38px");
      } else {
        setFontSize("11px");
        // setMarginTop("28px");
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  const handleReset = async (dataId) => {
    const confirmReset = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to reset this data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, reset it!",
      cancelButtonText: "Cancel",
    });

    if (!confirmReset.isConfirmed) return;

    setIsLoading(true);
    try {
      const response = await axios.post(`${baseApiUrl}/api/${pathApi}`, {
        id: dataId,
      });

      if (response.status !== 200) {
        throw new Error("Failed to reset cycle");
      }
      toast.success("Reset success!", {
        duration: 2000,
        position: "top-center",
      });
      navigate(`${location.pathname}ssss`);
    } catch (error) {
      console.error("Error resetting cycle:", error);
      toast.error("Failed to reset cycle!", {
        duration: 2000,
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`flex overflow-x-auto text-sm 4k:text-2xl gap-1 overflow-y-auto ${maxHeight}`}
    >
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
              <th className="px-1 py-0.5">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={6} className="flex items-center justify-center">
                  <Spinner classAdditional={"py-2 h-10 w-auto"} />
                </td>
              </tr>
            )}
            {!isLoading && (!data || data.length === 0) && (
              <tr>
                <td colSpan={6} className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
            {data?.map((row, index) => {
              const reValue =
                row?.actualValue > row?.standardValue ? "NG" : "OK";
              return (
                <tr
                  key={index}
                  className={reValue === "NG" ? "bg-red-500" : ""}
                  // onClick={() =>
                  //   reValue === "NG" && navigate(`/ohc-sbc-wt-sp/fault`)
                  // }
                >
                  <td className="border-x-2 border-dongker px-1 py-0.5">
                    {index + 1}
                  </td>
                  <td className="border-x-2 border-dongker px-1 py-0.5">
                    {row?.id}
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
                    {reValue}
                  </td>
                  <td className="border-x-2 border-dongker px-1 py-0.5">
                    <button
                      key={index}
                      disabled={row?.actualValue < row?.standardValue}
                      style={{ fontSize: fontSize }}
                      className={`pl-1 pr-4 rounded-sm ${
                        row?.actualValue > row?.standardValue
                          ? "bg-black text-white"
                          : "bg-tombol-abu-tua cursor-not-allowed text-tulisan-tombol-abu-tua"
                      }`}
                      onClick={() => handleReset(row?.id)}
                    >
                      Rst
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-col gap-1" style={{ marginTop: marginTop }}>
        {data?.map((row, index) => (
          <button
            key={index}
            style={{ fontSize: fontSize }}
            className={`pl-1 pr-4 rounded-sm ${
              row?.actualValue > row?.standardValue
                ? "bg-black text-white"
                : "bg-tombol-abu-tua text-tulisan-tombol-abu-tua"
            }`}
            onClick={() => handleReset(row.id)}
          >
            Rst
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default TableCondition;
