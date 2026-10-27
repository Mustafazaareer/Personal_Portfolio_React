import Project from "../../componants/project/Project";
import styles from "./ProjectsPage.module.css";

const projects = [
  {
    id: 1,
    category: {
      name: "Web Application",
      color: "#2563EB",
    },
    version: "1.0.0",
    img: "/projects/HR-App.webp",
    techs: [
      { name: "nodejs" },
      { name: "express" },
      { name: "javascript" },
      { name: "sequelize" },
      { name: "sql" },
    ],
    name: "HR Management System",
    paragraph:
      "A human resources management system developed for United Iron Company to manage employee-related information and streamline HR operations.",
    demoLink: "",
    repoLink: "GitHub Repository",
  },
  {
    id: 2,
    category: {
      name: "Backend",
      color: "#16A34A",
    },
    version: "1.0.0",
    img: "/projects/Ecommerce-App.jpeg",
    techs: [
      { name: "nodejs" },
      { name: "express" },
      { name: "javascript" },
      { name: "mongodb" },
      { name: "mongoose" },
    ],
    name: "E-commerce REST API",
    paragraph:
      "A RESTful backend API for an e-commerce platform, built with Express and MongoDB to handle products, users, and other essential store operations.",
    demoLink: "",
    repoLink: "GitHub Repository",
  },
  {
    id: 3,
    category: {
      name: "Backend",
      color: "#9333EA",
    },
    version: "1.0.0",
    img: "projects/AWS-App.jpeg",
    techs: [
      { name: "nodejs" },
      { name: "express" },
      { name: "typescript" },
      { name: "typeorm" },
      { name: "sql" },
      { name: "aws" },
    ],
    name: "Express & AWS Training Project",
    paragraph:
      "A backend application developed as the final project of an Express and AWS training program, using TypeScript, TypeORM, and SQL.",
    demoLink: "",
    repoLink: "GitHub Repository",
  },
  {
    id: 4,
    category: {
      name: "Mobile Application",
      color: "#EA580C",
    },
    version: "1.0.0",
    img: "/projects/Planer-App.jpg",
    techs: [{ name: "flutter" }, { name: "dart" }],
    name: "Task Planner App",
    paragraph:
      "A mobile task-planning application developed with Flutter and Dart to help users organize tasks and manage their daily activities.",
    demoLink: "",
    repoLink: "GitHub Repository",
  },
];

function ProjectsPage() {
  return (
    <div className={styles.mainContainer}>
      {projects.map((project) => (
        <Project
          projectObj={project}
          key={project.name}
          main={project.id == 1 ? true : false}
        />
      ))}
    </div>
  );
}

export default ProjectsPage;
