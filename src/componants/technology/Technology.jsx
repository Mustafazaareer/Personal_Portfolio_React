import styles from "./Technology.module.css";
function Technology({ name, mainProject }) {
  return (
    <div className={`${mainProject ? styles.mainProjectTech : styles.tech}`}>
      {name}
    </div>
  );
}

export default Technology;
