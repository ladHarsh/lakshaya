const CoursesAndEligibillityBox = ({ name, collegeData }) => {
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
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {college.Name}&nbsp;{name}
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="mb-2 fs-6">
                  DAIICT Gandhinagar offers a wide range of undergraduate and
                  postgraduate courses to the students. Candidates seeking
                  admission to DAIICT Gandhinagar courses are required to
                  fulfill the minimum eligibility criteria set by the college
                  for the desired course. The fee for all the courses offered
                  here ranges between INR 258,000 and INR 820,000. Find below
                  the list of all DAIICT Gandhinagar courses along with the fees
                  and eligibility details:
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr className="table-primary">
                      <th scope="col">Programmes</th>
                      <th scope="col">Courses</th>
                      <th scope="col">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Example for B.E. / B.Tech Programs */}
                    <tr>
                      <td>{college.branchName_1}</td>
                      <td>
                        <ul>
                          {college.branchName_1_coursesName_1 && (
                            <li>{college.branchName_1_coursesName_1}</li>
                          )}
                          {college.branchName_1_coursesName_2 && (
                            <li>{college.branchName_1_coursesName_2}</li>
                          )}
                          {college.branchName_1_coursesName_3 && (
                            <li>{college.branchName_1_coursesName_3}</li>
                          )}
                          {college.branchName_1_coursesName_4 && (
                            <li>{college.branchName_1_coursesName_4}</li>
                          )}
                          {college.branchName_1_coursesName_5 && (
                            <li>{college.branchName_1_coursesName_5}</li>
                          )}
                        </ul>
                      </td>
                      <td>{college.branchName_1_duration}</td>
                    </tr>
                    {/* M.E. / M.Tech Programs */}
                    <tr>
                      <td>{college.branchName_2}</td>
                      <td>
                        <ul>
                          {college.branchName_2_coursesName_1 && (
                            <li>{college.branchName_2_coursesName_1}</li>
                          )}
                          {college.branchName_2_coursesName_2 && (
                            <li>{college.branchName_2_coursesName_2}</li>
                          )}
                          {college.branchName_2_coursesName_3 && (
                            <li>{college.branchName_2_coursesName_3}</li>
                          )}
                          {college.branchName_2_coursesName_4 && (
                            <li>{college.branchName_2_coursesName_4}</li>
                          )}
                          {college.branchName_2_coursesName_5 && (
                            <li>{college.branchName_2_coursesName_5}</li>
                          )}
                        </ul>
                      </td>
                      <td>{college.branchName_2_duration}</td>
                    </tr>
                    {/* M.Sc Programs */}
                    <tr>
                      <td>{college.branchName_3}</td>
                      <td>
                        <ul>
                          {college.branchName_3_coursesName_1 && (
                            <li>{college.branchName_3_coursesName_1}</li>
                          )}
                          {college.branchName_3_coursesName_2 && (
                            <li>{college.branchName_3_coursesName_2}</li>
                          )}
                          {college.branchName_3_coursesName_3 && (
                            <li>{college.branchName_3_coursesName_3}</li>
                          )}
                        </ul>
                      </td>
                      <td>{college.branchName_3_duration}</td>
                    </tr>
                    {/* M.Des Programs */}
                    <tr>
                      <td>{college.branchName_4}</td>
                      <td>
                        <ul>
                          {college.branchName_4_coursesName_1 && (
                            <li>{college.branchName_4_coursesName_1}</li>
                          )}
                        </ul>
                      </td>
                      <td>{college.branchName_4_duration}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default CoursesAndEligibillityBox;
