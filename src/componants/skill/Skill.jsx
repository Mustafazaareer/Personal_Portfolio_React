import styles from "./Skill.module.css";

function Skill({ icon, name }) {
  return (
    <section className={styles.skillCard}>
      <div className={styles.skillIcon}>{icon}</div>
      <p className={styles.skillName}>{name}</p>
    </section>
  );
}

export default Skill;
