import Link from '@docusaurus/Link';
import React, { useState } from 'react';
<link rel="stylesheet" type="text/css" href="/css/custom.css"></link>

import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Chatbot from "../components/Chatbot/chatbot";
import Heading from "@theme/Heading";
import styles from "./index.module.css";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary")} style={{ display:'none' }}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title")}>
        </Heading>
      </div>
    </header>
  );
}

function App() {
  const { siteConfig } = useDocusaurusContext();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
     <Layout
      title="Home"
      description="30 days of CPP programming challenge is a step-by-step guide to learn CPP programming language in 30 days. Master the fundamental concepts of CPP Programming easily."
    >
      <HomepageHeader />
      <main style={{ position: 'relative' }}>
        <div className="form-container"> 
        <h2>Login</h2>
      <form>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordShown ? 'text' : 'password'}
            id="password"
            name="password"
            required
          ></input>
          <span><btn className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordShown ? 'Hide' : 'Show'}
          </btn>
          </span>
        </div>
        &nbsp;
        <div className="input-container">
          <button type="submit">Login</button>
          <p>Don't have an account yet? <Link to ="signup"> Sign Up</Link></p>
        </div>
      </form>
    </div>
        <Chatbot />
      </main>
    </Layout>
    </>
  );
}

export default App;
