import React, { useRef } from "react";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const SimilarCollegeBox = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="similar-college border rounded mt-5 bg-light-subtle">
      <div className="heading fs-3 fw-semibold text-center mt-3">
        Similar Colleges to Visit
      </div>
      <div className="row d-flex align-items-center mt-3">
        <div className="col-1">
          <button
            className="border rounded-circle me-2 d-flex justify-content-center ms-3 p-2"
            onClick={scrollLeft}
          >
            <GrCaretPrevious />
          </button>
        </div>
        <div className="col-10">
          <div
            className="scrollable-container web-scoller w-100 mb-3"
            ref={scrollContainerRef}
          >
            <div className="scrollable-content d-flex ">
              <div className="scroll-item bg-light m-2 mb-4">
                <div
                  className="similar-college-box border rounded bg-white"
                  style={{ width: "18rem" }}
                >
                  <div className="scb-image d-flex justify-content-center border-bottom ">
                    <img
                      src="/img/DAIICT_logo.jpeg"
                      className="pt-2 pb-2"
                      style={{ maxHeight: "120px" }}
                    />
                  </div>
                  <div className="scb-body p-2">
                    <div className="scb-title fw-semibold text-wrap fs-5">
                      Dhirubhai Ambani Institute of Information and
                      Communication Technology
                    </div>
                    <div className="scb-loc d-flex align-items-baseline">
                      <FaLocationDot />
                      <span className="ps-1 fw-normal">Gandhi Nagar</span>
                    </div>
                    <div className="row mt-3 ">
                      <div className="col-6 scb-fees-title ">
                        <span className="fw-semibold">Total Fess</span>
                        <div className="scb-fess fs-4 fw-normal">9.8 L</div>
                      </div>
                      <div className="col-6 mt-4">
                        <div className="scb-rating fs-5 fw-normal d-flex align-items-center">
                          <FaStar style={{ color: "#e8be41" }} />

                          <span className="ps-2">8.2/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-primary w-100 visit-btn"
                  >
                    Visit Now
                  </button>
                </div>
              </div>
            </div>
            <div className="scroll-item bg-light  m-2"></div>
            <div className="scroll-item bg-light  m-2"></div>
            <div className="scroll-item bg-light  m-2"></div>
          </div>
        </div>
        <div className="col-1">
          <button
            className="border rounded-circle me-2 d-flex justify-content-center p-2"
            onClick={scrollRight}
          >
            <GrCaretNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimilarCollegeBox;
