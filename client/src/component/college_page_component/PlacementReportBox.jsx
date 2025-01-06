const PlacementReportBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college) => (
        <div className="mt-3">
          <div className="mb-3 fs-4 fw-bold">
            {college.Name}&nbsp;{name}
          </div>
          <div className="mb-2 fs-6">{college.palcementParagraph}</div>
          <div className="container">
            <table class="table table-bordered">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Particulars</th>
                  <th scope="col">Placement Statistics (2024)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Highest Package</td>
                  <td>{college.highestPackage}</td>
                </tr>
                <tr>
                  <td>Average Package</td>
                  <td>{college.averagePackage}</td>
                </tr>
                <tr>
                  <td>Number Of Student Palce</td>
                  <td>{college.numberOfPalce}</td>
                </tr>
                <tr>
                  <td>Number Of Offers</td>
                  <td>{college.offers}</td>
                </tr>
                <tr>
                  <td>Median Package 2023</td>
                  <td>{college.medianPackage2023}</td>
                </tr>
                <tr>
                  <td>Number Of Companies Visited</td>
                  <td>{college.noOfCompaniesVisited}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};
export default PlacementReportBox;
