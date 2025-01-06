const FacultyBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college) => (
        <div className="faculty mt-3 mb-4" key={college._id}>
          {/* Check if content is available before rendering */}
          {college.content ? (
            <div className="">
              <div className="mb-3 fs-4 fw-bold">
                {college.Name}&nbsp;{name}
              </div>
              <div className="mb-2 fs-6">{college.content}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default FacultyBox;
