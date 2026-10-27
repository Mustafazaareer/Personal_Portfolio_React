import { Link } from "react-router";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <section className={styles.intro}>
      <p className={styles.status}>Available For Hire</p>
      <h1 className={styles.job}>
        {"Crafting"}{" "}
        <span className={styles.coloredText}>Digital Solutions</span>
        <br />
        {" with Precision."}
      </h1>
      <p className={styles.aboutMe}>
        I am a Software Developer specialized in building scalable,
        high-performance applications that bridge the gap between complex
        engineering and elegant design.
      </p>
      <div className={styles.btns}>
        <Link className={styles.projectsBtn} to={"/projects"}>
          View My Work <span className={styles.arrow}>→</span>
        </Link>
        <Link className={styles.contactBtn} to={"/contact"}>
          Get In Touch
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
