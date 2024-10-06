const SearchBox = ({ filterValue, handleChange }) => {
  return (
    <div>
      <h4>Find contacts by name:</h4>
      <input
        type="text"
        placeholder="Search contacts..."
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
