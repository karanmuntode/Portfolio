import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let errors = {};

    if (!email) {
      valid = false;
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = "Email is invalid.";
    }

    if (!password) {
      valid = false;
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      valid = false;
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);

    if (valid) {
      alert("Login successful!");
    }
  };

  return (
    <div className="login-gradient">
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 56px)" }}>
        <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
