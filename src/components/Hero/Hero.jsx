import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Unnati Bhalekar</h1>
        <p className={styles.description}>
          Full-stack Developer
        </p>
        <a 
          href="/Full Time Resume.pdf"  // Linking to your resume file
          className={styles.contactBtn}
          target="_blank" // Opening the resume in a new tab
          rel="noopener noreferrer" // For security reasons when using target="_blank"
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage (1).png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
