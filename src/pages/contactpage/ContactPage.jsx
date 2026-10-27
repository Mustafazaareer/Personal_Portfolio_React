import { useState } from "react";
import ContactInfo from "../../componants/contactInfo/ContactInfo";
import styles from "./ContactPage.module.css";
import { useForm } from "@formspree/react";
const contactMedias = [
  { contact: "GitHub", href: `${import.meta.env.VITE_GITHUB_LINK}` },
  { contact: "LinkedIn", href: `${import.meta.env.VITE_LINKEDIN_LINK}` },
  { contact: "Facebook", href: `${import.meta.env.VITE_FACEBOOK_LINK}` },
];

const id = import.meta.env.VITE_FORM_ID;
const contcats = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="-1.07 -1.07 30 30"
        id="Mail-Send-Envelope--Streamline-Core"
        height="30"
        width="30"
      >
        <desc>
          Mail Send Envelope Streamline Icon: https://streamlinehq.com
        </desc>
        <g id="mail-send-envelope--envelope-email-message-unopened-sealed-close">
          <path
            id="Vector"
            fill="#ffffff00"
            d="M24.875 3.4825h-21.89a1.99 1.99 0 0 0 -1.99 1.99v16.915a1.99 1.99 0 0 0 1.99 1.99h21.89a1.99 1.99 0 0 0 1.99 -1.99v-16.915a1.99 1.99 0 0 0 -1.99 -1.99Z"
            stroke-width="2.14"
          ></path>
          <path
            id="Vector_2"
            stroke="#7cd0fc"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M24.875 3.4825h-21.89a1.99 1.99 0 0 0 -1.99 1.99v16.915a1.99 1.99 0 0 0 1.99 1.99h21.89a1.99 1.99 0 0 0 1.99 -1.99v-16.915a1.99 1.99 0 0 0 -1.99 -1.99Z"
            stroke-width="2.14"
          ></path>
          <path
            id="Vector_3"
            stroke="#7cd0fc"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m0.995 5.97 11.6614 9.95a1.99 1.99 0 0 0 2.5472 0l11.6614 -9.95"
            stroke-width="2.14"
          ></path>
        </g>
      </svg>
    ),
    name: "Email Me",
    details: "323mustafa2rz@gmail.com",
  },
  {
    icon: (
      <svg
        viewBox="-0.94 -0.94 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="Map-Pin--Streamline-Iconoir"
        height="30"
        width="30"
      >
        <desc>Map Pin Streamline Icon: https://streamlinehq.com</desc>
        <path
          d="M24.313958 11.4965105C24.313958 17.159644166666666 14.059999999999999 26.8774475 14.059999999999999 26.8774475s-10.253957999999999 -9.717803333333334 -10.253957999999999 -15.380937c0 -5.663133666666667 4.590824333333333 -10.253957999999999 10.253957999999999 -10.253957999999999 5.663133666666667 0 10.253957999999999 4.590824333333333 10.253957999999999 10.253957999999999Z"
          stroke="#7bd0ff"
          stroke-width="1.88"
        ></path>
        <path
          d="M14.059999999999999 12.778196666666666c0.7079209999999999 0 1.2816861666666668 -0.5737651666666667 1.2816861666666668 -1.2816861666666668 0 -0.7079209999999999 -0.5737651666666667 -1.2818033333333334 -1.2816861666666668 -1.2818033333333334s-1.2818033333333334 0.5738823333333334 -1.2818033333333334 1.2818033333333334c0 0.7079209999999999 0.5738823333333334 1.2816861666666668 1.2818033333333334 1.2816861666666668Z"
          fill="#7bd0ff"
          stroke="#7bd0ff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.88"
        ></path>
      </svg>
    ),
    name: "Location",
    details: "Hebron, Palestine",
  },
];
function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm(`${id}`);
  return (
    <section className={styles.middleContainer}>
      <div className={styles.contactSection}>
        <div className={styles.contactDetailes}>
          <h1 className={styles.header}>Let's Collaborate</h1>
          <p className={styles.message}>
            Whether you have a project in mind or just want to talk tech, my
            inbox is always open.
          </p>
          <div>
            {contcats.map((contact) => (
              <ContactInfo contactObject={contact} key={contact.name} />
            ))}
          </div>
          <div className={styles.linksContainer}>
            <hr className={styles.line} />
            <div className={styles.links}>
              {contactMedias.map((contact) => (
                <span key={contact.href}>
                  <a href={contact.href} className={styles.link}>
                    {contact.contact}
                  </a>
                </span>
              ))}
            </div>
          </div>
          <div className={styles.contactMedia}>{}</div>
        </div>
        <form className={styles.formSection} onSubmit={handleSubmit}>
          <div className={`${styles.name} ${styles.input}`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.text}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className={`${styles.email} ${styles.input}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.text}
              placeholder="Email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className={`${styles.message} ${styles.input}`}>
            <label htmlFor="message">Message</label>
            <textarea
              className={`${styles.text} ${styles.textArea}`}
              id="message"
              name="message"
              required
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className={styles.sendMessageBtn} type="submit">
            <span>Send Message</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 35 35"
                id="Send--Streamline-Rounded-Material"
                height="35"
                width="35"
              >
                <desc>Send Streamline Icon: https://streamlinehq.com</desc>
                <path
                  fill="#000000"
                  d="M29.677083333333332 18.520833333333332 5.906249999999999 28.510416666666668c-0.3645833333333333 0.14583333333333334 -0.7109375 0.1155 -1.0390625 -0.09114583333333333 -0.328125 -0.20657291666666666 -0.4921875 -0.5042916666666666 -0.4921875 -0.8932291666666667v-20.052083333333332c0 -0.38887916666666666 0.1640625 -0.6866197916666666 0.4921875 -0.8932145833333333 0.328125 -0.2066020833333333 0.6744791666666666 -0.23697916666666666 1.0390625 -0.09114583333333333L29.677083333333332 16.479166666666668c0.43749999999999994 0.19446875 0.65625 0.5347708333333333 0.65625 1.0208333333333333 0 0.4861354166666666 -0.21874999999999997 0.8264374999999999 -0.65625 1.0208333333333333ZM6.5625 25.776041666666668 26.395833333333336 17.5 6.5625 9.114583333333332v6.125L15.385416666666666 17.5 6.5625 19.6875v6.088541666666666Z"
                  stroke-width="0.7292"
                ></path>
              </svg>
            </span>
          </button>
        </form>
      </div>
      {state.succeeded && <alert>{"succeeded"}</alert>}
    </section>
  );
}

export default ContactPage;
