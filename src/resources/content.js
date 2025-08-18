import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Samuel",
  lastName: "Pedrosa",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Developer Full Stack",
  avatar: "/images/avatar.jpg",
  email: "Samuelpedrosaoficial@gmail.com",
  location: "America/Fortaleza", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Instagram</>,
  description: (
    <>
      I occasionally post about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/samuca-pedrosa/Samuel-Pedrosa.git",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/samuel-pedrosa-71a993359/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/pedrosaa.dev",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design, APIs and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Pedrosaa.dev</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Pedrosa, a Full Stack Developer at BairesDev, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        My name is Samuel Pedrosa, or "Pedrosa." I'm the creator of Codersam, a frontend and backend learning resource that aims to help people become professional developers. I've been working in this field since 2024. I'm currently a freelancer and work for a company as a full-stack developer. I develop modern, high-quality interfaces, focusing on performance, animations, responsiveness, and SEO. I also develop or improve backend projects.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "BairesDev",
        timeframe: "2025 - Present",
        role: "Junior Full Stack Developer",
        achievements: [
          <>
            I redesigned the Smart Fit gym's API, implementing optimizations that resulted in
            a 40% reduction in platform load times and a better user experience.
          </>,
          <>
            SI architected a microservices solution with Docker that supports 10x 
            more concurrent users, scaling from 1,000 to 10,000+ active users.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Project Smart Fit",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Nubank",
        timeframe: "2025",
        role: "Front-End Developer Jr.",
        achievements: [
          <>
            I developed features for the Nubank app that impacted over 15 million users,
            improving the PIX payment experience by 30%.
          </>,
          <>
            I implemented automated testing and code review that reduced bugs in production
            by 40%, ensuring greater stability of the financial platform.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Instituto Federal do Rio Grande do Norte",
        description: <>Computer technician .</>,
      },
      {
        name: "Build the Future",
        description: <>I studied at rocketseat to be a Full-stack at first.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: <>I build interactive, complete and innovative interfaces, I work with Figma, Reac t, Vue.js, advanced Html+css, Etc.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
            {
        title: "Backend",
        description: <>I develop APIs, servers and integrations using Node.js, Python and databases such as MySQL, PostgreSQL and MongoDB.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-05.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
      link: "https://samuca-pedrosa.github.io/Dra-Mayra-master/",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
      link: "https://samuca-pedrosa.github.io/Rioturism/",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
      link: "https://samuca-pedrosa.github.io/Quants-Capital-master/",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
