import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import { MdDoneOutline } from "react-icons/md";

const CollegePredictor = () => {
  const [step, setStep] = useState("First");
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("");
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get("https://lakshaya-backend.onrender.com/college")
      .then((colleges) => setColleges(colleges.data))
      .catch((err) => console.log(err));
  }, []);

  function FirstStep() {
    return (
      <>
        <div className="heading fs-4 fw-semibold">Select a Course</div>
        <div className="row mt-4">
          <div className="col-12 col-md-4">
            <div
              className="card"
              style={{ width: "12rem" }}
              role="button"
              onClick={() => setStep("Second")}
            >
              <img
                src="/img/be_btech.jpg"
                className="card-img-top"
                alt="B.Tech"
              />
              <div className="card-body border-top p-0 d-flex justify-content-center">
                <div className="title pt-2 pb-2 fs-5">B.Tech</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function SecondStep() {
    return (
      <>
        <div className="heading fs-4 fw-semibold">
          Select exams you have taken
        </div>
        <div className="col-1 mt-4">
          <div
            className="text-center"
            role="button"
            onClick={() => setStep("Third")}
          >
            <div className="border d-flex justify-content-center">
              <img src="/img/Gujcet_Exam.png" alt="Gujcet Exam" />
            </div>
            <div className="fw-semibold mt-2">Gujcet</div>
          </div>
        </div>
      </>
    );
  }

  function ThirdStep() {
    return (
      <>
        <div className="heading fs-4 fw-semibold">Enter Exam Score</div>
        <div className="fs-5 mt-4 d-block">
          <div className="fw-semibold">Selected Course</div>
          <input
            className="btn text-white"
            type="submit"
            value="B.Tech"
            style={{ backgroundColor: "rgb(108, 117, 125)" }}
          />
        </div>
        <div className="fs-5 mt-3 d-block">
          <div className="fw-semibold">Selected Exam</div>
          <input
            className="btn text-white"
            type="submit"
            value="Gujcet"
            style={{ backgroundColor: "rgb(108, 117, 125)" }}
          />
        </div>
        <div className="fs-5 mt-4 d-block">
          <div className="fw-semibold">Enter Exam Rank/Score</div>
          <div className="mb-2 fs-6">
            Giving your exam rank/score will help us recommend you better
            colleges and admissions. If you don't have actual rank/score, then
            enter expected rank/score.
          </div>
          <form>
            <div className="form-group fw-semibold fs-5">
              <div className="row">
                <label htmlFor="rank">GUJCET (B.E. / B.Tech)</label>
                <div className="col-12 col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="rank"
                    placeholder="Rank"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="category">Category</label>
              <div className="row">
                <div className="col-12 col-md-4">
                  <select
                    className="form-control"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="General">General</option>
                    <option value="SEBC">SEBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="EWS">EWS</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center">
              <div className="col-12 col-md-3 d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setStep("Second")}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => setStep("Result")}
                >
                  Predict result
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function ResultStep() {
    return (
      <>
        <div className="heading fs-4 fw-semibold">Predicted Result</div>
        <div className="fs-5 mt-4">
          <div className="fw-semibold">Your Entered Details:</div>
          <div>Rank: {rank || "Not Provided"}</div>
          <div>Category: {category || "Not Provided"}</div>
        </div>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => setStep("Third")}
            >
              Edit Details
            </button>
          </div>
        </div>
        <div className="mt-4">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="mb-4 border rounded bg-light"
              style={{
                border: "1px solid #ccc",
              }}
            >
              <div className="p-3 bg-dark-subtle">
                <h5 className="mb-0">{college.Name}</h5>
              </div>
              <div className="p-3">
                {/* Check cutoffs for branches */}
                {Object.keys(college)
                  .filter((key) =>
                    key.includes("gujcet_cutoff_2024_" + category)
                  )
                  .map((key, i) => (
                    <div key={i} className="mb-3">
                      <p className="mb-1">
                        <strong>Branch:</strong> {college[key]}
                      </p>
                      <p className="mb-0">
                        <strong>Cutoff:</strong> {college[key]}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="college-predictor">
      <NavBar />
      <div className="bg row p-5 pb-4 container-fluid">
        <div className="col-12 col-md-5 m-auto">
          <span className="text-light fs-3 fw-bold">College Predictor</span>
          <div className="fs-4 col-12 fw-semibold" style={{ color: "#d1d1d1" }}>
            Predict College based on exams rank you provide.
          </div>
        </div>
        <div className="row mt-3 d-flex flex-row-reverse">
          <div className="col-2 p-0">
            <span
              className="text-light fs-5 ms-2 fw-medium"
              style={{ color: "#d1d1d1" }}
            >
              Tool By <span className="text-info ms-1">Lakshaya</span>
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="border rounded">
          <div className="row">
            <div className="col-12 col-md-2 border-end d-flex justify-content-center d-none d-md-block">
              <div className="stepper mt-4">
                <div className={`step ${step === "First" && "active"}`}>
                  <div className="step-circle">
                    {step !== "First" ? (
                      <span>
                        <MdDoneOutline />
                      </span>
                    ) : (
                      <span className="step-number">1</span>
                    )}
                  </div>
                  <div className="step-title">Select a Course</div>
                </div>
                <div className={`step ${step === "Second" && "active"}`}>
                  <div className="step-circle">
                    {step === "Third" || step === "Result" ? (
                      <span>
                        <MdDoneOutline />
                      </span>
                    ) : (
                      <span className="step-number">2</span>
                    )}
                  </div>
                  <div className="step-title">Select Exam</div>
                </div>
                <div className={`step ${step === "Third" && "active"}`}>
                  <div className="step-circle">
                    {step === "Result" ? (
                      <span>
                        <MdDoneOutline />
                      </span>
                    ) : (
                      <span className="step-number">3</span>
                    )}
                  </div>
                  <div className="step-title">Enter Score</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-10 p-4">
              {step === "First" && FirstStep()}
              {step === "Second" && SecondStep()}
              {step === "Third" && ThirdStep()}
              {step === "Result" && ResultStep()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollegePredictor;
