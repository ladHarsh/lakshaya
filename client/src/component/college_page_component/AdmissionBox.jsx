const AdmissionBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college) => (
        <div className="admission mt-3 mb-4">
          <div className="mb-3 fs-4 fw-bold">
            {college.Name}&nbsp;{name}
          </div>
          <div className="mb-2 fs-6">{college.admissionParagraph}</div>
          <div className="steps">
            <div className="mb-2 fs-5 fw-medium">How to Apply?</div>
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
        </div>
      ))}
    </>
  );
};

export default AdmissionBox;
