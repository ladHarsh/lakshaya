import React from "react";
import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";

const specializations = [
  {
    title: "Aeronautical Engineering",
    description:
      "Aeronautical Engineering focuses on the design, development, and testing of aircraft and spacecraft. It involves studying aerodynamics, propulsion systems, and materials to ensure the safety and efficiency of flight.",
  },
  {
    title: "Automobile Engineering",
    description:
      "Automobile Engineering deals with the design, development, and manufacturing of vehicles. It encompasses various aspects such as engine technology, vehicle dynamics, and automotive electronics.",
  },
  {
    title: "Biotechnology Engineering",
    description:
      "Biotechnology Engineering involves the use of biological systems and organisms to develop technologies and products. It includes areas like genetic engineering, bioinformatics, and pharmaceutical development.",
  },
  {
    title: "Chemical Engineering",
    description:
      "Chemical Engineering focuses on converting raw materials into useful products through chemical processes. It covers areas such as reaction engineering, process design, and materials science.",
  },
  {
    title: "Civil Engineering",
    description:
      "Civil Engineering involves the design and construction of infrastructure such as roads, bridges, and buildings. It includes studying structural mechanics, materials science, and environmental engineering.",
  },
  {
    title: "Computer Science Engineering",
    description:
      "Computer Science Engineering covers the study of computer systems, programming, and software development. It includes areas such as algorithms, data structures, and artificial intelligence.",
  },
  {
    title: "Electrical Engineering",
    description:
      "Electrical Engineering focuses on electrical systems, electronics, and electromagnetism. It includes power generation, transmission, and the design of electrical circuits and devices.",
  },
  {
    title: "Mechanical Engineering",
    description:
      "Mechanical Engineering involves the design and manufacturing of mechanical systems and machines. It covers thermodynamics, fluid dynamics, and material science.",
  },
];

const TopSpecializations = () => {
  return (
    <>
      <NavBar />
      <div className="container specializations-page">
        <h1>Top Specializations in Engineering in Gujarat</h1>
        <p>
          Gujarat is home to numerous prestigious institutions offering a
          variety of engineering specializations. This page highlights some of
          the top specializations that are highly sought after by students in
          the state. Explore the details of these specializations to understand
          their scope and opportunities.
        </p>
        <div className="specializations-container">
          {specializations.map((spec, index) => (
            <div key={index} className="specialization-box">
              <h2>{spec.title}</h2>
              <p>{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopSpecializations;
