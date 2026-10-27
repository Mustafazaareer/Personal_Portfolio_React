import styles from "./ContactInfo.module.css";
function ContactInfo({ contactObject }) {
  const { icon, name, details } = contactObject;
  return (
    <div className={styles.contactInfos}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.details}>{details}</p>
      </span>
    </div>
  );
}

export default ContactInfo;
