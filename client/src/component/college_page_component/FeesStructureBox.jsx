const FeesStructureBox = ({ name, collegeData }) => {
  return (
    <>
      {collegeData.map((college) => (
        <div class="accordion mt-3" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed fs-5 fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {college.Name}&nbsp;{name}
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                DAIICT Gandhinagar fee has multiple components, out of which
                some are paid one-time while others are paid semester-wise. The
                components include tuition fee, caution deposit, hostel and mess
                charges, etc. Aspirants are required to pay this fee at the time
                of admission and then semester-wise. Candidates must note that
                this fee is sourced from the official website of the institute/
                sanctioning body. But is subject to change. Caution deposit is a
                refundable amount that is returned to the students after
                completion of the degree. Below is DAIICT Gandhinagar
                course-wise fee breakup:
              </div>
              <table class="table container table-bordered">
                <thead>
                  <tr className="text-center table-primary">
                    <th scope="col">program Name</th>
                    <th scope="col">One-Time Fee</th>
                    <th scope="col">Tuition Fee</th>
                    <th scope="col">Hostel Fee</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>{college.branchName_1}</td>
                    <td>{college.branchName_1_oneTimeFees}</td>
                    <td>{college.branchName_1_tuitionFees}</td>
                    <td>{college.branchName_1_hostelFees}</td>
                  </tr>
                  <tr>
                    <td>{college.branchName_2}</td>
                    <td>{college.branchName_2_oneTimeFees}</td>
                    <td>{college.branchName_2_tuitionFees}</td>
                    <td>{college.branchName_2_hostelFees}</td>
                  </tr>
                  <tr>
                    <td>{college.branchName_3}</td>
                    <td>{college.branchName_3_oneTimeFees}</td>
                    <td>{college.branchName_3_tuitionFees}</td>
                    <td>{college.branchName_3_hostelFees}</td>
                  </tr>
                  <tr>
                    <td>{college.branchName_4}</td>
                    <td>{college.branchName_4_oneTimeFees}</td>
                    <td>{college.branchName_4_tuitionFees}</td>
                    <td>{college.branchName_4_hostelFees}</td>
                  </tr>
                  <tr>
                    <td>{college.branchName_5}</td>
                    <td>{college.branchName_5_oneTimeFees}</td>
                    <td>{college.branchName_5_tuitionFees}</td>
                    <td>{college.branchName_5_hostelFees}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeesStructureBox;
