import { useState } from "react";
import Chart from "react-apexcharts";

const DetailCaseChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const data = {
    January: [4, 8, 8, 11, 11, 13, 6, 6, 9, 6, 3, 10],
    February: [5, 7, 9, 10, 12, 14, 5, 7, 8, 7, 2, 8],
    March: [6, 9, 7, 12, 13, 15, 4, 8, 7, 8, 4, 9],
  };

  const categories = [
    "EIP",
    "E-CAT",
    "Li/C",
    "E/S",
    "D/S",
    "Voltage",
    "Body Double",
    "Collision",
    "Overload",
    "Torque",
    "Current",
    "Temp",
  ];

  const colors = [
    "#00FF00", // Green
    "#FFFF00", // Yellow
    "#FF0000", // Red
  ];

  const series = [
    {
      name: "Cases",
      data: data[selectedMonth],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    colors: (data[selectedMonth] || []).map((value) => {
      if (value <= 5) return colors[0];
      if (value <= 10) return colors[1];
      return colors[2];
    }),
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories,
      labels: {
        rotate: -45,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Number of Cases",
      },
    },
    legend: {
      show: false,
    },
    // title: {
    //   text: "Detail Case",
    //   align: "left",
    //   style: {
    //     fontSize: "16px",
    //     fontWeight: "bold",
    //     color: "#333",
    //   },
    // },
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-2">
      <div className="flex justify-between w-full items-center mb-4">
        <h2 className="text-lg font-bold">Detail Case</h2>
        <div className="flex items-center">
          <label htmlFor="month" className="mr-2 text-gray-700">
            Month
          </label>
          <select
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <Chart options={options} series={series} type="bar" height={250} />
      </div>
    </div>
  );
};

export default DetailCaseChart;
