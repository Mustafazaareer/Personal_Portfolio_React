import styles from "./Footer.module.css";
const contacts = [
  { contact: "GitHub", href: `${import.meta.env.VITE_GITHUB_LINK}` },
  {
    contact: "Linked In",
    href: `${import.meta.env.VITE_LINKEDIN_LINK}`,
  },
  { contact: "Email", href: "#Email" },
];
function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.info}>
        <span className={styles.name}>Mustafa RZ</span>
        <span className={styles.dot}>.</span>
      </section>
      <section className={styles.copyRight}>
        © 2026 Digital Craftsmanship. All rights reserved.
      </section>
      <section className={styles.contactLinks}>
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <a
              key={contact.contact}
              className={styles.contact}
              href={contact.href}
            >
              {contact.contact}
            </a>
          ))}
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
