import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";
import AddCollegeComponent from "../../component/college_feature_component/AddCollegeComponent";
import { IoMdAddCircleOutline } from "react-icons/io";

const CollegeComparer = () => {
  const [colleges, setColleges] = useState([]);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [showSelectedIds, setShowSelectedIds] = useState(false);

  useEffect(() => {
    axios
      .get("https://lakshaya-backend.onrender.com/college")
      .then((colleges) => setColleges(colleges.data))
      .catch((err) => console.log(err));
  }, []);

  const handleComparer = () => {
    if (selectedColleges.length === 1) {
      setShowSelectedIds(true); // Show the selected IDs
    } else {
      alert("Please select exactly two colleges to compare.");
    }
  };
  const getCollegeDetails = (id) =>
    colleges.find((college) => college._id === id);

  const renderBranchCourses = (branchName, courses, seats) => {
    if (!branchName) return null; // Skip rendering if branch name is not available

    // Filter out courses where seat is not available or is "N/A"
    const validCourses = courses
      .map((course, index) => ({
        course,
        seat: seats[index],
      }))
      .filter((item) => item.seat && item.seat !== "N/A");

    if (validCourses.length === 0) return null; // Skip rendering if no valid courses

    return (
      <div>
        <div className="fw-bold">{branchName}</div>
        <tbody>
          {validCourses.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="text-start">{item.course}</td>
              </tr>
              <tr>
                <td className="text-start text-muted">Seats: {item.seat}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </div>
    );
  };

  return (
    <div className="college-comparer">
      <NavBar />
      <div className="bg p-5 pb-4 container-fluid">
        <div className="col-12 col-md-5 mx-auto">
          <span className="text-light fs-3 fw-bold">College Comparer</span>
          <div className="fs-4" style={{ color: "#d1d1d1" }}>
            Simplify Your College Search with Expert Comparisons.
          </div>
        </div>
        <div className="row mt-3 d-flex justify-content-end">
          <div className="col-12 col-md-2 p-0">
            <span className="text-light fs-5 ms-2" style={{ color: "#d1d1d1" }}>
              Tool By <span className="text-info ms-1">Lakshaya</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row border rounded mt-5">
          <AddCollegeComponent
            colleges={colleges}
            selectedColleges={selectedColleges}
            setSelectedColleges={setSelectedColleges}
            handleComparer={handleComparer}
          />
          {/*  */}
          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);
            return (
              <>
                <div className="col-6 border-end">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center pt-5 pb-5">
                      <div
                        className="card text-bg-light mb-3 box-1-college-box shadow-sm"
                        style={{ width: "23rem" }}
                      >
                        <div className="row h-100">
                          <div className="college-img ms-2">
                            <img
                              src={`http://localhost:7777/uploads/titelImg-${encodeURIComponent(
                                college.Name
                              )}.jpg`}
                              className="card-img-top w-100"
                              alt="Image"
                              style={{ height: "60%" }}
                            />
                          </div>
                          <div className="col-8 card-right-body">
                            <div
                              className="card-body college-info pt-2 w-100 d-flex flex-column justify-content-between"
                              style={{
                                borderRadius: "0 0 8px 8px",
                                padding: "1rem",
                              }}
                            >
                              <h5
                                className="card-title w-100"
                                style={{ color: "#343a40" }}
                              >
                                {college.Name}
                              </h5>
                              <p
                                className="card-text college-location"
                                style={{
                                  fontSize: "0.9rem",
                                  color: "#6c757d",
                                  marginBottom: "1rem",
                                }}
                              >
                                {college.loc}, {college.state}
                              </p>
                              <a
                                href={"/college/" + college._id}
                                className="btn btn-primary mt-auto"
                                style={{
                                  backgroundColor: "#007bff",
                                  borderColor: "#007bff",
                                  fontWeight: "500",
                                  padding: "0.5rem 1rem",
                                }}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/*  */}
          <div className="bg-body-secondary text-center fs-5 fw-semibold pt-1 pb-1">
            Institute Information
          </div>

          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);
            return (
              <div className="col-12 col-md-6 mb-3" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-4">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td className="text-start">Established Year</td>
                          <td className="text-end">{college.established}</td>
                        </tr>
                        <tr>
                          <td className="text-start">Campus</td>
                          <td className="text-end">{college.campus}</td>
                        </tr>
                        <tr>
                          <td className="text-start">Type</td>
                          <td className="text-end">{college.type}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="bg-body-secondary text-center fs-5 fw-semibold pt-1 pb-1">
            Popular Programs
          </div>

          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);
            return (
              <div className="col-12 col-md-6 mb-3" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-4">
                    <table className="w-100">
                      <tbody>
                        {college.branchName_1 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_1}
                            </td>
                          </tr>
                        )}
                        {college.branchName_2 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_2}
                            </td>
                          </tr>
                        )}
                        {college.branchName_3 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_3}
                            </td>
                          </tr>
                        )}
                        {college.branchName_4 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_4}
                            </td>
                          </tr>
                        )}
                        {college.branchName_5 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_5}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="bg-body-secondary text-center fs-5 fw-semibold pt-1 pb-1">
            Courses Details
          </div>

          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);

            const renderBranchCourses = (branchName, courses) => {
              if (!branchName) return null;

              return (
                <div>
                  <div className="fw-bold">{branchName}</div>
                  <tbody>
                    {courses.map((course, index) => (
                      <tr key={index}>
                        <td className="text-start">{course}</td>
                      </tr>
                    ))}
                  </tbody>
                </div>
              );
            };

            return (
              <div className="col-12 col-md-6 mb-3" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-4">
                    <table className="w-100">
                      {renderBranchCourses(college.branchName_1, [
                        college.branchName_1_coursesName_1,
                        college.branchName_1_coursesName_2,
                        college.branchName_1_coursesName_3,
                        college.branchName_1_coursesName_4,
                        college.branchName_1_coursesName_5,
                      ])}
                      {renderBranchCourses(college.branchName_2, [
                        college.branchName_2_coursesName_1,
                        college.branchName_2_coursesName_2,
                        college.branchName_2_coursesName_3,
                        college.branchName_2_coursesName_4,
                        college.branchName_2_coursesName_5,
                      ])}
                      {renderBranchCourses(college.branchName_3, [
                        college.branchName_3_coursesName_1,
                        college.branchName_3_coursesName_2,
                        college.branchName_3_coursesName_3,
                        college.branchName_3_coursesName_4,
                        college.branchName_3_coursesName_5,
                      ])}
                      {renderBranchCourses(college.branchName_4, [
                        college.branchName_4_coursesName_1,
                        college.branchName_4_coursesName_2,
                        college.branchName_4_coursesName_3,
                        college.branchName_4_coursesName_4,
                        college.branchName_4_coursesName_5,
                      ])}
                      {renderBranchCourses(college.branchName_5, [
                        college.branchName_5_coursesName_1,
                        college.branchName_5_coursesName_2,
                        college.branchName_5_coursesName_3,
                        college.branchName_5_coursesName_4,
                        college.branchName_5_coursesName_5,
                      ])}
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="bg-body-secondary text-center fs-5 fw-semibold pt-1 pb-1">
            Course Fees
          </div>

          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);
            return (
              <div className="col-12 col-md-6 mb-3" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-4">
                    <table className="w-100">
                      <tbody>
                        {college.branchName_1 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_1}
                            </td>
                            <td className="text-end">
                              {college.branchName_1_tuitionFees}
                            </td>
                          </tr>
                        )}
                        {college.branchName_2 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_2}
                            </td>
                            <td className="text-end">
                              {college.branchName_2_tuitionFees}
                            </td>
                          </tr>
                        )}
                        {college.branchName_3 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_3}
                            </td>
                            <td className="text-end">
                              {college.branchName_3_tuitionFees}
                            </td>
                          </tr>
                        )}
                        {college.branchName_4 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_4}
                            </td>
                            <td className="text-end">
                              {college.branchName_4_tuitionFees}
                            </td>
                          </tr>
                        )}
                        {college.branchName_5 && (
                          <tr>
                            <td className="text-start">
                              {college.branchName_5}
                            </td>
                            <td className="text-end">
                              {college.branchName_5_tuitionFees}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          {/*  */}
          <div className="bg-body-secondary text-center fs-5 fw-semibold py-1">
            Cut Off
          </div>
          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);
            return (
              <div className="col-12 col-md-6 border-end" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-3">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td className="text-start">
                            {college.branchName_1_coursesName_1}
                          </td>
                          <td className="text-end">
                            {
                              college.branchName_1_coursesName_1_gujcet_cutoff_2024_General
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            {college.branchName_1_coursesName_2}
                          </td>
                          <td className="text-end">
                            {
                              college.branchName_1_coursesName_2_gujcet_cutoff_2024_General
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            {college.branchName_1_coursesName_3}
                          </td>
                          <td className="text-end">
                            {
                              college.branchName_1_coursesName_3_gujcet_cutoff_2024_General
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            {college.branchName_1_coursesName_4}
                          </td>
                          <td className="text-end">
                            {
                              college.branchName_1_coursesName_4_gujcet_cutoff_2024_General
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            {college.branchName_1_coursesName_5}
                          </td>
                          <td className="text-end">
                            {
                              college.branchName_1_coursesName_5_gujcet_cutoff_2024_General
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Placement Section */}
          <div className="bg-body-secondary text-center fs-5 fw-semibold py-1">
            Placement
          </div>
          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);
            return (
              <div className="col-12 col-md-6 border-end" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-3">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td className="text-start">Highest Package</td>
                          <td className="text-end">{college.highestPackage}</td>
                        </tr>
                        <tr>
                          <td className="text-start">Average Package</td>
                          <td className="text-end">{college.averagePackage}</td>
                        </tr>
                        <tr>
                          <td className="text-start">Number Of Place</td>
                          <td className="text-end">{college.numberOfPalce}</td>
                        </tr>
                        <tr>
                          <td className="text-start">Median Package 2023</td>
                          <td className="text-end">
                            {college.medianPackage2023}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            No. Of Companies Visited
                          </td>
                          <td className="text-end">
                            {college.noOfCompaniesVisited}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Total Seats Section */}
          <div className="bg-body-secondary text-center fs-5 fw-semibold py-1">
            Total Seats
          </div>
          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);
            return (
              <div className="col-12 col-md-6 border-end" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-3">
                    <table className="w-100">
                      {renderBranchCourses(
                        college.branchName_1,
                        [
                          college.branchName_1_coursesName_1,
                          college.branchName_1_coursesName_2,
                          college.branchName_1_coursesName_3,
                          college.branchName_1_coursesName_4,
                          college.branchName_1_coursesName_5,
                        ],
                        [
                          college.branchName_1_coursesName_1_seat,
                          college.branchName_1_coursesName_2_seat,
                          college.branchName_1_coursesName_3_seat,
                          college.branchName_1_coursesName_4_seat,
                          college.branchName_1_coursesName_5_seat,
                        ]
                      )}
                      {renderBranchCourses(
                        college.branchName_2,
                        [
                          college.branchName_2_coursesName_1,
                          college.branchName_2_coursesName_2,
                          college.branchName_2_coursesName_3,
                          college.branchName_2_coursesName_4,
                          college.branchName_2_coursesName_5,
                        ],
                        [
                          college.branchName_2_coursesName_1_seat,
                          college.branchName_2_coursesName_2_seat,
                          college.branchName_2_coursesName_3_seat,
                          college.branchName_2_coursesName_4_seat,
                          college.branchName_2_coursesName_5_seat,
                        ]
                      )}
                      {renderBranchCourses(
                        college.branchName_3,
                        [
                          college.branchName_3_coursesName_1,
                          college.branchName_3_coursesName_2,
                          college.branchName_3_coursesName_3,
                          college.branchName_3_coursesName_4,
                          college.branchName_3_coursesName_5,
                        ],
                        [
                          college.branchName_3_coursesName_1_seat,
                          college.branchName_3_coursesName_2_seat,
                          college.branchName_3_coursesName_3_seat,
                          college.branchName_3_coursesName_4_seat,
                          college.branchName_3_coursesName_5_seat,
                        ]
                      )}
                      {renderBranchCourses(
                        college.branchName_4,
                        [
                          college.branchName_4_coursesName_1,
                          college.branchName_4_coursesName_2,
                          college.branchName_4_coursesName_3,
                          college.branchName_4_coursesName_4,
                          college.branchName_4_coursesName_5,
                        ],
                        [
                          college.branchName_4_coursesName_1_seat,
                          college.branchName_4_coursesName_2_seat,
                          college.branchName_4_coursesName_3_seat,
                          college.branchName_4_coursesName_4_seat,
                          college.branchName_4_coursesName_5_seat,
                        ]
                      )}
                      {renderBranchCourses(
                        college.branchName_5,
                        [
                          college.branchName_5_coursesName_1,
                          college.branchName_5_coursesName_2,
                          college.branchName_5_coursesName_3,
                          college.branchName_5_coursesName_4,
                          college.branchName_5_coursesName_5,
                        ],
                        [
                          college.branchName_5_coursesName_1_seat,
                          college.branchName_5_coursesName_2_seat,
                          college.branchName_5_coursesName_3_seat,
                          college.branchName_5_coursesName_4_seat,
                          college.branchName_5_coursesName_5_seat,
                        ]
                      )}
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          {/*  */}
          <div className="bg-body-secondary text-center fs-5 fw-semibold pt-1 pb-1">
            Infrastructure & Facilities
          </div>
          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);
            return (
              <div className="col-12 col-md-6 border-end" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-3">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td className="text-start">
                            {college.facilitiesName_1?.replace(":", "")}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            {college.facilitiesName_2?.replace(":", "")}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            {college.facilitiesName_3?.replace(":", "")}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            {college.facilitiesName_4?.replace(":", "")}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            {college.facilitiesName_5?.replace(":", "")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Accreditation and Approval */}
          <div className="bg-body-secondary text-center fs-5 fw-semibold pt-1 pb-1">
            Accreditation and Approval
          </div>
          {selectedColleges.map((id) => {
            const college = getCollegeDetails(id);

            // Filter tags containing 'accredited' or 'Approved' and replace underscores with spaces
            const filteredTags = college.tag
              .filter(
                (tag) => tag.includes("accredited") || tag.includes("Approved")
              )
              .map((tag) => tag.replace(/_/g, " ")); // Replace underscores with spaces

            return (
              <div className="col-12 col-md-6 border-end" key={id}>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center py-3">
                    <table className="w-100">
                      <tbody>
                        {filteredTags.map((filteredTag, index) => (
                          <tr key={index}>
                            <td className="text-start">{filteredTag}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CollegeComparer;
