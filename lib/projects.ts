import logos from "./logos";

type ProjectName =
  | "doohit"
  | "closed"
  | "butlers"
  | "parkcruise"
  | "ntpt";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  doohit: {
    title: "dooh-it by PWM",
    description: [
      "A business content management app to create digital ad campaigns on gas station screens. Users can **book** campaigns, **manage** locations and displays for bookings and admins can **manage** payments, customers, permissions and modify serval settings.",
      "Created in 2020 and still in active development",
      "SPA with strong role and permission system for different user types. Includes email service, PDF generation for invoices and quotations and AWS connectivity",
      "Fullstack application with **Vue.js** on the frontend & **Laravel / PHP** on the backend. All parts are modular and customizable to fit customers needs.",
    ],
    images: {
      main: {
        link: "/project/doohit/doohit-lighthouse.png",
        width: 995,
        height: 725,
      },
    },
    stack: [
      logos.vuejs, logos.laravel, logos.php, logos.mapbox, logos.bootstrap, logos.sass, logos.git, logos.mysql
    ],
    links: {
      live: "https://pwm.com",
    },
  },
  /* oko: {
    title: "OKO",
    description: [
      "Ecommerce shop for bluelight display screens.",
      "I'm CEO of the shop and its also my first **Shopify** project, including custom storefront applications and customized theming.",
    ],
    images: {
      main: {
        link: "/project/oko/oko.png",
        width: 1903,
        height: 894,
      },
    },
    stack: [
      logos.shopify,
      logos.vuejs,
      logos.laravel,
    ],
    links: {
      live: "https://dogmash.herokuapp.com/",
    },
  }, */
  closed: {
    title: "Closed Ecommerce",
    description: [
      "Development of features and templates for **Closed Ecommerce.**",
      "I made (fully responsible) microsites from Sketch templates, added features to the backend of the shopfront, integrated and created various Cypress tests",
      "The shop system is built on OXID eShop.",
    ],
    images: {
      main: {
        link: "/project/closed/closed.jpeg",
        width: 890,
        height: 584,
      },
    },
    stack: [logos.php, logos.cypress, logos.git, logos.gitlab, logos.javascript],
    links: {
      live: "https://www.closed.com/",
    },
  },
  butlers: {
    title: "Butlers",
    description: [
      "Custom made ERM system for **Butlers**.",
      "The webapp is built using **Laravel** and is used for everyday tasks, employee management, warehouse management & calculations and much more. Everything is custom made for customers needs.",
      "As another project I developed a prototype to create a highly dynamic backend interface that is customizable by admins without needing to request developers to change the interface. Every object, tab, calculation and field can be customized and will be shown on the frontend. Data is managed by a **MongoDB** database system. It is built similar headless CMS systems like **contentful**, but with more features, plugins and made for business partners needs.",
      "If you wish to test the prototype project, feel free to contact me.",
    ],
    stack: [logos.laravel, logos.vuejs, logos.mongodb, logos.git],
    links: {
      live: "https://www.butlers.com",
    },
    images: {
      main: {
        link: "/project/butlers/cloud-v2.png",
        width: 860,
        height: 520,
      },
    },
  },
  parkcruise: {
    title: "Park+Cruise",
    description: [
      "Booking platform for cruise passengers made by me and my coworker at **Kuehne+Nagel**",
      "The platform was designed and built from scratch. The backend is made with **Java** and **Spring Boot Microservices** with 100% test coverage , the frontend is **HTML5** with **Vanilla JS** and **jQuery** and a **custom made CSS Library** using SASS.",
      "There were two apps, one for users and travel agencies to book, pay and **manage parking on cruises**. The other app was for admins to manage the season calendar (possible to import CSV files), cruise ships, cars (models / types), locations & access payments.",
      "Unfortunately the service has been shut down, so theres no live version anymore.",
    ],
    links: {
      live: "https://www.kn-kreuzfahrtparken.de",
    },
    stack: [logos.react, logos.spring, logos.java, logos.html5],
    images: {
      main: {
        link: "/project/parkcruise/parkcruise.png",
        width: 970,
        height: 549,
      },
    },
  },
  ntpt: {
    title: "NTPT",
    description: [
      "**Continuous Integration** and **Continuous Delivery** are practices of continuously merging software components to an application and constantly releasing it. These methods work well in practice to undertake tedious and repeating tasks from developers. Expensive developer time can then be used for more efficient tasks and applications are created faster and with the same high level of quality.",
      "In many software projects developers need more components than just branches in a Version Control System like a Buildpipeline, code analysis, a database-scheme or a dedicated test environment. Most of these components provide integrated programming interfaces. Because there is no universal concept to provide these components automatically, custom solutions are used.",
      "This work is concerned with the question, whether and how to **automatically** manage these components in a software delivery pipeline with the process engine **Camunda BPM**. The current process of a logistic company, which provides a large software, is used as a basis and will be checked for weaknesses. To answer the initial question, an example solution will be developed in form of a process model and an extendable prototype will be designed and implemented.",
    ],
    links: {
      github: "https://github.com/codeoutin/ntpt_docker_compose",
      live: "https://github.com/codeoutin/ntpt_frontend_react",
    },
    stack: [logos.docker, logos.react, logos.gitlab, logos.mongodb, logos.laravel],
    images: {
      main: {
        link: "/project/ntpt/ntpt-instances.png",
        width: 925,
        height: 596,
      },
    },
  },
};

export default projects;
