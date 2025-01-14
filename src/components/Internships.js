import React from "react";
import "../styles.css"; // Ensure custom styles are imported

function Internships() {
  const internships = [
    {
      title: "AI-ML Internship - AICTE EduSkills",
      description:
        "10-week virtual internship focusing on data preprocessing, model building, and evaluation.",
      skills: ["Python", "Pandas", "Machine Learning", "Data Visualization"],
      image: "https://cdn-icons-png.flaticon.com/512/3004/3004147.png", // AI/ML Icon
    },
    {
      title: "AWS Data Engineering - AICTE EduSkills",
      description:
        "Hands-on experience with AWS services such as EC2, S3, VPC, and IAM.",
      skills: ["AWS EC2", "S3", "IAM", "VPC"],
      image: "https://cdn-icons-png.flaticon.com/512/873/873120.png", // Cloud Icon
    },
    {
      title: "Web Development - Cognifyz",
      description: "Online internship focused on web development concepts.",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // Web Development Icon
    },
    {
      title: "PCB Design - Techno Spark",
      description: "Learned PCB design basics and advanced concepts.",
      skills: ["PCB Design", "Schematic Creation", "Signal Routing"],
      image: "https://cdn-icons-png.flaticon.com/512/679/679690.png", // PCB Design Icon
    },
  ];

  return (
    <div className="internships-gradient">
      <div className="container text-white py-5">
        <h2 className="text-center mb-4">Internships</h2>
        <div className="row">
          {internships.map((internship, index) => (
            <div className="col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card bg-dark text-white shadow">
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="card-img-top p-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{internship.title}</h5>
                  <p className="card-text">{internship.description}</p>
                  <p className="card-text">
                    <strong>Skills Learned:</strong> {internship.skills.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Internships;
