import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const DetailCaseChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("Januari");
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

  const data = {
    Januari: [4, 8, 8, 11, 11, 13, 6, 6, 9, 6, 3, 10],
    Februari: [5, 7, 9, 10, 12, 14, 5, 7, 8, 7, 2, 8],
    Maret: [6, 9, 7, 12, 13, 15, 4, 8, 7, 8, 4, 9],
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
          fontSize: fontSize.xaxis,
        },
      },
    },
    yaxis: {
      title: {
        text: "Number of Cases",
        style: {
          fontSize: fontSize.yaxis,
        },
      },
      labels: {
        style: {
          fontSize: fontSize.yaxis,
        },
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="flex flex-col items-center p-2">
      <div className="flex text-xs 4k:text-xl justify-between w-full items-center mb-4">
        <h2 className={`font-bold ${fontSize.title}`}>Detail Case</h2>
        <div className="flex items-center">
          <label htmlFor="month" className="mr-2 text-gray-700">
            Month
          </label>
          <select
            id="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="Januari">January</option>
            <option value="Februari">February</option>
            <option value="Maret">March</option>
            <option value="April">April</option>
            <option value="Mei">May</option>
            <option value="Juni">June</option>
            <option value="Juli">July</option>
            <option value="Agustus">August</option>
            <option value="September">September</option>
            <option value="Oktober">October</option>
            <option value="November">November</option>
            <option value="Desember">December</option>
          </select>
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
