const CollegeMap = ({ name }) => {
  // Ensure name is an array (or transform it into one if it's not)
  const colleges = Array.isArray(name) ? name : [name];

  return (
    <>
      {colleges.map((college, index) => {
        // Extract src from googleLocation safely
        const mapSrc =
          typeof college.googleLocation === "string"
            ? college.googleLocation.match(/src="([^"]*)"/)?.[1]
            : null;

        return (
          <div className="college-map mt-3" key={index}>
            <div className="heading fs-4 fw-semibold">
              Location of {college.Name || "College"}
            </div>
            <div className="mt-3">
              {mapSrc ? (
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="320px"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <p>No map available for this college.</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CollegeMap;
