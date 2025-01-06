import React from "react";

const CoursesBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college, index) => {
        // Extract the src attribute from the video_1 field
        const videoSrc =
          typeof college.video_1 === "string"
            ? college.video_1.match(/src="([^"]*)"/)?.[1]
            : null;

        return (
          <div key={index} className="courses mt-3 mb-4">
            {/* College Name */}
            <div className="mb-3 fs-4 fw-bold">
              {college.Name}&nbsp;{name}
            </div>
            <div className="mb-2 fs-6">
              Both UG, PG, and PhD programs are offered by the institute.
              Details are given below:
            </div>

            {/* Table for Program Details */}
            <table className="table table-bordered">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Programmes</th>
                  <th scope="col">Courses</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {/* Example for B.E. / B.Tech Programs */}
                <tr>
                  <td>{college.branchName_1}</td>
                  <td>
                    <ul>
                      {college.branchName_1_coursesName_1 && (
                        <li>{college.branchName_1_coursesName_1}</li>
                      )}
                      {college.branchName_1_coursesName_2 && (
                        <li>{college.branchName_1_coursesName_2}</li>
                      )}
                      {college.branchName_1_coursesName_3 && (
                        <li>{college.branchName_1_coursesName_3}</li>
                      )}
                      {college.branchName_1_coursesName_4 && (
                        <li>{college.branchName_1_coursesName_4}</li>
                      )}
                      {college.branchName_1_coursesName_5 && (
                        <li>{college.branchName_1_coursesName_5}</li>
                      )}
                    </ul>
                  </td>
                  <td>{college.branchName_1_duration}</td>
                </tr>
                {/* M.E. / M.Tech Programs */}
                <tr>
                  <td>{college.branchName_2}</td>
                  <td>
                    <ul>
                      {college.branchName_2_coursesName_1 && (
                        <li>{college.branchName_2_coursesName_1}</li>
                      )}
                      {college.branchName_2_coursesName_2 && (
                        <li>{college.branchName_2_coursesName_2}</li>
                      )}
                      {college.branchName_2_coursesName_3 && (
                        <li>{college.branchName_2_coursesName_3}</li>
                      )}
                      {college.branchName_2_coursesName_4 && (
                        <li>{college.branchName_2_coursesName_4}</li>
                      )}
                      {college.branchName_2_coursesName_5 && (
                        <li>{college.branchName_2_coursesName_5}</li>
                      )}
                    </ul>
                  </td>
                  <td>{college.branchName_2_duration}</td>
                </tr>
                {/* M.Sc Programs */}
                <tr>
                  <td>{college.branchName_3}</td>
                  <td>
                    <ul>
                      {college.branchName_3_coursesName_1 && (
                        <li>{college.branchName_3_coursesName_1}</li>
                      )}
                      {college.branchName_3_coursesName_2 && (
                        <li>{college.branchName_3_coursesName_2}</li>
                      )}
                      {college.branchName_3_coursesName_3 && (
                        <li>{college.branchName_3_coursesName_3}</li>
                      )}
                    </ul>
                  </td>
                  <td>{college.branchName_3_duration}</td>
                </tr>
                {/* M.Des Programs */}
                <tr>
                  <td>{college.branchName_4}</td>
                  <td>
                    <ul>
                      {college.branchName_4_coursesName_1 && (
                        <li>{college.branchName_4_coursesName_1}</li>
                      )}
                    </ul>
                  </td>
                  <td>{college.branchName_4_duration}</td>
                </tr>
              </tbody>
            </table>

            {/* Video Section */}
            <div className="mt-3 mb-3 fs-5 fw-medium">
              {college.Name} Campus Tour
              <div className="row d-flex justify-content-center mt-2">
                <div className="col-10">
                  <div className="ratio ratio-16x9">
                    {videoSrc ? (
                      <iframe
                        width="560"
                        height="315"
                        src={videoSrc}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <p>No video available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CoursesBox;
