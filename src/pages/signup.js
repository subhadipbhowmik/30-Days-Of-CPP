import React, { useEffect } from "react";

const SignUp = () => {
  <link rel="stylesheet" type="text/css" href="/css/custom.css"></link>;
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
      <h1 className="center">Sign Up</h1>
      <link rel="stylesheet" type="text/css" href="/css/custom.css" />
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
            ></input>
            <span>
              <btn
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {passwordShown ? "Hide" : "Show"}
              </btn>
            </span>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="text-color">
          Already have an account? <a href="/30-Days-Of-CPP/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
