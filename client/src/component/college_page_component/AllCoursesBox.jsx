import { LiaRupeeSignSolid } from "react-icons/lia";

const getAllCoursesWithDetails = (college) => {
  const courses = [];

  for (let i = 1; i <= 5; i++) {
    const branch = college[0];
    if (branch) {
      const branchDurationKey = `branchName_${i}_duration`;
      const branchTuitionFeesKey = `branchName_${i}_tuitionFees`;
      const branchExamKey = `branchName_${i}_exam`;

      for (let j = 1; j <= 5; j++) {
        const courseKey = `branchName_${i}_coursesName_${j}`;
        const courseSeatKey = `branchName_${i}_coursesName_${j}_seat`;

        const courseName = branch[courseKey];
        const courseSeat = branch[courseSeatKey];
        const branchDuration = branch[branchDurationKey];
        const branchTuitionFees = branch[branchTuitionFeesKey];
        const branchExam = branch[branchExamKey];

        if (courseName) {
          courses.push({
            courseName,
            seat: courseSeat || "N/A",
            duration: branchDuration || "N/A",
            tuitionFees: branchTuitionFees || "N/A",
            exam: branchExam || "N/A",
          });
        }
      }
    }
  }

  return courses;
};

const AllCoursesBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college, index) => {
        const allCourses = getAllCoursesWithDetails([college]);
        return (
          <div
            key={index}
            className="all-Courses mt-3 p-3 border rounded overflow-x-auto web-scoller"
            style={{ height: "620px" }}
          >
            <div className="mb-2 fs-4 fw-medium">
              {college.Name}&nbsp;{name}
            </div>
            <div className="mt-2 fs-6">
              <span className="fw-light">Showing</span>{" "}
              <strong>{allCourses.length} Courses</strong>
            </div>
            <div className="">
              {allCourses.map((course, courseIndex) => (
                <div
                  key={courseIndex}
                  className="course-item border rounded p-2 mb-2"
                >
                  <div className="fs-5 fw-semibold text-primary">
                    {course.courseName}
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>
                      <strong>Duration:</strong> {course.duration}
                    </span>
                    <span>
                      <strong>Seats:</strong> {course.seat}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>
                      <strong>Exams:</strong> {course.exam}
                    </span>
                    <span>
                      <strong>Fees:</strong> <LiaRupeeSignSolid />
                      {course.tuitionFees}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllCoursesBox;
