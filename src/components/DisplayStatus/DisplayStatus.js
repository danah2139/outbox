import "./displayStatus.css";
const DisplayStatus = ({ typeClicked }) => {
  const typesDate = [
    "Current Day",
    "Current Week",
    "Current Month",
    "Current Year",
    "Custom",
  ];

  const addTypesDateButtons = () => {
    return typesDate.map((type) => {
      return (
        <li>
          <button
            onClick={(event) => {
              typeClicked(event.target.value);
            }}
            value={type.replace("Current ", "").toLowerCase()}
          >
            {type}
          </button>
        </li>
      );
    });
  };

  return <ul>{addTypesDateButtons()}</ul>;
};

export default DisplayStatus;
