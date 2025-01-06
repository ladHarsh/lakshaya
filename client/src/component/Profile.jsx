import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const Profile = ({ User, setUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("https://lakshaya-backend.onrender.com/profile")
      .then((profile) => setProfile(profile.data))
      .catch((err) => console.log(err));
  }, []);
  const findProfile = profile.filter((user) => user.name == User.name);

  return (
    <>
      {findProfile.map((item) => (
        <>
          <button
            class="btn fs-5 d-flex align-items-center"
            onClick={handleShow}
          >
            <h5 className="m-0 pe-2">{item.name}</h5>
            <div className="" style={{ width: "40px" }}>
              <img src="public/img/profile.png" />
            </div>
          </button>

          <Modal
            show={show}
            onHide={handleClose}
            animation={true} // Disable Bootstrap's built-in animation
            dialogClassName={`modal-right-slide ${show ? "show" : ""}`} // Apply the slide-in and fade-in effect
          >
            <Modal.Header closeButton className="rounded-0">
              <Modal.Title>Your Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0 mt-2">
              <div className="profile-content">
                <div className="profile-picture text-center mb-4">
                  <img
                    src="public/img/profile.png"
                    alt="Profile"
                    className="rounded-circle"
                  />
                </div>
                <h4 className="text-center">{item.name}</h4>
                <p className="text-center">{item.email}</p>
                <div class="accordion" id="accordionFlushExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Edit Profile
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item's accordion body.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Saved Colleges
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item's accordion body. Let's imagine this being filled
                        with some actual content.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Asked Questions
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  setUser(null);
                  localStorage.removeItem("token");
                }}
              >
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ))}
    </>
  );
};

export default Profile;
