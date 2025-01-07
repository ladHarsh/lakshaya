import Box2Div from "./Box2Div";

const Box_2 = () => {
  return (
    <section>
      <div className="container-fluid box-1">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center box-heading">
            <h2 className="fs-1">Most Popular Colleges</h2>
            <p className="mb-0">
              Choose the Best College for Your Career According to Course
            </p>
          </div>
        </div>

        <div className="container">
          <div className="nav-wrapper">
            <ul
              className="nav nav-pills nav-pills-bg-soft justify-content-center mb-4 px-3 box-1-navbar bg-dark bg-gradient"
              id="course-pills-tab"
              role="tablist"
            >
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button
                  className="nav-link active box-1-nav-link"
                  id="course-pills-tab-1"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-1"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-1"
                  aria-selected="true"
                >
                  Engineering
                </button>
              </li>
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button
                  className="nav-link box-1-nav-link"
                  id="course-pills-tab-2"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-2"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-2"
                  aria-selected="false"
                >
                  MBA
                </button>
              </li>
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button
                  className="nav-link box-1-nav-link"
                  id="course-pills-tab-3"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-3"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-3"
                  aria-selected="false"
                >
                  Medical
                </button>
              </li>
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button
                  className="nav-link box-1-nav-link"
                  id="course-pills-tab-4"
                  data-bs-toggle="pill"
                  data-bs-target="#course-pills-tabs-4"
                  type="button"
                  role="tab"
                  aria-controls="course-pills-tabs-4"
                  aria-selected="false"
                >
                  Design
                </button>
              </li>
            </ul>
            <div className="tab-content" id="course-pills-tabContent">
              {/* Engineering Colleges */}
              <div
                className="tab-pane fade show active"
                id="course-pills-tabs-1"
                role="tabpanel"
                aria-labelledby="course-pills-tab-1"
              >
                <div className="row g-4 box-1-colleges">
                  <Box2Div name="DAIICT" />
                  <Box2Div name="Nirma University" />
                  <Box2Div name="DDU" />
                  <Box2Div name="Pandit Deendayal Energy University (PDEU)" />
                  <Box2Div name="LDCE" />
                  <Box2Div name="CHARUSAT" />
                </div>
              </div>
              {/* MBA Colleges */}
              <div
                className="tab-pane fade"
                id="course-pills-tabs-2"
                role="tabpanel"
                aria-labelledby="course-pills-tab-2"
              >
                <div className="row g-4 box-1-colleges">
                  <Box2Div name="Nirma" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                </div>
              </div>
              {/* Medical Colleges */}
              <div
                className="tab-pane fade"
                id="course-pills-tabs-3"
                role="tabpanel"
                aria-labelledby="course-pills-tab-3"
              >
                <div className="row g-4 box-1-colleges">
                  <Box2Div name="Nirma" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                </div>
              </div>
              {/* Design Colleges */}
              <div
                className="tab-pane fade"
                id="course-pills-tabs-4"
                role="tabpanel"
                aria-labelledby="course-pills-tab-4"
              >
                <div className="row g-4 box-1-colleges">
                  <Box2Div name="Nirma" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                  <Box2Div name="DAIICT" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box_2;
