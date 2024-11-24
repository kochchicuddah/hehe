import './navbar.css';

function NavContainer() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Trail Ceylon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Trail Ceylon
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column"></div>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto" id="midgroup">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Wonders
              </a>
              <a className="nav-link" href="#">
                Explore
              </a>
            </div>
            <div className="navbar-nav" id="login">
              <a className="nav-link" href="#">
                Login
              </a>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}

export default NavContainer;
