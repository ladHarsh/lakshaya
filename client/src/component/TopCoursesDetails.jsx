import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const CourseDetails = ({ course }) => {
  return (
    <Card className="mb-4 shadow-sm" style={{ borderRadius: "15px" }}>
      <Card.Img
        variant="top"
        src={course.image}
        style={{
          height: "200px",
          objectFit: "cover",
          borderRadius: "15px 15px 0 0",
        }}
      />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <strong>Duration:</strong> {course.duration}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Eligibility:</strong> {course.eligibility}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Specializations:</strong>{" "}
            {course.specializations.join(", ")}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Career Opportunities:</strong> {course.career}
          </ListGroupItem>
        </ListGroup>
        <Button variant="primary" className="mt-3">
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseDetails;
