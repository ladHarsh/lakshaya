// Login.js
import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import Profile from "./Profile";

const Login = () => {
  const [show, setShow] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(null); // State to store the user information

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Modal
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsSignUp(false);
    setValidated(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  // Toggle Between Sign In and Sign Up
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setValidated(false);
  };

  // Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        if (isSignUp) {
          // Sign Up API Call
          const res = await axios.post("http://localhost:7777/users/register", {
            name,
            email,
            password,
          });
          alert("Registration Successful");
          setUser({ name: res.data.user.name });
        } else {
          // Sign In API Call
          const res = await axios.post("http://localhost:7777/users/login", {
            email,
            password,
          });
          alert("Login Successful");
          setUser({ name: res.data.user.name });
          localStorage.setItem("token", res.data.token);
        }
        handleClose();
      } catch (err) {
        console.error(err.response.data.msg);
        alert(err.response.data.msg);
      }
    }
  };

  return (
    <>
      {user ? (
        <div className="d-flex align-items-center">
          <Profile User={user} setUser={setUser} />
        </div>
      ) : (
        <button
          variant="primary"
          className="btn fs-6 fw-semibold p-0 text-light"
          onClick={handleShow}
        >
          Sign In
        </button>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-primary bg-gradient">
          <Modal.Title>
            {isSignUp ? "Create Your Account" : "Login to Lakshaya"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {isSignUp && (
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-primary bg-gradient">
                    <FaUser />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-primary bg-gradient">
                  <FaEnvelope />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-primary bg-gradient">
                  <FaLock />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 bg-primary bg-gradient"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <Button variant="link" onClick={toggleSignUp} className="p-0">
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
