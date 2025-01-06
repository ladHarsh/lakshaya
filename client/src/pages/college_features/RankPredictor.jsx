import React, { useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";

const RankPredictor = () => {
  const [step, setStep] = useState("First");
  const [sciencePercentile, setSciencePercentile] = useState("");
  const [gujcetPercentile, setGujcetPercentile] = useState("");
  const [predictedRank, setPredictedRank] = useState(null);

  const handlePredict = () => {
    // Validate inputs
    if (!sciencePercentile || !gujcetPercentile) {
      alert("Please enter both 12th Science percentile and GUJCET percentile.");
      return;
    }

    const science = parseFloat(sciencePercentile);
    const gujcet = parseFloat(gujcetPercentile);

    if (science < 0 || science > 100 || gujcet < 0 || gujcet > 100) {
      alert("Percentile values must be between 0 and 100.");
      return;
    }

    // Step 1: Calculate Result2
    const weightedAverage = science / 2 + gujcet / 2;
    const result2 = 100 - weightedAverage;

    // Step 2: Calculate Predicted Rank
    const totalStudents = 40476;
    const predictedRank = Math.round(totalStudents * (result2 / 100));

    setPredictedRank(predictedRank);
  };

  function FirstStep() {
    return (
      <>
        <div className="heading fs-4 fw-semibold">Select a Counselling</div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="col-4" style={{ width: "8rem" }}>
              <div
                className="card d-flex align-items-center justify-content-center"
                role="button"
                onClick={() => {
                  setStep("Second");
                }}
              >
                <img
                  src="/img/ACPC.png"
                  className="card-img-top pt-2"
                  style={{ width: "50%", objectFit: "contain" }}
                  alt="ACPC 2024"
                />
                <div className="card-body p-0 d-flex justify-content-center">
                  <div className="title pt-2 pb-2 fs-5">ACPC 2024</div>
                </div>
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
        <div className="">
          {/* Heading */}
          <div className="heading fs-3 fw-semibold text-center mb-4">
            Predict Your Rank
          </div>

          {/* Form */}
          <form>
            <div className="form-group row mb-4">
              <label
                htmlFor="sciencePercentile"
                className="col-sm-12 col-form-label fs-5 fw-semibold"
              >
                Enter your 12th Science Percentile:
              </label>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  id="sciencePercentile"
                  placeholder="Enter percentile"
                  value={sciencePercentile}
                  onChange={(e) => setSciencePercentile(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row mb-4">
              <label
                htmlFor="gujcetPercentile"
                className="col-sm-12 col-form-label fs-5 fw-semibold"
              >
                Enter your GUJCET Percentile:
              </label>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  id="gujcetPercentile"
                  placeholder="Enter percentile"
                  value={gujcetPercentile}
                  onChange={(e) => setGujcetPercentile(e.target.value)}
                />
              </div>
            </div>
          </form>

          {/* Predict Button */}
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="col-3 mt-5 d-flex justify-content-evenly">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={() => {
                    setStep("First");
                  }}
                >
                  Back
                </button>
                <button
                  onClick={handlePredict}
                  className="btn btn-success px-4"
                >
                  Predict Rank
                </button>
              </div>
            </div>
          </div>

          {/* Prediction Results */}
          {predictedRank !== null && (
            <div className="mt-4 p-3 bg-success p-2 text-dark bg-opacity-10 rounded text-center">
              <h3>Prediction Results</h3>
              <p className="mb-2 mt-4 text-danger">
                Please note that the predicted ranks are purely estimations
                based on current data and trends. They are not guaranteed, and
                your actual rank may be higher or lower. Always refer to
                official sources for your precise ranking.
              </p>
              <p className="fs-5 mt-5">
                <strong>Predicted Rank:</strong> {predictedRank}
              </p>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="college-predictor">
      <NavBar />
      <div className="bg row p-5 pb-4 container-fliud">
        <div className="col-5 m-auto">
          <span className="text-light fs-3 fw-bold col-12 ">
            College Predictor
          </span>
          <div className="fs-4 col-12 fw-semibold" style={{ color: "#d1d1d1" }}>
            Predict your Rank based on Counselling.
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
      <div className="container mt-5">
        <div className="border rounded">
          <div className="row">
            {/* Stepper (will be hidden on small screens) */}
            <div className="col-2 border-end d-flex justify-content-center d-none d-md-block">
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
                  <div className="step-title">Select a Counselling</div>
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
                  <div className="step-title">Predict Your Rank</div>
                </div>
              </div>
            </div>

            <div className="col-10 p-4">
              {step === "First" && FirstStep()}
              {step === "Second" && SecondStep()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RankPredictor;
