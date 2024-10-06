import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.briefcase} src={getImageUrl("about/icons8-briefcase-50.png")} alt="Briefcase icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.expText}>Experience</h3>
              <p>
                2+ years <br></br>Full-Stack Development
              </p>
              <p>
                
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.cap} src={getImageUrl("about/input-onlinepngtools.png")} alt="Graduation icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
              M.Sc. Computing Secure Software Engineering(current)<br></br>
              B.E. Computer Engineering
              </p>
            </div>
          </li>
        </ul>
      </div>
      <p className={styles.desc}>
        Postgraduate Student in Computing at Dublin City University with an anticipated 2.1 grade, 
        2+ years of software development experience. Experience in Java, Spring Boot, API Development, Unit Testing, 
        and Angular. Strong problem-solving abilities and effectively collaborated with cross-functional teams. 
        Currently expanding expertise in Secure Software Development and ready to contribute to impactful software development projects.
        </p>
    </section>
  );
};
