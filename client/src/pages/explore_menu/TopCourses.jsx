import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseDetails from "../../component/TopCoursesDetails";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";

const CoursesPage = () => {
  const courses = [
    {
      title: "B.Tech/B.E",
      image: "https://via.placeholder.com/400x200",
      description:
        "Bachelor of Technology is a four-year undergraduate program focused on engineering and technology.",
      duration: "4 years",
      eligibility: "12th grade with PCM (Physics, Chemistry, Mathematics)",
      specializations: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
      ],
      career:
        "Software Engineer, Mechanical Engineer, Civil Engineer, Electrical Engineer",
    },
    {
      title: "M.Tech/M.E",
      image: "https://via.placeholder.com/400x200",
      description:
        "Master of Technology is a two-year postgraduate program that offers advanced knowledge in engineering.",
      duration: "2 years",
      eligibility: "B.Tech/B.E in relevant field",
      specializations: [
        "Computer Science",
        "VLSI Design",
        "Thermal Engineering",
        "Structural Engineering",
      ],
      career:
        "Project Manager, Research Scientist, Senior Engineer, Data Scientist",
    },
    {
      title: "Ph.D.",
      image: "https://via.placeholder.com/400x200",
      description:
        "Doctor of Philosophy is the highest academic degree in engineering and research-oriented fields.",
      duration: "3-5 years",
      eligibility: "M.Tech/M.E in relevant field",
      specializations: [
        "Robotics",
        "Nanotechnology",
        "Artificial Intelligence",
        "Environmental Engineering",
      ],
      career: "Research Scientist, Professor, R&D Engineer, Consultant",
    },
    {
      title: "Diploma in Engineering",
      image: "https://via.placeholder.com/400x200",
      description:
        "A technical diploma offering fundamental knowledge and practical skills in engineering.",
      duration: "3 years",
      eligibility: "10th grade",
      specializations: [
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Automobile Engineering",
      ],
      career: "Junior Engineer, Technician, Maintenance Engineer, Supervisor",
    },
    {
      title: "MCA",
      image: "https://via.placeholder.com/400x200",
      description:
        "Master of Computer Applications is a three-year postgraduate degree focused on computer applications.",
      duration: "3 years",
      eligibility: "BCA/B.Sc. in Computer Science or IT",
      specializations: [
        "Software Development",
        "Systems Management",
        "Networking",
        "Data Science",
      ],
      career:
        "Software Developer, System Analyst, Network Administrator, Data Analyst",
    },
  ];

  return (
    <>
      <NavBar />
      <Container className="page-container mt-5">
        <h2 className="page-title text-center">Popular Courses</h2>
        <p className="page-description">
          Explore detailed information about various popular courses offered in
          engineering and technology. These courses provide a strong foundation
          and excellent career opportunities in diverse fields of study.
        </p>
        <Row className="mt-3">
          {courses.map((course, index) => (
            <Col md={6} lg={4} key={index}>
              <CourseDetails course={course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CoursesPage;
