import logos from "./logos";

type ProjectName =
  | "doohit"
  | "closed"
  | "butlers"
  | "parkcruise"
  | "portfolio"
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
    title: "IT Consultant & software architect",
    description: [
      "Design and development of a **business content management** app from scratch. A platform to create digital ad campaigns with instant payment and booking solutions. Role and permission system for different user types and countries. Bookings with live previews, dynamic maps, timezone management, email services, document generation, business analyses and AWS connectivity.",
      "Project length: 4 years (3 months to prototype, 6 months to production, continuous business consulting & feature development)",
    ],
    images: {
      main: {
        link: "/project/doohit/doohit_mock.png",
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
  closed: {
    title: "Fullstack Ecommerce Developer",
    description: [
      "Development of features and templates for **Closed**. The ecommerce platform is based on a highly customized OXID eShop",
      "Design and coding of (fully responsible) microsites out of Sketch templates including **ScrollMagic**, implementation of features for the backend of the shopfront, integration of **Cypress** and writing of tests",
    ],
    images: {
      main: {
        link: "/project/closed/closed.png",
        width: 890,
        height: 557,
      },
    },
    stack: [logos.php, logos.cypress, logos.git, logos.gitlab, logos.javascript],
    links: {
      live: "https://www.closed.com/",
    },
  },
  butlers: {
    title: "ERP architect & lead development",
    description: [
      "Lead developer for an ERP system at **Butlers / H24**.",
      "Development of a full custom webapp with ERP features and bridging technologies & legacy software. The app allows the company to maintain hundrets of stores and product logistics, warehouse management, reports, calculations and other ERP features.",
      "Demo on request.",
    ],
    stack: [logos.laravel, logos.vuejs, logos.mongodb, logos.git],
    links: {
      live: "https://www.butlers.com",
    },
    images: {
      main: {
        link: "/project/butlers/bcloud_lorem.png",
        width: 860,
        height: 520,
      },
    },
  },
  parkcruise: {
    title: "Fullstack Developer",
    description: [
      "Booking platform for cruise passengers for **Kuehne+Nagel**",
      "The platform was designed and built from scratch. The backend is **Java** with **Spring Boot Microservices** developed with 100% test coverage, the frontend is **HTML5** with vanilla **JavaScript** and **jQuery**, styled by a custom made CSS Library in **SASS** providing the corporate identity design.",
      "Offered are two separate apps, one for clients and travel agencies to book, pay and manage **premium parking services**. The second plattform is used by admins to manage the booking data like annual season calendar, cruise ships, car lists, locations & payment reports.",
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
  portfolio: {
    title: "This website",
    description: [
      "This portfolio website is build with **React** using **Next.js** framework.",
      "It's written in **100% TypeScript**. I made some changes in the colors and behaviour and optimized the site to reach a perfect **Lighthouse** score across all categories.",
      "The source code is written by **Bhavya** and is already great out-of-the-box.",
    ],
    links: {
      github: "https://github.com/codeoutin/portfolio",
      live: "https://psteger.com",
    },
    stack: [logos.typescript, logos.react],
    images: {
      main: {
        link: "/project/portfolio/psteger.jpeg",
        width: 925,
        height: 596,
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
    stack: [logos.docker, logos.react, logos.gitlab, logos.mongodb, logos.java, logos.spring, logos.jenkins],
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
