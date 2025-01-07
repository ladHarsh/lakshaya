import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import CollegePage from "../pages/CollegePage";

const Box2Div = (name) => {
  const [colleges, setColleges] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Fetch colleges data
    axios
      .get("https://lakshaya-backend.onrender.com/college")
      .then((colleges) => setColleges(colleges.data))
      .catch((err) => console.log(err));

    // Check screen size
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 386);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const findCollege = colleges.filter((college) => college.Name === name.name);

  return (
    <>
      {findCollege.map((item) => (
        <div
          className="card text-bg-light mb-3 box-1-college-box"
          style={{ width: "23rem" }}
        >
          <div className="row h-100 d-flex justify-content-center">
            <div className="college-img ms-2">
              <img
                src={`https://lakshaya-backend.onrender.com/uploads/titelImg-${encodeURIComponent(
                  item.Name
                )}.jpg`}
                className="card-img-top w-100"
                alt="Image"
                style={{ height: "70%" }}
              />
            </div>
            <div
              className={`${
                isSmallScreen ? "col-11" : "col-8"
              } card-right-body`}
            >
              <div className="card-body college-info pt-2 w-100">
                <h5 className="card-title w-100">{item.Name}</h5>
                <p className="card-text college-location">
                  {item.loc},&nbsp;{item.state}
                </p>
                <div className="college-total-fees">
                  Total Fees
                  <p className="card-college-fees">
                    {item.branchName_1_tuitionFees}
                  </p>
                </div>

                <a
                  href={"/college/" + item._id}
                  className="btn btn-primary mt-auto"
                >
                  Learn More
                </a>
                <Routes>
                  <Route path="/college/:id" element={<CollegePage />} />
                </Routes>
              </div>
            </div>
          </div>
          <div className="card-footer m-0 text-muted">
            <div className="college-5-course-rating">
              4.1
              <i className="fa-solid fa-star" style={{ color: "#f49507" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#f49507" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#f49507" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#f49507" }}></i>
              <i className="fa-regular fa-star"></i>
              (732)
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box2Div;
