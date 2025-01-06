import HighlightsBox from "../../component/college_page_component/HighlightsBox";
import CoursesBox from "../../component/college_page_component/CoursesBox";
import AdmissionBox from "../../component/college_page_component/AdmissionBox";
import PlacementBox from "../../component/college_page_component/PlacementBox";
import ScholarshipsBox from "../../component/college_page_component/ScholarshipsBox";
import FacilitiesBox from "../../component/college_page_component/FacilitiesBox";
import FacultyBox from "../../component/college_page_component/FacultyBox";
import OverviewBox from "../../component/college_page_component/OverviewBox";

const InfoPage = ({ name }) => {
  const collegeData = name;
  return (
    <>
      <OverviewBox name={name} />

      {/* Table of content */}
      <div className="accordion mt-3" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button fs-5 fw-medium"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Table of Content
            </button>
          </h2>
          {name.map((college) => (
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              key={college.Name}
            >
              <div className="accordion-body">
                <ol>
                  {college.tableContent.map((item, index) => (
                    <li key={index}>{`${college.Name} ${item}`}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Boxes for various sections */}
      <HighlightsBox name="Highlights" collegeData={name} />
      <CoursesBox name="Courses" collegeData={name} />
      <AdmissionBox name="Admissions" collegeData={name} />
      <PlacementBox name="Placement" collegeData={name} />
      <ScholarshipsBox name="Scholarships" collegeData={name} />
      <FacilitiesBox name="Facilities" collegeData={name} />
      <FacultyBox name="Faculty" collegeData={name} />
    </>
  );
};

export default InfoPage;
