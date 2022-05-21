import SearchInput from "./SearchInput";

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <label className="navbar-brand">Dictionary Project</label>
        <form onSubmit={props.onSubmit} className="d-flex">
          <SearchInput value={props.value} onChange={props.onChange} />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Header;
//passed up to App
