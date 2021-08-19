import { Pie } from "react-chartjs-2";
const PieChart = ({ text, labels, dataNumbers, dataSetsLabel }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: dataSetsLabel,
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: dataNumbers,
      },
    ],
  };
  return (
    <div>
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,

          title: {
            display: true,
            text: text,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
export default PieChart;
