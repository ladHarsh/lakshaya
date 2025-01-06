import { FiDownload } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CollegeHeaderBox = ({ name }) => {
  const college = name;
  return (
    <>
      {name.map((college) => (
        <div className="college-info-box">
          <div className="mt-4">
            <div className="row pt-2">
              {/* Image Column */}
              <div className="col-2 d-flex justify-content-center">
                <img
                  src={`https://lakshaya-backend.onrender.com/uploads/titelImg-${encodeURIComponent(
                    college.Name
                  )}.jpg`}
                  className="img-fluid"
                  style={{ height: "60%", maxWidth: "100%" }}
                  alt="College Image"
                />
              </div>

              {/* Content Column */}
              <div className="col-8">
                <p className="fs-4 fs-md-2 fw-semibold">
                  {college.hedaerTitle}
                </p>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <span className="pe-2">
                      <FaLocationDot />
                    </span>
                    {college.loc}, {college.state}
                  </div>
                  <div className="col-12 col-md-9 mt-2">
                    <div className="row">
                      {college.tag.map((tag, index) => (
                        <div key={index} className="col-12 col-md-3 mb-md-0">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* For smaller screens, hide the download, apply, and rating sections */}
              <div className="col-2 col-md-2 mt-1 pt-2 d-none d-md-block">
                <a
                  className="p-2 download-box"
                  href={`https://lakshaya-backend.onrender.com/uploads/${encodeURIComponent(
                    college.Name
                  )}.pdf`}
                  download
                >
                  <span className="pe-2">
                    <FiDownload />
                  </span>
                  Download File
                </a>
              </div>
            </div>

            <div className="row">
              <div className="d-md-none">
                {/* Carousel for small screens with added padding */}
                <Carousel>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={`https://lakshaya-backend.onrender.com/uploads/collegeImg-${encodeURIComponent(
                          college.Name
                        )}-${index + 1}.jpeg`}
                        alt={`Slide ${index + 1}`}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          padding: "10px", // Added padding
                          borderRadius: "10px", // Optional: rounding the image corners
                        }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className="row d-none d-md-flex justify-content-evenly">
                {/* Primary Image */}
                <div className="col-6">
                  <img
                    src={`https://lakshaya-backend.onrender.com/uploads/collegeImg-${encodeURIComponent(
                      college.Name
                    )}-1.jpeg`}
                    alt="Primary"
                    style={{
                      paddingLeft: "19px",
                      width: "96%",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Secondary Images */}
                <div className="col-6">
                  <div className="row">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div className="col-6" key={index}>
                        <img
                          src={`https://lakshaya-backend.onrender.com/uploads/collegeImg-${encodeURIComponent(
                            college.Name
                          )}-${index + 2}.jpeg`}
                          alt={`Image ${index + 2}`}
                          style={{
                            width: "100%",
                            aspectRatio: "16/9",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CollegeHeaderBox;
