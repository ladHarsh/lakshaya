const ApplicationProcessBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college) => (
        <div className="steps">
          <div className="mb-3 fs-4 fw-bold mt-3">How to Apply?</div>
          <ul className="ps-0">
            {Object.entries({
              Step_1: college.step_1,
              Step_2: college.step_2,
              Step_3: college.step_3,
              Step_4: college.step_4,
              Step_5: college.step_5,
              Step_6: college.step_6,
            })
              .filter(([key, value]) => value) // Check if the step exists
              .map(([key, value], idx) => (
                <li key={idx} className="list-group-item">
                  <span className="fw-bold">{key.replace("_", " ")}:</span>{" "}
                  {value}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
};
export default ApplicationProcessBox;
