import { Pie } from "react-chartjs-2";
const PieChart = ({ text, data }) => {
  return (
    <Pie
      data={data}
      options={{
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
  );
};
export default PieChart;
