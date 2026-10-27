import styles from "./Category.module.css";
function Category({ category, color }) {
  const categoryStyle = {
    color: `${color}`,
    backgroundColor: `${color}1A`,
    border: `1px solid ${color}`,
  };
  return (
    <div style={categoryStyle} className={styles.mainContainer}>
      <span className={styles.point} style={{ backgroundColor: color }} />
      {category}
    </div>
  );
}

export default Category;
