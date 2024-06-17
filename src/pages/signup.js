import React, { useState, useEffect } from "react";
import Link from '@docusaurus/Link';
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary")} style={{ display: 'none' }}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title")}>
        </Heading>
      </div>
    </header>
  );
}
const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    const form = document.getElementById("signupForm");
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const username = event.target.username.value;
      const email = event.target.email.value;
      const password = event.target.password.value;

      try {
        const response = await fetch("http://localhost:5000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          window.location.href = "/30-Days-Of-CPP/";
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    });
  }, []);

  return (
    <div>
      <Layout
        title="Home"
        description="30 days of CPP programming challenge is a step-by-step guide to learn CPP programming language in 30 days. Master the fundamental concepts of CPP Programming easily."
      >
        <HomepageHeader />
        <h1 className="center">Sign Up</h1>
        <link rel="stylesheet" type="text/css" href="/css/custom.css" /> {/* Move this to index.html or App.js */}
        <div className="form-container">
          <form id="signupForm">
            <div className="input-container">
              <label htmlFor="Username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <span>
                <button
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                  type="button" // Specify type="button" for toggle button
                >
                  {passwordShown ? "Hide" : "Show"}
                </button>
              </span>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p className="text-color">
            Already have an account? <a href="/30-Days-Of-CPP/login">Log In</a>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default SignUp;
