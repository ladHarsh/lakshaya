import AllCoursesBox from "../../component/college_page_component/AllCoursesBox";
import AllProgram from "../../component/college_page_component/AllProgram";
import CoursesAndFeesBox from "../../component/college_page_component/CoursesAndFeesBox";
import FeesStructureBox from "../../component/college_page_component/FeesStructureBox";
import OverviewBox from "../../component/college_page_component/OverviewBox";
import Placeholder from "../../component/college_page_component/Placeholder";
import { useEffect, useState } from "react";

const Courses_Fees = ({ name }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const CoursesAndFees = () => {
    return (
      <>
        <div className="courses-and-fees">
          <OverviewBox name={name} />
          <div class="accordion mt-3" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button fs-5 fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Table of Content
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  <ol>
                    <li>DAIICT Courses and Fees</li>
                    <li>DAIICT Fees Structure</li>
                    <li>DAIICT All Programs</li>
                    <li>DAIICT All Courses</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <CoursesAndFeesBox name={"Courses and Fees"} collegeData={name} />
          <FeesStructureBox name={"Fees Structure"} collegeData={name} />
          <AllProgram name={"All Programs"} collegeData={name} />
          <AllCoursesBox name={"All Courses"} collegeData={name} />
        </div>
      </>
    );
  };

  return (
    <div className="">{isLoading ? <Placeholder /> : <CoursesAndFees />}</div>
  );
};

export default Courses_Fees;
