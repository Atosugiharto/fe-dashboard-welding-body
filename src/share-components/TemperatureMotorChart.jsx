import { CircleOutlined } from "@mui/icons-material";
import Chart from "react-apexcharts";

const TemperatureMotorChart = () => {
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
          fontSize: "12px",
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
          fontSize: "12px",
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
              fontSize: "10px",
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
              fontSize: "10px",
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
              fontSize: "10px",
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
        <h2 className="text-lg font-bold text-center flex-grow">
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
        height={250}
      />
    </div>
  );
};

export default TemperatureMotorChart;
