const Box_4 = () => {
  return (
    // Features Box
    <div className="container-fluid box-4">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center box-heading">
            <h2 className="fs-1">Explore Some Features</h2>
          </div>
        </div>
        {/* Centering the cards */}
        <div className="row d-flex justify-content-around g-4">
          {/* Rank Predictor */}
          <div className="col-12 col-md-2">
            <div className="card box-4-card">
              <div className="box">
                <img src="/img/ranking.jpg" className="box-img img-fluid" />
              </div>
              <div className="box-4-name">
                <h5>Rank Predictor</h5>
              </div>
              <div className="box-4-expolar">
                <a href="/rank_predictor" className="btn btn-primary mt-auto">
                  Explore More
                </a>
              </div>
            </div>
          </div>
          {/* College Predictor */}
          <div className="col-12 col-md-2">
            <div className="card box-4-card">
              <div className="box">
                <img
                  src="/img/icons8-college-64.png"
                  className="box-img img-fluid"
                />
              </div>
              <div className="box-4-name">
                <h5>College Predictor</h5>
              </div>
              <div className="box-4-expolar">
                <a
                  href="/college_predictor"
                  className="btn btn-primary mt-auto"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
          {/* College Comparer */}
          <div className="col-12 col-md-2">
            <div className="card box-4-card">
              <div className="box">
                <img src="/img/versus.png" className="box-img img-fluid" />
              </div>
              <div className="box-4-name">
                <h5>College Comparer</h5>
              </div>
              <div className="box-4-expolar">
                <a href="/college_comparer" className="btn btn-primary mt-auto">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box_4;
