import "./App.css";
import api from "./api/api";
import { useEffect, useState } from "react";
import BarChart from "./components/Barchart/BarChart";
import PieChart from "./components/PieChart/PieChart";
import DisplayStatus from "./components/DisplayStatus/DisplayStatus";
import CustomDate from "./components/customDate/CustomDate";

function App() {
  //const [dataState, setDataState] = useState(state);
  const date = new Date();
  const currentDate = new Date();
  const [typeDateSelected, setTypeDateSelected] = useState("week");
  const [labels, setLabels] = useState([]);
  const [deathsNumbers, setDeathsNumbers] = useState([]);
  const [recoversNumbers, setRecoversNumbers] = useState([]);
  const [confirmedNumbers, setConfirmdNumbers] = useState([]);
  const [isCustomDate, setIsCustomDate] = useState(false);
  const [dateRange, setDateRange] = useState({
    from: currentDate,
    to: currentDate,
  });

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
      //console.log(typeDateSelected);
      //console.log(formatDate(minDateDay[typeDateSelected]));
      //console.log(formatDate(currentDate));
      let minDate, maxDate;
      if (typeDateSelected === "custom") {
        minDate = dateRange["from"];
        maxDate = dateRange["to"];
      } else {
        minDate = formatDate(minDateDay[typeDateSelected]);
        maxDate = formatDate(currentDate);
      }

      const { data } = await api.get("", {
        params: {
          min_date: minDate,
          max_date: maxDate,
        },
      });

      console.log(data);
      data.forEach((element) => {
        console.log(element);
        setLabels((prevState) => [...prevState, element.date]);
        setDeathsNumbers((prevState) => [...prevState, element.deaths]);
        setRecoversNumbers((prevState) => [...prevState, element.recoverd]);
        setConfirmdNumbers((prevState) => [...prevState, element.confirmed]);
      });
    })();
    console.log(labels);
  }, [typeDateSelected]);

  const handleTypeDateSelected = (type) => {
    if (type === "custom") {
      setIsCustomDate((prevState) => !prevState);
    } else {
      setTypeDateSelected(type);
    }
  };

  const handleToSelected = (date) => {
    setDateRange((prevState) => ({ ...prevState, to: date }));
  };

  const handleFromSelected = (date) => {
    setDateRange((prevState) => ({ ...prevState, from: date }));
  };

  return (
    <div className="App">
      <h2>Covid-19 Statistics Israel</h2>
      <BarChart
        text="Number Of Deaths"
        dataNumbers={deathsNumbers}
        labels={labels}
        dataSetsLabel="Number Of Deaths"
      />
      <BarChart
        text="Number Of Recovers"
        dataNumbers={recoversNumbers}
        labels={labels}
        dataSetsLabel="Number Of Recovers"
      />
      <PieChart
        text="Number Of Confirmds"
        dataNumbers={confirmedNumbers}
        labels={labels}
        dataSetsLabel="Number Of Confirmds"
      />

      <DisplayStatus typeClicked={handleTypeDateSelected} />
      {isCustomDate && (
        <CustomDate
          dateRange={dateRange}
          handleFromSelected={handleFromSelected}
          handleToSelected={handleToSelected}
        />
      )}
    </div>
  );
}

export default App;
