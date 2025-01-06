const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="/img/home_page_college_image.jpeg"
            className="d-block w-100"
            alt="Drs. Kiran and Pallavi Patel Global University, Vadodara"
          />
          <div className="carousel-caption d-none d-md-block">
            <p>Drs. Kiran and Pallavi Patel Global University, Vadodara</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="/img/home_page_college_image_1 (2).jpg"
            className="d-block w-100"
            alt="Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar"
          />
          <div className="carousel-caption d-none d-md-block">
            <p>
              Dhirubhai Ambani Institute of Information and Communication
              Technology, Gandhinagar
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="/img/home_page_college_image_3.jpg"
            className="d-block w-100"
            alt="Pandit Deendayal Energy University, Gandhinagar"
          />
          <div className="carousel-caption d-none d-md-block">
            <p>Pandit Deendayal Energy University, Gandhinagar</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
