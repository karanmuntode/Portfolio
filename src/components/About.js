import React from "react";
import "../styles.css"; // Ensure styles are imported

function About() {
  return (
    <div className="about-gradient">
      <div className="container about-container">
        <div className="row align-items-center">
          {/* Photo Section */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/images/Karan.jpg" // Replace with your image path
              alt="Your Name"
              className="img-fluid rounded-circle shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>
          {/* Info Section */}
          <div className="col-md-8 text-center text-md-left">
            <h1>About Me</h1>
            <p>
              Hello! I'm a passionate software developer with a keen interest in
              building scalable and innovative solutions. I specialize in
              full-stack development and have a strong foundation in data
              structures, algorithms, and design patterns.
            </p>
            <p>
              <strong>Mobile:</strong> 7262805075
            </p>
            <p>
              <strong>Email:</strong> karanmuntode510@gmail.com
            </p>
            <div className="mt-3">
              <a
                href="https://www.linkedin.com/in/karan-muntode-5672b6240/"
                className="btn btn-outline-light me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/karanmuntode"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
  href="/Karan Resume.pdf" // Correct path inside the public folder
  className="btn btn-primary ms-2"
  download
>
  Download Resume
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
