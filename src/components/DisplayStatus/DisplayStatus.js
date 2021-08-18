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
          <button onClick={typeClicked(type)}>{type}</button>
        </li>
      );
    });
  };

  return <ul>{addTypesDateButtons()}</ul>;
};

export default DisplayStatus;
