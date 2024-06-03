import React from 'react';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scrollToTop}>
      <button onClick={scrollToTop} className={styles.button}>
        ↑
      </button>
    </div>
  );
};

export default ScrollToTopButton;
