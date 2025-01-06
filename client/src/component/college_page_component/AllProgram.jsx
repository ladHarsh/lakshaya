import React from "react";

const AllProgram = ({ name, collegeData }) => {
  const branches = [
    {
      name: "branchName_1",
      exam: "branchName_1_exam",
      fees: "branchName_1_tuitionFees",
      duration: "branchName_1_duration",
    },
    {
      name: "branchName_2",
      exam: "branchName_2_exam",
      fees: "branchName_2_tuitionFees",
      duration: "branchName_2_duration",
    },
    {
      name: "branchName_3",
      exam: "branchName_3_exam",
      fees: "branchName_3_tuitionFees",
      duration: "branchName_3_duration",
    },
    {
      name: "branchName_4",
      exam: "branchName_4_exam",
      fees: "branchName_4_tuitionFees",
      duration: "branchName_4_duration",
    },
    {
      name: "branchName_5",
      exam: "branchName_5_exam",
      fees: "branchName_5_tuitionFees",
      duration: "branchName_5_duration",
    },
  ];

  // Function to get all courses dynamically from the provided data
  function getAllCourses(college) {
    const branches = [];

    for (let i = 1; i <= 5; i++) {
      const branchCourses = {};
      for (let j = 1; j <= 5; j++) {
        const courseKey = `branchName_${i}_coursesName_${j}`;
        const courseName = college[0][courseKey];
        if (courseName) {
          branchCourses[courseKey] = courseName;
        }
      }
      if (Object.keys(branchCourses).length > 0) {
        branches.push({
          courses: branchCourses,
          length: Object.keys(branchCourses).length, // Add course count
        });
      }
    }

    return branches;
  }

  return (
    <>
      {collegeData.map((college, index) => {
        // Filter branches to exclude empty fields
        const validBranches = branches.filter((branch) =>
          college[branch.name]?.trim()
        );

        // Get all courses for the current college
        const allCourses = getAllCourses(collegeData);

        return (
          <div key={index} className="all-programs mt-3 p-3 border rounded">
            <div className="mb-2 fs-4 fw-medium">
              {college.Name}&nbsp;{name}
            </div>
            <div className="mt-2 fs-6">
              <span className="fw-light">Showing</span>{" "}
              <strong>{validBranches.length} programs</strong>
            </div>

            {validBranches.map((branch, i) => (
              <div key={i} className="mt-3 border rounded">
                <div className="row p-3 pb-2">
                  <div className="col-9 border-bottom">
                    <span
                      className="fs-5 fw-semibold text-primary"
                      role="button"
                    >
                      {college[branch.name]}
                    </span>
                    <div className="row pb-2">
                      <div className="col-6 col-md-2 border-end">
                        <span className="fw-medium">
                          {allCourses[i]?.length || 0} Courses
                        </span>
                      </div>
                      <div className="col-6 col-md-3 ps-3 ">
                        <span className="fw-medium ps-2 pe-2">
                          {college[branch.duration]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 d-flex align-items-center border-bottom">
                    <div className="float-end pb-2 ">
                      <button type="button" className="btn btn-primary">
                        Go to Courses
                      </button>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-6 col-md-3 pe-0">
                      <span className="text-secondary fw-semibold fs-6">
                        Exams Accepted
                      </span>
                      <div className="row">
                        <div className="col-12 text-overflow fw-bold">
                          {college[branch.exam]}
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 p-0">
                      <span className="text-secondary fw-semibold fs-6">
                        Total Tuition Fees
                      </span>
                      <div className="row">
                        <div className="col-12 text-overflow fw-semibold">
                          {college[branch.fees]}
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 d-flex align-items-center flex-row-reverse pe-4">
                      <div className="row">
                        <div className="col-6 d-none d-md-block">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            Save
                          </button>
                        </div>
                        <div className="col-6 d-none d-md-block">
                          <button
                            type="button"
                            className="btn btn-outline-success"
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default AllProgram;
