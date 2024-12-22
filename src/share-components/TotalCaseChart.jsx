import Chart from "react-apexcharts";

const TotalCaseChart = () => {
  const data = [10, 4, 8, 14, 11, 16, 6, 13, 9, 6, 5, 3];
  const categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const colors = [
    "#00FF00", // Green
    "#FFFF00", // Yellow
    "#FF0000", // Red
  ];

  const series = [
    {
      name: "Cases",
      data,
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
    colors: data.map((value) => {
      if (value <= 5) return colors[0];
      if (value <= 10) return colors[1];
      return colors[2];
    }),
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories,
      title: {
        text: "2024",
        offsetY: 5,
      },
      labels: {
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
      show: true,
      markers: {
        fillColors: colors,
      },
      labels: {
        useSeriesColors: false,
      },
      customLegendItems: ["≥ 10", "< 10", "≤ 5"],
      position: "top",
      horizontalAlign: "right",
    },
    // title: {
    //   text: "Total Case",
    //   align: "left",
    //   style: {
    //     fontSize: "16px",
    //     fontWeight: "bold",
    //     color: "#333",
    //   },
    // },
  };

  return (
    <div className="flex p-2 flex-col items-center">
      <div className="w-full">
        <h2 className="text-lg font-bold">Total Case</h2>
        <Chart options={options} series={series} type="bar" height={250} />
      </div>
    </div>
  );
};

export default TotalCaseChart;
