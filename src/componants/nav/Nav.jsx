import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";
const menuItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

function Nav() {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/documents/my-cv.pdf";
    link.download = "My-CV.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className={styles.main}>
      <NavLink to="/" className={styles.toHomePage}>
        <img className={styles.logo} src="logo.png" />
      </NavLink>
      <section>
        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item) => (
              <NavLink key={item.name} to={item.href} className={styles.btn}>
                {item.name}
              </NavLink>
            ))}
            <button
              onClick={handleDownload}
              className={`${styles.coloredBtn} ${styles.downloadBtn}`}
            >
              <span>resume</span>
              <img src="/download.png" className={styles.downloadIcon} />
            </button>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Nav;
