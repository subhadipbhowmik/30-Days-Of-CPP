import clsx from "clsx";
import Link from "@docusaurus/Link";
import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Chatbot from "../components/Chatbot/chatbot";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import DailyTips from "../components/DailyTips/DailyTips"; 

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.main_title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.sub_title)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Start your Challenge Today⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="30 days of CPP programming challenge is a step-by-step guide to learn CPP programming language in 30 days. Master the fundamental concepts of CPP Programming easily."
    >
      <HomepageHeader />
      <main style={{ position: 'relative' }}>
        <DailyTips /> 
        <HomepageFeatures />
        <Chatbot />
      </main>
    </Layout>
  );
}
