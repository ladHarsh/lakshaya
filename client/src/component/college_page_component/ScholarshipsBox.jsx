const ScholarshipsBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college) => (
        <div className="scholarships mt-3 mb-4" key={college.id}>
          <div className="mb-3 fs-4 fw-bold">
            {college.Name}&nbsp;{name}
          </div>
          <ul className="fs-6">
            {Object.keys(college)
              .filter(
                (key) =>
                  key.startsWith("scholarshiplistName_") &&
                  college[key] && // Check if the scholarship name exists
                  college[key.replace("Name", "Content")] // Ensure content exists
              )
              .map((key, index) => {
                const scholarshipName = college[key];
                const scholarshipContent =
                  college[key.replace("Name", "Content")];
                return (
                  <li className="mb-2" key={index}>
                    <strong>{scholarshipName}</strong> {scholarshipContent}
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ScholarshipsBox;
