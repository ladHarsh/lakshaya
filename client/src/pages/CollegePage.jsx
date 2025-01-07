import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";
import "../component/App.css";
import CollegeHeaderBox from "../component/college_page_component/CollegeHeaderBox";
import CollegeMap from "../component/college_page_component/CollegeMap";
import CompererBox from "../component/Comparer";
import AskQuestionBox from "../component/AskQuestionBox";
import SimilarCollegeBox from "../component/SimilarCollegeBox";
import AsideBar from "../component/college_page_component/AsideBar";
import Footer from "../component/Footer";
import InfoPage from "./college_page/InfoPage";
import Courses_Fees from "./college_page/Courses_Fees";
import Admission from "./college_page/Admission";
import Placement from "./college_page/Placement";
import CutOff from "./college_page/CutOff";

function CollegePage() {
  const params = useParams();
  const { id } = params;
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get("https://lakshaya-backend.onrender.com/college")
      .then((colleges) => setColleges(colleges.data))
      .catch((err) => console.log(err));
  }, []);

  const college = colleges.filter((college) => college._id == id);

  const [activeLink, setActiveLink] = useState("Info");

  const links = [
    "Info",
    "Courses & Fees",
    "Admission",
    "CutOff",
    "Placement",
    "Review",
  ];

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    // College Page
    <div className="college-home-page">
      {/* Navbar */}
      <NavBar />
      {/* body */}
      <div className="container">
        {/* College Header Box */}
        <CollegeHeaderBox name={college} />
        {/* College Nav Link */}
        <div className="college-nav-link">
          {/* Scrollable container for small screens */}
          <div
            className="d-flex justify-content-evenly text-center flex-wrap overflow-auto"
            style={{
              whiteSpace: "nowrap", // Prevent wrapping for small screens
              overflowX: "auto", // Enable horizontal scrolling
              overflowY: "hidden", // Disable vertical scrolling
            }}
          >
            {links.map((link) => (
              <button
                key={link}
                className={`btn rounded-0 ${
                  activeLink === link ? "college-page-active" : ""
                }`}
                onClick={() => handleClick(link)}
                role="button"
                style={{ minWidth: "100px" }} // Set minimum width for buttons
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* college page content */}
        <div className="row">
          {/* content */}
          <div className="col-12 col-md-8">
            {/* Overview Paragraph */}

            {/* Info Page */}
            {activeLink === "Info" ? <InfoPage name={college} /> : ""}
            {/* Courses & Fees Page */}
            {activeLink === "Courses & Fees" ? (
              <Courses_Fees name={college} />
            ) : (
              ""
            )}
            {/* Admission Page */}
            {activeLink === "Admission" ? <Admission name={college} /> : ""}
            {/* Cut Off Page */}
            {activeLink === "CutOff" ? <CutOff name={college} /> : ""}
            {/* Placement Page */}
            {activeLink === "Placement" ? <Placement name={college} /> : ""}
            {/* Review Page */}
            {activeLink === "Review" ? "Blank" : ""}
            {/* College Map */}
            <CollegeMap name={college} />
            {/* Comparer Box */}
            {/* <CompererBox /> */}
            {/* Ask Questions Box */}
            {/* <AskQuestionBox /> */}
            {/* Similar College Box */}
            {/* <SimilarCollegeBox /> */}
          </div>
          {/* aside Bar */}
          <div className="col-12 col-md-4 d-none d-md-block">
            <AsideBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CollegePage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";
import "../component/App.css";
import CollegeHeaderBox from "../component/college_page_component/CollegeHeaderBox";
import CollegeMap from "../component/college_page_component/CollegeMap";
import CompererBox from "../component/Comparer";
import AskQuestionBox from "../component/AskQuestionBox";
import SimilarCollegeBox from "../component/SimilarCollegeBox";
import AsideBar from "../component/college_page_component/AsideBar";
import Footer from "../component/Footer";
import InfoPage from "./college_page/InfoPage";
import Courses_Fees from "./college_page/Courses_Fees";
import Admission from "./college_page/Admission";
import Placement from "./college_page/Placement";
import CutOff from "./college_page/CutOff";

function CollegePage() {
  const params = useParams();
  const { id } = params;
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get("https://lakshaya-backend.onrender.com/college")
      .then((colleges) => setColleges(colleges.data))
      .catch((err) => console.log(err));
  }, []);

  const college = colleges.filter((college) => college._id == id);

  const [activeLink, setActiveLink] = useState("Info");

  const links = [
    "Info",
    "Courses & Fees",
    "Admission",
    "CutOff",
    "Placement",
    "Review",
  ];

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    // College Page
    <div className="college-home-page">
      {/* Navbar */}
      <NavBar />
      {/* body */}
      <div className="container">
        {/* College Header Box */}
        <CollegeHeaderBox name={college} />
        {/* College Nav Link */}
        <div className="college-nav-link">
          {/* Scrollable container for small screens */}
          <div
            className="d-flex justify-content-evenly text-center flex-wrap overflow-auto"
            style={{
              whiteSpace: "nowrap", // Prevent wrapping for small screens
              overflowX: "auto", // Enable horizontal scrolling
              overflowY: "hidden", // Disable vertical scrolling
            }}
          >
            {links.map((link) => (
              <button
                key={link}
                className={`btn rounded-0 ${
                  activeLink === link ? "college-page-active" : ""
                }`}
                onClick={() => handleClick(link)}
                role="button"
                style={{ minWidth: "100px" }} // Set minimum width for buttons
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* college page content */}
        <div className="row">
          {/* content */}
          <div className="col-12 col-md-8">
            {/* Overview Paragraph */}

            {/* Info Page */}
            {activeLink === "Info" ? <InfoPage name={college} /> : ""}
            {/* Courses & Fees Page */}
            {activeLink === "Courses & Fees" ? (
              <Courses_Fees name={college} />
            ) : (
              ""
            )}
            {/* Admission Page */}
            {activeLink === "Admission" ? <Admission name={college} /> : ""}
            {/* Cut Off Page */}
            {activeLink === "CutOff" ? <CutOff name={college} /> : ""}
            {/* Placement Page */}
            {activeLink === "Placement" ? <Placement name={college} /> : ""}
            {/* Review Page */}
            {activeLink === "Review" ? "Blank" : ""}
            {/* College Map */}
            <CollegeMap name={college} />
            {/* Comparer Box */}
            {/* <CompererBox /> */}
            {/* Ask Questions Box */}
            {/* <AskQuestionBox /> */}
            {/* Similar College Box */}
            {/* <SimilarCollegeBox /> */}
          </div>
          {/* aside Bar */}
          <div className="col-12 col-md-4 d-none d-md-block">
            <AsideBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CollegePage;
