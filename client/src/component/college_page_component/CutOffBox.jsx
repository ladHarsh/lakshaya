import React from "react";

// Helper function to extract course details and cutoff data
const getAllCoursesWithDetails = (college) => {
  const courses = [];
  const branch = college[0]; // Assuming college is an array with a single object

  if (branch) {
    for (let j = 1; j <= 5; j++) {
      const courseKey = `branchName_1_coursesName_${j}`;

      const gujcet_cutoff_2024_EWS = `branchName_1_coursesName_${j}_gujcet_cutoff_2024_EWS`;
      const gujcet_cutoff_2024_General = `branchName_1_coursesName_${j}_gujcet_cutoff_2024_General`;
      const gujcet_cutoff_2024_SC = `branchName_1_coursesName_${j}_gujcet_cutoff_2024_SC`;
      const gujcet_cutoff_2024_SEBC = `branchName_1_coursesName_${j}_gujcet_cutoff_2024_SEBC`;
      const gujcet_cutoff_2024_ST = `branchName_1_coursesName_${j}_gujcet_cutoff_2024_ST`;
      const gujcet_cutoff_2024_TFWS = `branchName_1_coursesName_${j}_gujcet_cutoff_2024_TFWS`;

      const courseName = branch[courseKey];

      if (!courseName) continue; // Skip if the course name is missing

      courses.push({
        courseName,
        EWS: branch[gujcet_cutoff_2024_EWS],
        General: branch[gujcet_cutoff_2024_General],
        SC: branch[gujcet_cutoff_2024_SC],
        SEBC: branch[gujcet_cutoff_2024_SEBC],
        ST: branch[gujcet_cutoff_2024_ST],
        TFWS: branch[gujcet_cutoff_2024_TFWS],
      });
    }
  }
  return courses;
};

// Component to display cutoff details in a table
const CutoffBox = ({ collegeData }) => {
  return (
    <>
      {collegeData.map((college, index) => {
        const courses = getAllCoursesWithDetails([college]);

        return (
          <>
            <div className="mb-3 fs-4 fw-bold">
              {college.Name}, {college.loc} GUJCET Cut-Off 2024
            </div>
            <div className="mt-2" key={college.collegeId || index}>
              <div className="table-responsive">
                <table className="cut-off-table table table-bordered">
                  <thead>
                    <tr className="table-primary">
                      <th className="fixed-header">Courses</th>
                      <th>EWS</th>
                      <th>General</th>
                      <th>SC</th>
                      <th>SEBC</th>
                      <th>ST</th>
                      <th>TFWS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course, courseIndex) => (
                      <tr key={courseIndex}>
                        <td className="fixed-header">{course.courseName}</td>
                        <td>{course.EWS || "N/A"}</td>
                        <td>{course.General || "N/A"}</td>
                        <td>{course.SC || "N/A"}</td>
                        <td>{course.SEBC || "N/A"}</td>
                        <td>{course.ST || "N/A"}</td>
                        <td>{course.TFWS || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CutoffBox;
