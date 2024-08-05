import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Preloader from '../components/Preloader/preloader';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/day-01/introduction-to-cpp">
            Start Your Challenge Today
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('progressBar').style.width = `${scrolled}%`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout
      title={`Home`}
      description="30 days of CPP programming challenge is a step-by-step guide to learn CPP programming language in 30 days. Master the fundamental concepts of CPP Programming easily."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Preloader />
      {/* Inline Styles and Progress Bar Element */}
      <div>
        <style>
          {`
            #progressBar {
              position: fixed;
              top: 0;
              left: 0;
              width: 0%;
              height: 8px;
              background-color: #2b9b7f;
              z-index: 9999;
              transition: width 0.1s ease-out;
            }
          `}
        </style>
        <div id="progressBar"></div>
      </div>
    </Layout>
  );
}
