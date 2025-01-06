import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";

const Scholarships = () => {
  return (
    <div className="scholarships">
      <NavBar />
      <div className="bg row p-5 pb-4 container-fliud">
        <div className="col-6 m-auto">
          <span className="text-light fs-3 fw-bold col-12 ">
            Explore Scholarships
          </span>
          <div className="fs-4 col-12 fw-semibold" style={{ color: "#d1d1d1" }}>
            Achieve More with Gujarat's Top Scholarship Opportunities.
          </div>
        </div>
        <div className="row mt-3 d-flex flex-row-reverse">
          <div className="col-2 p-0">
            <span
              className="text-light fs-5 ms-2 fw-meduim"
              style={{ color: "#d1d1d1" }}
            >
              Tool By<span className="text-info ms-1">Lakshaya</span>
            </span>
          </div>
        </div>
      </div>
      <section className="container mt-5 border p-4 rounded">
        <h1>Scholarships for Gujarat Students</h1>

        <div class="scholarship border rounded mt-5">
          <div className="row">
            <div className="col-10">
              <h2>1. MYSY Scholarship</h2>
              <div class="criteria">
                <strong>Criteria:</strong> For students who scored more than 80%
                in 12th and belong to families with an annual income of less
                than INR 6 lakhs.
              </div>
              <div class="due-date">
                <strong>Due Date:</strong> 31st August 2024
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div class="website">
                <a href="https://mysy.guj.nic.in/" target="blanck">
                  <button type="button" class="btn btn-primary">
                    Visit Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="scholarship border rounded mt-3">
          <div className="row">
            <div className="col-10">
              <h2>2. Digital Gujarat Scholarship</h2>
              <div class="criteria">
                <strong>Criteria:</strong> For SC/ST/OBC students pursuing UG/PG
                courses with an annual family income of less than INR 2.5 lakhs
                (for SC/ST) and INR 1 lakh (for OBC).
              </div>
              <div class="due-date">
                <strong>Due Date:</strong> 30th September 2024
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div class="website">
                <a href="https://www.digitalgujarat.gov.in/" target="blanck">
                  <button type="button" class="btn btn-primary">
                    Visit Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="scholarship border rounded mt-3">
          <div className="row">
            <div className="col-10">
              <h2>3. Post Matric Scholarship for OBC Students</h2>
              <div class="criteria">
                <strong>Criteria:</strong> For OBC students studying in UG/PG
                courses with a family income of less than INR 1 lakh per annum.
              </div>
              <div class="due-date">
                <strong>Due Date:</strong> 31st October 2024
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div class="website">
                <a href="https://scholarships.gov.in/" target="blanck">
                  <button type="button" class="btn btn-primary">
                    Visit Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="scholarship border rounded mt-3">
          <div className="row">
            <div className="col-10">
              <h2>4. Gujarat CM Scholarship</h2>
              <div class="criteria">
                <strong>Criteria:</strong> For students from economically weaker
                sections scoring more than 60% in their last examination.
              </div>
              <div class="due-date">
                <strong>Due Date:</strong> 31st December 2024
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div class="website">
                <a href="https://scholarships.gujarat.gov.in/" target="blanck">
                  <button type="button" class="btn btn-primary">
                    Visit Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="scholarship border rounded mt-3">
          <div className="row">
            <div className="col-10">
              <h2>5. PG Scholarship for Professional Courses for SC/ST</h2>
              <div class="criteria">
                <strong>Criteria:</strong> For SC/ST students pursuing
                professional PG courses with a family income of less than INR 6
                lakhs per annum.
              </div>
              <div class="due-date">
                <strong>Due Date:</strong> 15th January 2025
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div class="website">
                <a href="https://www.ugc.ac.in/" target="blanck">
                  {" "}
                  <button type="button" class="btn btn-primary">
                    Visit Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="scholarship border rounded mt-3">
          <div className="row">
            <div className="col-10">
              <h2>6. Reliance Foundation Scholarship</h2>
              <div class="criteria">
                <strong>Criteria:</strong> For students pursuing UG/PG courses
                with exceptional academic records and leadership potential.
              </div>
              <div class="due-date">
                <strong>Due Date:</strong> 31st March 2025
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div class="website">
                <a href="https://www.reliancefoundation.org/" target="blanck">
                  <button type="button" class="btn btn-primary">
                    Visit Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="scholarship border rounded mt-3">
          <div className="row">
            <div className="col-10">
              <h2>7. Aditya Birla Scholarship</h2>
              <div class="criteria">
                <strong>Criteria:</strong> For students of premier institutes
                like IITs, IIMs, and Law colleges with an excellent academic
                record.
              </div>
              <div class="due-date">
                <strong>Due Date:</strong> 15th April 2025
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div class="website">
                <a href="https://www.adityabirlascholars.net/" target="blanck">
                  <button type="button" class="btn btn-primary">
                    Visit Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="scholarship border rounded mt-3">
          <div className="row">
            <div className="col-10">
              <h2>8. Tata Scholarship for UG/PG Studies</h2>
              <div class="criteria">
                <strong>Criteria:</strong> For meritorious students with
                financial need pursuing UG/PG courses.
              </div>
              <div class="due-date">
                <strong>Due Date:</strong> 30th June 2025
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <div class="website">
                <a href="https://www.tatatrusts.org/" target="blanck">
                  <button type="button" class="btn btn-primary">
                    Visit Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Scholarships;
