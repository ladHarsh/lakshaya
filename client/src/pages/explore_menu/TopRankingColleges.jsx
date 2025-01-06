
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../component/TopColleges.css";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";

const colleges = [
  {
    name: "IIT Gandhinagar",
    location: "Gandhinagar, Gujarat",
    rank: 1,
    description:
      "IIT Gandhinagar is one of the premier institutes of technology in India. Known for its innovative curriculum and state-of-the-art research facilities, it offers a wide range of undergraduate and postgraduate programs.",
    imgUrl: "https://example.com/iit-gandhinagar.jpg",
    link: "https://iitgn.ac.in/",
  },
  {
    name: "DAIICT Gandhinagar",
    location: "Gandhinagar, Gujarat",
    rank: 2,
    description:
      "DAIICT is renowned for its cutting-edge research in information and communication technology. The institute boasts a strong faculty and an excellent placement record.",
    imgUrl: "public/img/DAIICT_logo.jpeg",
    link: "https://www.daiict.ac.in/",
  },
  {
    name: "SVNIT Surat",
    location: "Surat, Gujarat",
    rank: 3,
    description:
      "SVNIT is one of the NITs in India, offering a wide variety of engineering programs. The campus is known for its vibrant student life and strong emphasis on research.",
    imgUrl: "https://example.com/svnit.jpg",
    link: "http://www.svnit.ac.in/",
  },
  {
    name: "DDU Nadiad",
    location: "Nadiad, Gujarat",
    rank: 4,
    description:
      "Dharmsinh Desai University is a premier university known for its engineering programs. The institute provides quality education with a focus on practical knowledge.",
    imgUrl: "https://example.com/ddu.jpg",
    link: "https://www.ddu.ac.in/",
  },
  {
    name: "Nirma University",
    location: "Ahmedabad, Gujarat",
    rank: 5,
    description:
      "Nirma University is a leading private university offering a range of undergraduate, postgraduate, and doctoral programs in engineering and technology.",
    imgUrl: "https://example.com/nirma.jpg",
    link: "https://www.nirmauni.ac.in/",
  },
  {
    name: "LD College of Engineering",
    location: "Ahmedabad, Gujarat",
    rank: 6,
    description:
      "LDCE is one of the oldest engineering colleges in Gujarat. It offers a range of engineering disciplines and has a strong alumni network.",
    imgUrl: "https://example.com/ldce.jpg",
    link: "http://ldce.ac.in/",
  },
  {
    name: "GEC Gandhinagar",
    location: "Gandhinagar, Gujarat",
    rank: 7,
    description:
      "GEC Gandhinagar is known for its quality education in engineering. The college has excellent faculty and provides a conducive environment for learning.",
    imgUrl: "https://example.com/gec-gandhinagar.jpg",
    link: "http://www.gecg28.ac.in/",
  },
  {
    name: "VGEC Ahmedabad",
    location: "Ahmedabad, Gujarat",
    rank: 8,
    description:
      "VGEC is a government engineering college offering a variety of engineering programs. It has a good placement record and focuses on holistic development.",
    imgUrl: "https://example.com/vgec.jpg",
    link: "http://www.vgecg.ac.in/",
  },
];

const TopColleges = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h1 className="page-title">Top Ranking Colleges in Gujarat</h1>
          <p className="page-description">
            Explore the top engineering colleges in Gujarat, known for their
            academic excellence, research output, and student support services.
            Click on "Visit College" to learn more about each institution.
          </p>
        </div>
        {colleges.map((college, index) => (
          <div
            key={index}
            className="row mb-4 college-card animate__animated animate__fadeInUp"
          >
            <div className="col-md-4">
              <img
                src={college.imgUrl}
                alt={college.name}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-between">
              <div>
                <h2>{college.name}</h2>
                <p className="text-muted">{college.location}</p>
                <p className="font-weight-bold">Rank: {college.rank}</p>
                <p>{college.description}</p>
              </div>
              <div>
                <a
                  href={college.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit College
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TopColleges;
