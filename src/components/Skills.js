import React from "react";
import "../styles.css"; 

function Skills() {
  const skills = [
    {
      name: "JavaScript",
      image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      name: "Python",
      image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
      name: "HTML",
      image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    },
    {
      name: "CSS",
      image: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    },
    {
      name: "SQL",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGT_pnMHJdps9fGjcDaFSqcfFxO2E7BQk4g&s",
    },
    {
      name: "React.js",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "Data Science Tools (Matplotlib)",
      image: "https://matplotlib.org/_static/logo2_compressed.svg",
    },
  ];

  return (
    <div className="skills-gradient">
      <div className="container text-white py-5">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card bg-dark text-white text-center h-100 shadow">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="card-img-top p-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
