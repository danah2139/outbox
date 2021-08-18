const CustomDate = ({ dateRange, fromSelected, toSelected }) => {
  return (
    <div>
      From:
      <input
        type="date"
        onChange={(event) => {
          fromSelected(event.target.value);
        }}
        value={dateRange.from}
      />
      To:
      <input
        type="date"
        onChange={(event) => {
          toSelected(event.target.value);
        }}
        value={dateRange.to}
      />
    </div>
  );
};
export default CustomDate;
