import "./App.css";
import api from "./api/api";
import { useEffect, useState } from "react";
import BarChart from "./components/Barchart/BarChart";
import PieChart from "./components/PieChart/PieChart";
import DisplayStatus from "./components/DisplayStatus/DisplayStatus";

function App() {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "number of deaths",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  const [dataState, setDataState] = useState(state);
  const [typeDateSelected, setTypeDateSelected] = useState("week");

  const date = new Date();
  const currentDate = new Date();

  //const startDay = currentDate.setUTCHours(0, 0, 0, 0);
  const minDateDay = {
    day: currentDate,
    week: new Date(date.setDate(date.getDate() - date.getDay())),
    month: new Date(date.getFullYear(), date.getMonth(), 1),
    year: new Date(date.getFullYear(), 0, 1),
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  useEffect(() => {
    (async () => {
      console.log(formatDate(minDateDay[typeDateSelected]));
      console.log(formatDate(currentDate));
      const { data } = await api.get("", {
        params: {
          min_date: formatDate(minDateDay[typeDateSelected]),
          max_date: formatDate(currentDate),
        },
      });
      console.log(data);
    })();
  }, [typeDateSelected]);

  const handleTypeDateSelected = (type) => {
    setTypeDateSelected(type);
  };

  return (
    <div className="App">
      <BarChart text="Number Of Deaths" data={dataState} />
      <DisplayStatus typeClicked={handleTypeDateSelected} />
    </div>
  );
}

export default App;
