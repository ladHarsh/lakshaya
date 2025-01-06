const Footer = () => {
  return (
    <div className="pg-footer" style={{ marginTop: "171px" }}>
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>

        <div className="container">
          <footer className="py-5">
            <div className="row mb-4">
              {/* Website Name */}
              <div className="col-12 col-md-2 mb-3 text-center text-md-start">
                <p className="navbar-brand">LAKSHAYA</p>
              </div>
              {/* 1st Column */}
              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 footer-links">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 footer-links">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 footer-links">
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
              {/* 2nd Column */}
              <div className="col-6 col-md-2 mb-3">
                <h5>Features of Lakshaya</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a
                      href="/rank_predictor"
                      className="nav-link p-0 footer-links"
                    >
                      Rank Predictor
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="/college_comparer"
                      className="nav-link p-0 footer-links"
                    >
                      College Comparer
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="/college_predictor"
                      className="nav-link p-0 footer-links"
                    >
                      College Predictor
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="/scholarships"
                      className="nav-link p-0 footer-links"
                    >
                      Explore Scholarships
                    </a>
                  </li>
                </ul>
              </div>
              {/* Asking Question Box */}
              <div className="col-12 col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Ask Question to Experts</h5>
                  <p>Get our experts to answer your questions within 24 Hrs</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Ask Questions
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Write Question Here..."
                    />
                    <button className="btn btn-primary" type="button">
                      Ask
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Footer Tag Line */}
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2024 Company, Inc. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
