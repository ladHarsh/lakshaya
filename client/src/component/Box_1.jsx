const Box_1 = () => {
  const professions = [
    { name: "Engineer", imgSrc: "/img/icons8-engineer-94.png" },
    { name: "Designer", imgSrc: "/img/icons8-designer-96.png" },
    { name: "Scientist", imgSrc: "/img/icons8-scientist-96.png" },
    { name: "Doctor", imgSrc: "/img/icons8-doctor-96.png" },
  ];

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#f8f9fa", // Light gray background color
      }}
    >
      <div className="container">
        <div className="row text-center">
          {professions.map((profession, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-6 mb-4" // Ensures 2 images per row on smaller screens
            >
              <div className="info p-3 bg-white shadow-sm rounded">
                <div className="icon mx-auto mb-3">
                  <img
                    src={profession.imgSrc}
                    alt={`${profession.name} Icon`}
                    className="img-fluid"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
                <h5 className="mt-2">{profession.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Box_1;
