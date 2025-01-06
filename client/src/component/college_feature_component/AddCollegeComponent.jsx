import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddCollegeComponent = ({
  colleges,
  selectedColleges,
  setSelectedColleges,
  handleComparer,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSecond, setShowModalSecond] = useState(false);
  const [showPartition, setShowPartition] = useState(true); // State to control partition visibility
  const [addedCollegeFirst, setAddedCollegeFirst] = useState(null);
  const [addedCollegeSecond, setAddedCollegeSecond] = useState(null);

  const handleAddCollege = (college, setAddedCollege) => {
    if (selectedColleges.includes(college._id)) {
      setSelectedColleges(
        selectedColleges.filter((collegeId) => collegeId !== college._id)
      );
      setAddedCollege(null); // Remove added college display
    } else if (selectedColleges.length < 2) {
      setSelectedColleges([...selectedColleges, college._id]);
      setAddedCollege(college); // Display the added college
    } else {
      alert("You can only compare two colleges at a time.");
    }
  };

  const handleClosePartition = () => {
    setShowPartition(false); // Hide the partition
  };

  const handleCompareAndClose = () => {
    handleComparer();
    setShowModal(false);
    setShowModalSecond(false); // Close both modals after comparison
  };

  return (
    <div className="row">
      {/* Conditional Rendering for the First Partition */}
      {showPartition && (
        <div className="col-12 border-end">
          <div className="row">
            <div className="col-12 d-flex justify-content-center pt-5 pb-5">
              <div
                className="bg-body-tertiary rounded"
                style={{ width: "18rem" }}
                onClick={() => setShowModal(true)}
              >
                <div className="text-center pt-5 pb-5 b-block">
                  <IoMdAddCircleOutline style={{ fontSize: "50px" }} />
                  <span className="fs-3 mt-2">Add College</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals for both sections */}
      {showModal && (
        <Modal
          colleges={colleges}
          selectedColleges={selectedColleges}
          setAddedCollege={setAddedCollegeFirst}
          handleAddCollege={handleAddCollege}
          setShowModal={setShowModal}
          handleClosePartition={handleClosePartition} // Pass the function to the modal
        />
      )}

      {showModalSecond && (
        <Modal
          colleges={colleges}
          selectedColleges={selectedColleges}
          setAddedCollege={setAddedCollegeSecond}
          handleAddCollege={handleAddCollege}
          setShowModal={setShowModalSecond}
        />
      )}
    </div>
  );
};

const Modal = ({
  colleges,
  selectedColleges,
  setAddedCollege,
  handleAddCollege,
  setShowModal,
  handleClosePartition,
}) => (
  <div
    className="modal show d-block"
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-secondary fw-bold">
          <h5 className="modal-title">Select a College</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setShowModal(false);
              handleClosePartition(); // Hide the partition when closing
            }}
          ></button>
        </div>
        <div className="modal-body">
          <ul className="list-group">
            {colleges.map((college, index) => (
              <li key={index} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <span>{college.Name}</span>
                  <button
                    className={`btn btn-sm ${
                      selectedColleges.includes(college._id)
                        ? "btn-danger"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => handleAddCollege(college, setAddedCollege)}
                  >
                    {selectedColleges.includes(college._id) ? "Remove" : "Add"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setShowModal(false);
              handleClosePartition(); // Hide the partition when closing
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AddCollegeComponent;
