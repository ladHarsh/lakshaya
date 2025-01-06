import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";

const ExamDetails = () => {
  const exams = [
    {
      title: "GUJCET",
      description:
        "The Gujarat Common Entrance Test (GUJCET) is conducted by the Gujarat Secondary and Higher Secondary Education Board (GSHSEB) for admission to engineering and pharmacy programs in Gujarat.",
      eligibility: "10+2 with Physics, Mathematics, and Chemistry/Biology.",
      examPattern:
        "Objective type questions from Physics, Chemistry, and Mathematics/Biology.",
      website: "https://gujcet.gseb.org/",
    },
    {
      title: "GATE",
      description:
        "The Graduate Aptitude Test in Engineering (GATE) is an entrance exam for postgraduate engineering programs and public sector jobs across India.",
      eligibility:
        "Bachelor's degree in Engineering/Technology/Architecture or Master's degree in a relevant science subject.",
      examPattern:
        "Objective type questions, including multiple choice questions (MCQs) and numerical answer questions.",
      website: "https://gate.iitk.ac.in/",
    },
    {
      title: "JEE Mains",
      description:
        "The Joint Entrance Examination (JEE) Main is an entrance test for undergraduate engineering programs in various colleges across India, including Gujarat.",
      eligibility: "10+2 with Physics, Mathematics, and Chemistry.",
      examPattern:
        "Objective type questions from Physics, Chemistry, and Mathematics.",
      website: "https://jeemain.nta.nic.in/",
    },
    {
      title: "JEE Advance",
      description:
        "JEE Advanced is an entrance exam for admission to IITs and other top engineering institutes in India. It follows JEE Main.",
      eligibility: "Qualify JEE Main and be among the top candidates.",
      examPattern:
        "Objective type questions from Physics, Chemistry, and Mathematics, with a higher difficulty level than JEE Main.",
      website: "https://jeeadv.ac.in/",
    },
  ];

  return (
    <>
      <NavBar />
      <Container className="my-5">
        <div className="intro-card mb-4">
          <Card.Body>
            <Card.Title className="text-center text-primary">
              Engineering Entrance Exams in Gujarat
            </Card.Title>
            <Card.Text>
              Welcome to our comprehensive guide on engineering entrance exams
              for students aiming to pursue engineering courses in Gujarat.
              Here, you'll find detailed information about key exams including
              GUJCET, GATE, JEE Mains, and JEE Advanced. This page aims to
              provide you with all the essential details to help you prepare and
              make informed decisions about your engineering education.
            </Card.Text>
          </Card.Body>
        </div>
        <Row>
          {exams.map((exam, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="exam-card">
                <Card.Header className="bg-primary text-white">
                  <h4>{exam.title}</h4>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <strong>Description:</strong> {exam.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Eligibility:</strong> {exam.eligibility}
                  </Card.Text>
                  <Card.Text>
                    <strong>Exam Pattern:</strong> {exam.examPattern}
                  </Card.Text>
                  <Card.Text>
                    <strong>Website:</strong>{" "}
                    <a
                      href={exam.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exam.website}
                    </a>
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={exam.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Visit Website
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ExamDetails;
