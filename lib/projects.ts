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
      "A **business content management** app to create digital ad campaigns on gas station screens. Built as **SPA** with easy to use role and permission system for different user types. Includes bookings with previews, live maps, timezones, automatic email services, PDF generation for invoices, quotations and business analyses and AWS connectivity.",
      "Created in 2020 and still in active development and used by a daily growing user base.",
      "Fullstack application with **Vue.js** on the frontend & **Laravel / PHP** on the backend and serval secured **REST API** services. All parts are modular and customizable to fit customers needs.",
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
    title: "Butlers",
    description: [
      "Custom made ERM system for **Butlers**.",
      "The webapp is build with **Laravel** and is used to maintain hundrets of stores and their logistics, warehouse management, reports, calculations and much more.",
      "I also developed a headless CMS version to offer a highly dynamic backend solution. Every object, interface, calculation and field can be customized. Data is managed by a **MongoDB** database system. It is built similar headless CMS systems like **contentful**, with more features, plugins and made for business partners needs.",
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
