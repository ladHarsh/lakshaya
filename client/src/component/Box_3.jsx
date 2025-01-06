import { Routes, Route } from "react-router-dom";
import Scholarships from "../pages/college_features/ExploreScholarships";

const Box_3 = () => {
  return (
    <div className="container">
      <div className="box-3 bg-light rounded shadow p-4">
        <h5 className="mb-3">
          Discover abundant opportunities for engineering, medical, and various
          other fields in Gujarat through a diverse range of scholarships. Let
          your ambitions thrive with financial support tailored to your
          educational journey.
        </h5>
        <div className="d-flex justify-content-center">
          <a
            className="btn text-light border hover-bg-black hover-text-white"
            href="/scholarships"
          >
            Explore Now
          </a>
        </div>

        <Routes>
          <Route path="/scholarships" element={<Scholarships />} />
        </Routes>
      </div>
    </div>
  );
};

export default Box_3;
