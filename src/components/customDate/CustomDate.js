const CustomDate = ({ dateRange, handleFromSelected, handleToSelected }) => {
  return (
    <div>
      From:
      <input
        type="date"
        onChange={(event) => {
          handleFromSelected(event.target.value);
        }}
        value={dateRange.from}
      />
      To:
      <input
        type="date"
        onChange={(event) => {
          handleToSelected(event.target.value);
        }}
        value={dateRange.to}
      />
    </div>
  );
};
export default CustomDate;
