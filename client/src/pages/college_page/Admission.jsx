import ApplicationProcessBox from "../../component/college_page_component/ApplicationProcessBox";
import CoursesAndEligibillityBox from "../../component/college_page_component/CoursesAndEligibilityBox";
import CutoffBox from "../../component/college_page_component/CutOffBox";
import OverviewBox from "../../component/college_page_component/OverviewBox";
import Placeholder from "../../component/college_page_component/Placeholder";
import { useEffect, useState } from "react";

const Admission = ({ name }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const AdmissionPage = () => {
    return (
      <div className="admission">
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
                  <li>DAIICT Courses & Eligibility</li>
                  <li>
                    DAIICT Application Process
                    <ul>
                      <li>DAIICT, GUJCET Cutoff 2023</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <CoursesAndEligibillityBox
          name={"Courses & Eligibility"}
          collegeData={name}
        />
        <ApplicationProcessBox
          name={"Application Process"}
          collegeData={name}
        />

        <CutoffBox collegeData={name} />
      </div>
    );
  };

  return (
    <div className="">{isLoading ? <Placeholder /> : <AdmissionPage />}</div>
  );
};

export default Admission;
