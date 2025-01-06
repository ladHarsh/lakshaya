import PlacementReportBox from "../../component/college_page_component/PlacementReportBox";
import RecruitersBox from "../../component/college_page_component/RecruitersBox";
import { useEffect, useState } from "react";
import Placeholder from "../../component/college_page_component/Placeholder";
import OverviewBox from "../../component/college_page_component/OverviewBox";

const Placement = ({ name }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const PlacementPage = () => {
    return (
      <>
        {name.map((college) => (
          <div className="placement">
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
                      <li>{college.Name} Placement Report 2024</li>
                      <li>{college.Name} Placements 2024: Top Recruiters</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <PlacementReportBox
              name={"Placement Report 2024"}
              collegeData={name}
            />
            <RecruitersBox
              name={"Placements 2024: Top Recruiters"}
              collegeData={name}
            />
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="">{isLoading ? <Placeholder /> : <PlacementPage />}</div>
  );
};

export default Placement;
