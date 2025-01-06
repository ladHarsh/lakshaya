import { CgMenuGridR } from "react-icons/cg";
import { BiSolidUpArrow } from "react-icons/bi";
const ExploreTools = () => {
  return (
    // Explore Tools
    <div className="explore-tools">
      <CgMenuGridR />
      <div className="dropdown-up-icon-tools">
        <BiSolidUpArrow />
      </div>
      {/* Tools */}
      <div className="tools-menu">
        {/* Rank Predictor */}
        <a className="tools text-dark" href="/rank_predictor">
          <img src="/img/ranking (2).png" />
          Rank Predictor
        </a>
        {/* College Predictor */}
        <a className="tools text-dark" href="/college_predictor">
          <img src="/img/college.png" />
          College Predictor
        </a>
        {/* College Comparer */}
        <a className="tools text-dark" href="/college_comparer">
          <img src="/img/comparer.png" />
          College Comparer
        </a>
        {/* Explore Scholarships */}
        <a className="tools text-dark" href="/scholarships">
          <img src="/img/scholarships.png" />
          Explore Scholarships
        </a>
      </div>
    </div>
  );
};

export default ExploreTools;
