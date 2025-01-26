import { useState, useEffect } from "react";
import { CircleOutlined } from "@mui/icons-material";
import Chart from "react-apexcharts";

const TemperatureMotorChart = () => {
  const [chartHeight, setChartHeight] = useState(250); // Default chart height
  const [fontSize, setFontSize] = useState({
    xaxis: "12px",
    yaxis: "12px",
    annotations: "10px",
    title: "text-lg",
  });

  useEffect(() => {
    const updateResponsiveSettings = () => {
      if (window.innerWidth >= 3840) {
        // For 4K resolution
        setChartHeight(400);
        setFontSize({
          xaxis: "17px",
          yaxis: "17px",
          annotations: "15px",
          title: "text-3xl",
        });
      } else {
        // Default settings for smaller screens
        setChartHeight(250);
        setFontSize({
          xaxis: "12px",
          yaxis: "12px",
          annotations: "10px",
          title: "text-lg",
        });
      }
    };

    // Initial check
    updateResponsiveSettings();

    // Add resize listener
    window.addEventListener("resize", updateResponsiveSettings);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateResponsiveSettings);
  }, []);

  const chartOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "09.30",
        "10.00",
        "10.30",
        "11.00",
        "11.30",
        "12.00",
        "12.30",
      ],
      labels: {
        style: {
          fontSize: fontSize.xaxis,
        },
      },
    },
    yaxis: {
      min: 50,
      max: 150,
      tickAmount: 5,
      labels: {
        formatter: (value) => `${value}°C`,
        style: {
          fontSize: fontSize.yaxis,
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 125,
          borderColor: "red",
          label: {
            borderColor: "red",
            style: {
              color: "white",
              background: "red",
              fontSize: fontSize.annotations,
            },
            text: "Max 125°C",
          },
        },
        {
          y: 112,
          borderColor: "blue",
          label: {
            borderColor: "blue",
            style: {
              color: "white",
              background: "blue",
              fontSize: fontSize.annotations,
            },
            text: "Min 112°C",
          },
        },
        {
          y: 100,
          borderColor: "black",
          label: {
            borderColor: "black",
            style: {
              color: "black",
              background: "white",
              fontSize: fontSize.annotations,
            },
            text: "Rated",
          },
        },
      ],
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 5,
      colors: ["#2F5166"],
    },
    grid: {
      borderColor: "#2F5166",
    },
    colors: ["#2F5166"],
  };

  const chartSeries = [
    {
      name: "Temperature",
      data: [110, 120, 115, 130, 125, 118, 122],
    },
  ];

  return (
    <div>
      {/* Header Flex Container */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h2 className={`font-bold text-center flex-grow ${fontSize.title}`}>
          Temperature Motor Lifter (C)
        </h2>
        {/* Icon */}
        <button>
          <CircleOutlined className="text-black bg-hijau h-20 w-20 border border-black" />
        </button>
      </div>
      {/* Chart */}
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={chartHeight}
      />
    </div>
  );
};

export default TemperatureMotorChart;
