import styles from "./AboutPage.module.css";
function AboutPage() {
  return (
    <div className={styles.aboutSection}>
      <section className={styles.leftSection}>
        <img className={styles.muImage} src="Mu-Img.jpeg" alt="Mustafa Image" />
      </section>
      <section className={styles.rightSection}>
        <section className={styles.jobTitle}>Full Stack Developer</section>
        <section className={styles.professionalCareer}>
          <p>
            My journey began at the intersection of curiosity and logic. Over
            the past 6 years, I've evolved from a curious tinkerer into a
            technical architect, focusing on robust backend systems and
            intuitive frontend experiences.
          </p>
          <p>
            I believe in "Digital Craftsmanship"—the idea that software should
            not only function perfectly but should be built with intentionality,
            maintainability, and elegant structure.
          </p>
        </section>
        <section className={styles.jobStatus}>
          <div className={`${styles.projectsStatus} ${styles.statusContainer}`}>
            <span className={styles.number}>50+</span>
            <span className={styles.text}>Projects Delivered</span>
          </div>
          <div className={`${styles.yearsExpStatus} ${styles.statusContainer}`}>
            <span className={styles.number}>6+</span>
            <span className={styles.text}>Years Experience</span>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AboutPage;
