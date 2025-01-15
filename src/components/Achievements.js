import React from "react";
import "../styles.css";

function Achievements() {
  const achievements = [
    {
      title: "Secured 6th position in SunHacks Hackathon, Nashik (2023)",
      image: "https://cdn-icons-png.flaticon.com/512/2963/2963599.png",
    },
    {
      title: "Participated in INITHACKS Hackathon, Dhule (2023)",
      image: "https://cdn-icons-png.flaticon.com/512/2395/2395790.png", 
    },
    {
      title: "Attended Data to AI Workshop by Google at IIT Bombay",
      image: "https://cdn-icons-png.flaticon.com/512/2936/2936638.png", 
    },
    {
      title: "Completed Digital Productivity course by NIIT Foundation (2023)",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920311.png",
    },
    {
      title: "Division-level Volleyball player",
      image: "https://cdn-icons-png.flaticon.com/512/876/876768.png", 
    },
  ];

  return (
    <div className="achievements-gradient">
      <div className="container text-white py-5">
        <h2 className="text-center mb-4">Achievements</h2>
        <div className="row">
          {achievements.map((achievement, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card bg-dark text-white text-center h-100 shadow">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="card-img-top p-3"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text">{achievement.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
