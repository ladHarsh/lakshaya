const RecruitersBox = ({ name, collegeData }) => {
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <>
      {collegeData.map((college, index) => {
        const recruiterChunks = chunkArray(college.recruiters, 3); // Group recruiters into rows of 3
        return (
          <div className="mt-3" key={index}>
            <div className="mb-3 fs-4 fw-bold">
              {college.Name}&nbsp;{name}
            </div>
            <table className="table table-bordered">
              <thead>
                <tr className="text-center table-primary">
                  <th colSpan="3">{college.Name}&nbsp;Top Recruiters</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {recruiterChunks.map((chunk, rowIndex) => (
                  <tr key={rowIndex}>
                    {chunk.map((recruiter, colIndex) => (
                      <td key={colIndex}>{recruiter}</td>
                    ))}
                    {/* Add "-" symbol for empty cells in the last row */}
                    {chunk.length < 3 &&
                      Array.from({ length: 3 - chunk.length }).map((_, i) => (
                        <td key={`empty-${i}`}>-</td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default RecruitersBox;
