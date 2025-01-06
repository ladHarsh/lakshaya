const HighlightsBox = ({ name, collegeData }) => {
  return (
    <div className="mt-4">
      {collegeData.map((college, index) => (
        <div className="rounded mt-3 mb-4" key={index}>
          <div className="mb-3 fs-4 fw-bold">
            {college.Name}&nbsp;{name}
          </div>
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th scope="col" style={{ width: "30%" }}>
                  Particulars
                </th>
                <th scope="col" style={{ width: "60%" }}>
                  Statistics
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries({
                Established: college.established,
                Location: college.loc,
                State: college.state,
                Campus: college.campus,
                Type: college.type,
                Motto: college.motto,
                President: college.president,
                Director: college.director,
                "Affiliated To": college.affiliatedTo,
                "Application Mode": college.applicationMode,
                "Admission Via": college.admissionVia,
                "Official Website": college.officialWebsite,
                "Highest Package": college.highestPackage,
                "Average Package": college.averagePackage,
              })
                .filter(([key, value]) => value) // Filter out null or undefined values
                .map(([key, value], idx) => (
                  <tr key={idx}>
                    <td className="text-capitalize fw-semibold">{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default HighlightsBox;
