const OverviewBox = ({ name }) => {
  return (
    <>
      {name.map((college) => (
        <div className="mt-3">
          <div className="fs-2 fw-semibold">{college.Name} Overview</div>
          <div>{college.overview}</div>
          <div className="mt-2">
            <ul>
              {Object.keys(college)
                .filter(
                  (key) => key.startsWith("overviewList_") && college[key]
                ) // Check for keys starting with "overviewList_" and ensure they exist
                .map((key, index) => (
                  <li key={index}>{college[key]}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverviewBox;
