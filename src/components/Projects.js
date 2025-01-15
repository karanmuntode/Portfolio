import React from "react";
import { useSpring, animated } from "react-spring";

function Projects() {
  const projects = [
    {
      title: "React News Application",
      description:
        "Built a responsive news app using React and Bootstrap, integrating NewsAPI for real-time articles. Features include category-based filtering, pagination, and dynamic content rendering.",
      image: "/images/news.jpeg",
    },
    {
      title: "Internship Management Portal",
      description:
        "Designed a portal for managing internships using HTML, CSS, and JavaScript.",
      image: "/images/internship.avif",
    },
    {
      title: "Banking System Application",
      description:
        "Created a Python-based application to manage user accounts and transactions.",
      image: "/images/bank.webp",
    },
    {
      title: "BMI Calculator",
      description: "Developed a tool to calculate Body Mass Index using Python.",
      image: "/images/BMI-calculator.webp",
    },
    {
      title: "IoT-Driven Emergency Management System",
      description:
        "Built an IoT-based disaster detection system using IBM Watson Studio to train ML models. Detects floods and earthquakes and sends real-time alerts to users' phones.",
      image: "/images/emergency.webp",
    },
  ];

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeIn}>
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mt-auto">
                  <button className="btn btn-primary btn-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
}

export default Projects;
