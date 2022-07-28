type logoNames =
  | "php"
  | "laravel"
  | "vuejs"
  | "react"
  | "bootstrap"
  | "java"
  | "shopify"
  | "git"
  | "cypress"
  | "docker"
  | "jenkins"
  | "mysql"
  | "nginx"
  | "postman"
  | "typescript"
  | "gitlab"
  | "nodejs"
  | "javascript"
  | "postgresql"
  | "redux"
  | "sass"
  | "mapbox"
  | "mongodb"
  | "html5"
  | "spring"
  | "bash";

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  php: {
    label: "PHP",
    logo: "/assets/icons/php.svg",
    invert: true,
  },
  laravel: {
    label: "Laravel",
    logo: "/assets/icons/laravel.svg",
  },
  vuejs: {
    label: "Vue.js",
    logo: "/assets/icons/vuejs.svg",
  },
  react: {
    label: "React",
    logo: "/assets/icons/react.svg",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
  },
  java: {
    label: "Java",
    logo: "/assets/icons/java.svg",
  },
  shopify: {
    label: "Shopify",
    logo: "/assets/icons/shopify.svg",
  },
  git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
  },
  cypress: {
    label: "Cypress",
    logo: "/assets/icons/cypress.svg",
  },
  docker: {
    label: "Docker",
    logo: "/assets/icons/docker.svg",
  },
  jenkins: {
    label: "Jenkins",
    logo: "/assets/icons/jenkins.svg",
  },
  mysql: {
    label: "MySQL",
    logo: "/assets/icons/mysql.svg",
  },
  nginx: {
    label: "Nginx",
    logo: "/assets/icons/nginx.svg",
  },
  postman: {
    label: "Postman",
    logo: "/assets/icons/postman.svg",
  },
  typescript: {
    label: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  gitlab: {
    label: "Gitlab",
    logo: "/assets/icons/gitlab.svg",
  },
  nodejs: {
    label: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  postgresql: {
    label: "PostgreSQL",
    logo: "/assets/icons/postgresql.svg",
  },
  redux: {
    label: "Redux",
    logo: "/assets/icons/redux.svg",
  },
  sass: {
    label: "Sass",
    logo: "/assets/icons/sass.svg",
  },
  bash: {
    label: "Bash",
    logo: "/assets/icons/bash.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/assets/icons/mongodb.svg",
  },
  spring: {
    label: "Spring",
    logo: "/assets/icons/spring.svg",
  },
  html5: {
    label: "HTML5",
    logo: "/assets/icons/html5.svg",
  },
  mapbox: {
    label: "Mapbox",
    logo: "/assets/icons/mapbox.svg"
  },
};

export default logos;
