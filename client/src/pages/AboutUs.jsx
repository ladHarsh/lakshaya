import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

const AboutUs = () => {
  document.addEventListener("scroll", function () {
    const teamSection = document.getElementById("team-section");
    const teamCards = document.querySelectorAll(".team-card");
    const windowHeight = window.innerHeight;
    const teamSectionTop = teamSection.getBoundingClientRect().top;

    if (teamSectionTop < windowHeight - 100) {
      teamCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate");
        }, index * 200);
      });
    }
  });

  return (
    <>
      <NavBar />
      <div>
        {/* About Section */}
        <section className="container-fluid-about">
          <div className="container about-container">
            <h2 className="section-heading text-highlight">About Us</h2>
            <p>
              Welcome to Lakshaya, a comprehensive research-based platform
              dedicated to providing in-depth information about colleges in
              Gujarat. Our goal is to empower students and parents with detailed
              insights into various institutions, covering every aspect from
              courses offered to campus facilities. We also provide valuable
              information on scholarships to help students find the financial
              support they need. To further assist in making informed decisions,
              our platform features advanced tools like the Rank Predictor and
              College Predictor, allowing users to assess their chances of
              admission based on their academic performance and preferences. At
              Lakshaya, we are committed to guiding you through every step of
              your educational journey in Gujarat.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section id="team-section" className="container-fluid-about">
          <div className="container team-container">
            <h2 className="section-heading">Meet to Devloper</h2>
            <div className="row text-center">
              <div className="col-12 d-flex align-items-center">
                <div className="row w-100">
                  {/* Image */}
                  <div className="col-12 col-md-6 text-center text-md-end">
                    <img
                      src="img/Harsh.jpg"
                      className="mx-auto d-block"
                      alt="Harsh lad"
                      style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "20%",
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div className="col-12 col-md-6 text-md-start mt-3 mt-md-0">
                    <h5>Harsh Lad</h5>
                    <p>Full Stack Developer</p>
                    <p>
                      I am a dedicated student pursuing a degree in Computer
                      Science and Engineering at KPGU Vadodara. With a strong
                      passion for technology, I am focused on developing my
                      skills in programming, problem-solving, and software
                      development. I aim to leverage my academic knowledge to
                      contribute to innovative solutions and make a meaningful
                      impact in the tech industry.
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start mt-3">
                      <a
                        href="https://github.com/ladHarsh" // Replace with your GitHub URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark me-3"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/harsh-lad-824b942a1/" // Replace with your LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container-fluid-about">
          <div className="container mission-container">
            <h2 className="section-heading text-light">Our Mission</h2>
            <p>
              At Lakshaya, our mission is to be the most reliable and
              comprehensive resource for students seeking higher education
              opportunities in Gujarat. We strive to empower students with the
              knowledge and tools necessary to make informed decisions about
              their academic futures. By providing detailed information on
              colleges, up-to-date scholarship opportunities, and innovative
              features like Rank Predictor and College Predictor, we aim to
              simplify the college selection process and help students achieve
              their educational aspirations. Our commitment is to guide every
              student toward the best possible academic pathway, ensuring they
              have access to the resources they need to succeed.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
