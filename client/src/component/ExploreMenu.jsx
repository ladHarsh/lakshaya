import React, { useState, useEffect, useRef } from "react";

const ExploreMenu = () => {
  const [activeField, setActiveField] = useState("Engineering");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fields = ["Engineering", "MBA", "Medical", "Design", "Career Guidance"];

  const content = {
    Engineering: [
      {
        title: "Top Ranking Colleges",
        items: [
          "IIT Gandhinagar",
          "DAIICT Gandhinagar",
          "SVNIT Surat",
          "DDU Nadiad",
        ],
        link: "/top_ranking_colleges",
      },
      {
        title: "Popular Courses",
        items: ["B.Tech/B.E", "M.Tech/M.E", "Ph.D.", "Diploma"],
        link: "/top_courses",
      },
      {
        title: "Top Specializations",
        items: [
          "Aeronautical Engineering",
          "Automobile Engineering",
          "Biotechnology Engineering",
          "Chemical Engineering",
        ],
        link: "/top_specializations",
      },
      {
        title: "Top Exams",
        items: ["JEE Mains", "JEE Advance", "Gujcet", "GATE"],
        link: "/top_exam",
      },
    ],
    MBA: [
      { title: "Top MBA Colleges", link: "#" },
      { title: "Popular MBA Courses", link: "#" },
      { title: "Top MBA Exams", link: "#" },
      { title: "Top MBA Specializations", link: "#" },
    ],
    Medical: [
      { title: "Top Medical Colleges", link: "#" },
      { title: "Popular Medical Courses", link: "#" },
      { title: "Top Medical Exams", link: "#" },
      { title: "Top Medical Specializations", link: "#" },
    ],
    Design: [
      { title: "Top Design Colleges", link: "#" },
      { title: "Popular Design Courses", link: "#" },
      { title: "Top Design Exams", link: "#" },
      { title: "Top Design Specializations", link: "#" },
    ],
    "Career Guidance": [
      { title: "Top Career Tips", link: "#" },
      { title: "Popular Career Paths", link: "#" },
      { title: "Top Career Advisors", link: "#" },
      { title: "Top Career Trends", link: "#" },
    ],
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item" ref={dropdownRef}>
          <a
            className="nav-link fs-6 fw-medium text-light"
            href="#"
            role="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseEnter={handleDropdownMouseEnter}
          >
            Explore Menu
          </a>
          {isDropdownOpen && (
            <ul
              className="dropdown-menu menu mt-5 custom-dropdown p-0"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="d-flex">
                <div className="menu-left">
                  {fields.map((field) => (
                    <li key={field} onMouseEnter={() => setActiveField(field)}>
                      <a
                        className="dropdown-item fs-5 text-dark fw-semibold"
                        href="#"
                        style={{ borderBottom: "1px solid #dfdfdf" }}
                      >
                        {field}
                      </a>
                    </li>
                  ))}
                </div>
                <div className="menu-right p-0" style={{ width: "700px" }}>
                  <div className="d-flex row">
                    {content[activeField].map((item, index) => (
                      <div
                        className="pt-2 col-5 w-50 pb-3 ps-4"
                        key={index}
                        style={{ border: "1px solid #dfdfdf" }}
                      >
                        <h6 className="text-dark fw-semibold fs-5">
                          {item.title}
                        </h6>
                        {item.items?.map((subItem, subIndex) => (
                          <div key={subIndex} className="text-black fw-meduim">
                            {subItem}
                          </div>
                        ))}
                        <a href={item.link} className="text-dark fw-semibold">
                          View More
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default ExploreMenu;
