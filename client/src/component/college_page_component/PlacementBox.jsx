const PlacementBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college, index) => (
        <div className="placement mt-4 mb-4" key={index}>
          <div className="mb-3 fs-4 fw-bold">
            {college.Name}&nbsp;{name}
          </div>
          <div className="mb-2 fs-6 text-muted">
            {college.placementParagraph}
          </div>
          <table className="table table-bordered shadow-sm">
            <thead>
              <tr className="table-secondary">
                <th scope="col">Particular</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries({
                "Highest Package": college.highestPackage,
                "Average Package": college.averagePackage,
                "Number of Placements": college.numberOfPlace,
                Offers: college.offers,
                "Median Package (2023)": college.medianPackage2023,
                "Number of Companies Visited": college.noOfCompaniesVisited,
              })
                .filter(([key, value]) => value) // Check if the value is not null or undefined
                .map(([key, value], idx) => (
                  <tr key={idx}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="recruiters mt-4 mb-4" key={index}>
            <table className="table table-bordered shadow-sm">
              <thead>
                <tr className="text-center table-secondary">
                  <th scope="col" colspan="3">
                    Recruiter
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {college.recruiters &&
                  college.recruiters.length > 0 &&
                  Array.from({
                    length: Math.ceil(college.recruiters.length / 3),
                  }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                      {Array.from({ length: 3 }).map((_, colIndex) => {
                        const recruiter =
                          college.recruiters[rowIndex * 3 + colIndex];
                        return (
                          <td key={colIndex}>
                            {recruiter ? recruiter : "—"}{" "}
                            {/* Display '—' for empty slots */}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlacementBox;
