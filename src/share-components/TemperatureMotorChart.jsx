/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  CircleOutlined,
  CloseOutlined,
  PlayArrowOutlined,
} from "@mui/icons-material";
import Chart from "react-apexcharts";

const TemperatureMotorChart = ({
  dataSumbuX = [],
  dataSumbuY = [],
  indicator = "",
  min = 0,
  max = 0,
  title = "",
}) => {
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
      categories: dataSumbuX,
      labels: {
        style: {
          fontSize: fontSize.xaxis,
        },
      },
    },
    yaxis: {
      max: max,
      min: 0,
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
          y: max,
          borderColor: "red",
          label: {
            borderColor: "red",
            style: {
              color: "white",
              background: "red",
              fontSize: fontSize.annotations,
            },
            text: `Max ${max}°C`,
          },
        },
        {
          y: min,
          borderColor: "blue",
          label: {
            borderColor: "blue",
            style: {
              color: "white",
              background: "blue",
              fontSize: fontSize.annotations,
            },
            text: `Min ${min}°C`,
          },
        },
        // {
        //   y: 100,
        //   borderColor: "black",
        //   label: {
        //     borderColor: "black",
        //     style: {
        //       color: "black",
        //       background: "white",
        //       fontSize: fontSize.annotations,
        //     },
        //     text: "Rated",
        //   },
        // },
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
      data: dataSumbuY,
    },
  ];

  return (
    <div>
      {/* Header Flex Container */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h2 className={`font-bold text-center flex-grow ${fontSize.title}`}>
          {title}
        </h2>
        {/* Icon */}
        <button>
          {indicator?.toLowerCase() === "merah" ? (
            <CloseOutlined className="border border-black text-black bg-merah h-20 w-20 -rotate-90" />
          ) : indicator?.toLowerCase() === "kuning" ? (
            <PlayArrowOutlined className="border border-black text-black bg-kuning h-20 w-20 -rotate-90" />
          ) : (
            <CircleOutlined className="text-black bg-hijau h-20 w-20 border border-black" />
          )}
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
