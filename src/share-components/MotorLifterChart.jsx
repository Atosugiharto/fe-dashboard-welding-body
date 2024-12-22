/* eslint-disable react/prop-types */
import Chart from "react-apexcharts";

const MotorLifterChart = ({ icon }) => {
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
      min: 100,
      max: 300,
      tickAmount: 4,
      labels: {
        formatter: (value) => `${value}A`,
        style: {
          fontSize: "12px",
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 290,
          borderColor: "red",
          label: {
            borderColor: "red",
            style: {
              color: "white",
              background: "red",
              fontSize: "10px",
            },
            text: "Max 290A",
          },
        },
        {
          y: 261,
          borderColor: "blue",
          label: {
            borderColor: "blue",
            style: {
              color: "white",
              background: "blue",
              fontSize: "10px",
            },
            text: "Min 261A",
          },
        },
        {
          y: 200,
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
      name: "Current",
      data: [210, 290, 230, 250, 261, 200, 240],
    },
  ];

  return (
    <div>
      {/* Header Flex Container */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h2 className="text-lg font-bold text-center flex-grow">
          Current Motor Lifter(A)
        </h2>
        {/* Icon */}
        <button className="">
          {icon}
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

export default MotorLifterChart;
