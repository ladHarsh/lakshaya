import { FaAngleRight } from "react-icons/fa";
const AsideBar = () => {
  return (
    <div className="asidebar ps-2 pe-2 mt-4">
      <ul class="list-group">
        <li class="list-group-item text-start fs-4 fw-semibold">
          Students Also Visited
        </li>
        <li class="list-group-item" role="button">
          <div className="row">
            <div className="col-2 d-flex align-items-center">
              <div className="d-flex justify-content-center">
                <img src="/img/DAIICT_logo.jpeg" />
              </div>
            </div>
            <div className="col-8">
              <span className="text-overflow">
                Dhirubhai Ambani Institute of Information and Communication
                Technology
              </span>
              <div className="row">
                <div className="col-12 text-secondary">Gandhi Nagar</div>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <span className="bg-primary-subtle p-1">8.2/10</span>
            </div>
          </div>
        </li>
        <li class="list-group-item" role="button">
          <div className="row">
            <div className="col-2 d-flex align-items-center">
              <div className="d-flex justify-content-center">
                <img src="/img/DAIICT_logo.jpeg" />
              </div>
            </div>
            <div className="col-8">
              <span className="text-overflow">
                Dhirubhai Ambani Institute of Information and Communication
                Technology
              </span>
              <div className="row">
                <div className="col-12 text-secondary">Gandhi Nagar</div>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <span className="bg-primary-subtle p-1">8.2/10</span>
            </div>
          </div>
        </li>
        <li class="list-group-item" role="button">
          <div className="row">
            <div className="col-2 d-flex align-items-center">
              <div className="d-flex justify-content-center">
                <img src="/img/DAIICT_logo.jpeg" />
              </div>
            </div>
            <div className="col-8">
              <span className="text-overflow">
                Dhirubhai Ambani Institute of Information and Communication
                Technology
              </span>
              <div className="row">
                <div className="col-12 text-secondary">Gandhi Nagar</div>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <span className="bg-primary-subtle p-1">8.2/10</span>
            </div>
          </div>
        </li>
        <li class="list-group-item" role="button">
          <div className="row">
            <div className="col-2 d-flex align-items-center">
              <div className="d-flex justify-content-center">
                <img src="/img/DAIICT_logo.jpeg" />
              </div>
            </div>
            <div className="col-8">
              <span className="text-overflow">
                Dhirubhai Ambani Institute of Information and Communication
                Technology
              </span>
              <div className="row">
                <div className="col-12 text-secondary">Gandhi Nagar</div>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <span className="bg-primary-subtle p-1">8.2/10</span>
            </div>
          </div>
        </li>
      </ul>

      <ul class="list-group mt-4">
        <li class="list-group-item text-start fs-4 fw-semibold">Top Courses</li>
        <li class="list-group-item" role="button">
          <div className="row">
            <div className="col-8 fs-5">M.Sc. Information Technology</div>
            <div className="col-3 text-end d-flex align-items-center">
              <span className="bg-primary-subtle ps-1 pe-1">2 Years</span>
            </div>
            <div className="col-1 d-flex align-items-center">
              <FaAngleRight className="fs-5" />
            </div>
          </div>
        </li>
        <li class="list-group-item" role="button">
          <div className="row">
            <div className="col-8 fs-5">M.Sc. Information Technology</div>
            <div className="col-3 text-end d-flex align-items-center">
              <span className="bg-primary-subtle ps-1 pe-1">2 Years</span>
            </div>
            <div className="col-1 d-flex align-items-center">
              <FaAngleRight className="fs-5" />
            </div>
          </div>
        </li>
        <li class="list-group-item" role="button">
          <div className="row">
            <div className="col-8 fs-5">M.Sc. Information Technology</div>
            <div className="col-3 text-end d-flex align-items-center">
              <span className="bg-primary-subtle ps-1 pe-1">2 Years</span>
            </div>
            <div className="col-1 d-flex align-items-center">
              <FaAngleRight className="fs-5" />
            </div>
          </div>
        </li>
        <li class="list-group-item" role="button">
          <div className="row">
            <div className="col-8 fs-5">M.Sc. Information Technology</div>
            <div className="col-3 text-end d-flex align-items-center">
              <span className="bg-primary-subtle ps-1 pe-1">2 Years</span>
            </div>
            <div className="col-1 d-flex align-items-center">
              <FaAngleRight className="fs-5" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AsideBar;
