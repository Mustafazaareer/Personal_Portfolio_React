import Category from "../category/Category";
import Technology from "../technology/Technology";
import styles from "./Project.module.css";

function toPascalCase(text) {
  return text
    .toLowerCase()
    .replace(/(?:^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, (_, char) =>
      char.toUpperCase()
    );
}
function Project({ main, projectObj }) {
  const {
    id,
    category,
    version,
    img,
    techs,
    name,
    paragraph,
    demoLink,
    repoLink,
  } = projectObj;
  return (
    <div className={`${main ? styles.mainProject : styles.project}`}>
      <div className={styles.intro}>
        <span className={styles.projectCategory}>
          <Category category={category.name} color={category.color} />
        </span>
        <span className={styles.projectVersion}> {"v " + version}</span>
      </div>
      <div className={styles.projectImg}>
        <img className={styles.img} src={img} alt="Project Image" />
      </div>
      <div className={styles.projectDetails}>
        <div className={styles.technologies}>
          {techs.map((tech) => (
            <Technology
              name={toPascalCase(tech.name)}
              key={tech.name}
              mainProject={id == 1 ? true : false}
            />
          ))}
        </div>
        <h3 className={styles.projectName}> {name}</h3>
        <p className={styles.projectParagraph}>{paragraph}</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.btns}>
        <a
          className={`${styles.link} ${styles.liveDemo}`}
          href={demoLink || undefined}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Live Demo</span>
          <img src="url.png" className={styles.demoIcon} />
        </a>
        <a
          className={`${styles.link} ${styles.repo}`}
          href={repoLink || undefined}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="codeIcon.png" className={styles.codeIcon} />{" "}
          <span>Repo</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
