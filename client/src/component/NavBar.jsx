import ExploreMenu from "./ExploreMenu";
import ExploreTools from "./ExploreTools";
import Login from "./Login";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          LAKSHAYA
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center w-100">
            {/* Explore Menu */}
            <div className="me-lg-3">
              <ExploreMenu />
            </div>

            {/* Search Bar */}
            <form className="d-flex flex-grow-1 my-2 my-lg-0">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>

            {/* Explore Tools */}
            <div className="ms-lg-3 mt-2 mt-lg-0">
              <ExploreTools />
            </div>

            {/* About Us */}
            <div className="ms-lg-3 mt-2 mt-lg-0">
              <a className="nav-link text-light" href="/aboutUs">
                About Us
              </a>
            </div>

            {/* Login/Profile */}
            <div className="ms-lg-3 mt-2 mt-lg-0">
              {/* <Profile /> */}
              <Login />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
