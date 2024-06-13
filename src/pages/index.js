import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Chatbot from "../components/Chatbot/chatbot";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Contact from "../components/Contact/Contact";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.main_title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.sub_title)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Start your Challenge Today⏱️
          </Link>
        </div>
      </div>
      <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❄</div>
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
      <main style={{ position: "relative" }}>
        <HomepageFeatures />
        <Chatbot />
        <div id="contact">
          <Contact />
        </div>
      </main>
    </Layout>
  );
}
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.querySelector('.snowflakes');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = ['❅', '❆', '❄'][Math.floor(Math.random() * 3)];
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 and 5 seconds
        snowflake.style.fontSize = Math.random() * 1 + 1 + 'em'; // between 1em and 2em
        snowflake.style.opacity = Math.random();

        snowflakesContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000); // remove snowflake after 5 seconds
    }

    setInterval(createSnowflake, 200);
});
</script>
