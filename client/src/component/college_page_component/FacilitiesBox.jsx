const FacilitiesBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college) => (
        <div className="facilities mt-3 mb-4" key={college.id}>
          <div className="mb-3 fs-4 fw-bold">
            {college.Name}&nbsp;{name}
          </div>
          <ul className="fs-6">
            {Object.keys(college)
              .filter(
                (key) =>
                  key.startsWith("facilitiesName_") &&
                  college[key] && // Check if the facility name exists
                  college[key.replace("Name", "Content")] // Ensure content exists
              )
              .map((key, index) => {
                const facilityName = college[key];
                const facilityContent = college[key.replace("Name", "Content")];
                return (
                  <li className="mb-2" key={index}>
                    <strong>{facilityName}</strong> {facilityContent}
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FacilitiesBox;
