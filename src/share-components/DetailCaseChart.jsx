/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chart from "react-apexcharts";
import { setSelectedMonth, setSelectedYear } from "../slices/ohcSlice";

const DetailCaseChart = () => {
  const dispatch = useDispatch();
  const { warningRecordBytype, selectedMonth, selectedYear } = useSelector(
    (state) => state.ohc
  );

  const [chartHeight, setChartHeight] = useState(250);
  const [fontSize, setFontSize] = useState({
    xaxis: "12px",
    yaxis: "12px",
    title: "text-lg",
  });

  useEffect(() => {
    const updateResponsiveSettings = () => {
      if (window.innerWidth >= 3840) {
        setChartHeight(400);
        setFontSize({
          xaxis: "17px",
          yaxis: "17px",
          title: "text-3xl",
        });
      } else {
        setChartHeight(250);
        setFontSize({
          xaxis: "12px",
          yaxis: "12px",
          title: "text-lg",
        });
      }
    };

    updateResponsiveSettings();
    window.addEventListener("resize", updateResponsiveSettings);
    return () => window.removeEventListener("resize", updateResponsiveSettings);
  }, []);

  const monthOptions = [
    { label: "January", value: "Januari" },
    { label: "February", value: "Februari" },
    { label: "March", value: "Maret" },
    { label: "April", value: "April" },
    { label: "May", value: "Mei" },
    { label: "June", value: "Juni" },
    { label: "July", value: "Juli" },
    { label: "August", value: "Agustus" },
    { label: "September", value: "September" },
    { label: "October", value: "Oktober" },
    { label: "November", value: "November" },
    { label: "December", value: "Desember" },
  ];

  const yearOptions = ["2023", "2024", "2025"]; // Tambahkan sesuai kebutuhan

  const handleMonthChange = (e) => {
    dispatch(setSelectedMonth(e.target.value));
  };

  const handleYearChange = (e) => {
    dispatch(setSelectedYear(e.target.value));
  };

  const chartData = warningRecordBytype || [];
  const categories = chartData?.map((data) => data?.type);
  const seriesData = chartData?.map((data) => data?.count);

  const colors = seriesData.map((value) => {
    if (value <= 5) return "#00FF00"; // Green
    if (value <= 10) return "#FFFF00"; // Yellow
    return "#FF0000"; // Red
  });

  const series = [{ name: "Cases", data: seriesData }];

  const options = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: {
      bar: { distributed: true, columnWidth: "55%", endingShape: "rounded" },
    },
    colors,
    dataLabels: { enabled: false },
    xaxis: {
      categories,
      labels: { rotate: -45, style: { fontSize: fontSize.xaxis } },
    },
    yaxis: {
      title: { text: "Number of Cases", style: { fontSize: fontSize.yaxis } },
      labels: { style: { fontSize: fontSize.yaxis } },
    },
    legend: { show: false },
  };

  return (
    <div className="flex flex-col items-center p-2">
      <div className="flex text-xs 4k:text-xl justify-between w-full items-center mb-4">
        <h2 className={`font-bold ${fontSize.title}`}>Detail Case</h2>
        <div className="flex items-center">
          <label htmlFor="month" className="mr-2 text-gray-700">
            Month:
          </label>
          <select
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {monthOptions.map((month) => (
              <option key={month?.value} value={month?.value}>
                {month?.label}
              </option>
            ))}
          </select>

          {/* <label htmlFor="year" className="ml-4 mr-2 text-gray-700">
            Tahun:
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select> */}
        </div>
      </div>
      <div className="w-full">
        <Chart
          options={options}
          series={series}
          type="bar"
          height={chartHeight}
        />
      </div>
    </div>
  );
};

export default DetailCaseChart;
