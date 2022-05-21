function SearchInput(props) {
  return (
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    ></input>
  );
}

export default SearchInput;
//passed up to Header
