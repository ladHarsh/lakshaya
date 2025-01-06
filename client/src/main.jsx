import { React } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CollegePage from "./pages/CollegePage.jsx";
import TopRankingColleges from "./pages/explore_menu/TopRankingColleges.jsx";
import TopSpecializations from "./pages/explore_menu/TopSpecializations.jsx";
import Scholarships from "./pages/college_features/ExploreScholarships.jsx";
import RankPredictor from "./pages/college_features/RankPredictor.jsx";
import CollegeComparer from "./pages/college_features/CollegeComparer.jsx";
import CollegePredictor from "./pages/college_features/CollegePredictor.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Admin from "./pages/Admin.jsx";
import TopExam from "./pages/explore_menu/TopExam.jsx";
import TopCourses from "./pages/explore_menu/TopCourses.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "college/:id",
    element: <CollegePage />,
  },
  {
    path: "top_ranking_colleges",
    element: <TopRankingColleges />,
  },
  {
    path: "top_specializations",
    element: <TopSpecializations />,
  },
  {
    path: "top_courses",
    element: <TopCourses />,
  },
  {
    path: "top_exam",
    element: <TopExam />,
  },
  {
    path: "scholarships",
    element: <Scholarships />,
  },
  {
    path: "rank_predictor",
    element: <RankPredictor />,
  },
  {
    path: "college_comparer",
    element: <CollegeComparer />,
  },
  {
    path: "college_predictor",
    element: <CollegePredictor />,
  },
  {
    path: "aboutUs",
    element: <AboutUs />,
  },
  {
    path: "Admin",
    element: <Admin />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
