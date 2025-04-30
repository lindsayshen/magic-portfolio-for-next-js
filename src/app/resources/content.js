import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Lindsay",
  lastName: "Shen",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Designer",
  avatar: "/images/avatar_lindsay.jpg", // Make sure this path is correct
  location: "New York, NY", //  Simplified for display; use IANA for time zone calculations if needed.
  languages: ["English", "Mandarin", "Cantonese"], // optional: Leave the array empty if you don't want to display languages
  resume: "https://drive.google.com/file/d/1u-sG_dLWfwjvC6_-jlWI5vHMyDogXDLo/view?usp=sharing",
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lindsayshen/",
  },
  {
    name: "X",
    icon: "x",
    link: "", // Add your X (Twitter) link here if you have one
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:lindsayshen8@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Product Designer and Builder</>,
  subline: (
    <>
      I'm Lindsay — a Product Designer at <InlineCode>J.P. Morgan</InlineCode>, crafting intuitive user experiences and driving product thinking. Outside of work, I explore creativity through side projects, photography, music, and baking.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me", // Simplified
  description: `Meet ${person.name}, a ${person.role} based in ${person.location}`, // More conversational
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/lindsayshen", // Replace with your actual Calendly link
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I’m Lindsay Shen — a Product Designer based in New York City with 5+ years of experience turning complex business needs into intuitive digital experiences. My work spans enterprise platforms, consumer apps, and startup products.
        <br /><br />
        At J.P. Morgan, I co-led the Access North Star initiative and redesigned internal platforms like GLASS to drive efficiency and impact for 400k+ users. Previously, I redesigned Vimeo’s video analytics dashboard and helped emerging startups launch user-centered products.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Snapshot",
    experiences: [
      {
        company: "J.P. Morgan",  // Corrected company name
        timeframe: "Jun 2022 – Present", //  Use a consistent timeframe format
        role: "Senior Product Designer",
        achievements: [
        ],
        images: [
        ],
        logo:"/images/logos/jpm.png", // Added logo for J.P. Morgan
      },
      {
        company: "HD Studio",
        timeframe: "Aug 2020 – May 2022", // Example timeframe - adjust as needed
        role: "Product Designer",
        achievements: [
        ],
        images: [
        ],
        logo:"/images/logos/hds.jpeg", 
      },
      {
        company: "TD Canada Trust",
        timeframe: "Mar 2020 – Jun 2021", // Example timeframe, combine if it overlaps
        role: "UX Consultant",
        achievements: [
        ],
        images: [],
        logo:"/images/logos/td.jpeg", 
      },
      {
        company: "iMerciv",
        timeframe: "Nov 2019 – Mar 2020", // Example timeframe, combine if it overlaps
        role: "UX Researcher",
        achievements: [
        ],
        images: [],
        logo:"/images/logos/im.jpeg", 
      },
    ],
  },
  /*studies: {
    display: true,
    title: "Education",
    institutions: [
      { name: "eCornell", description: <>Certificate, Design Thinking (2023)</> },
      { name: "Google", description: <>UX Design Certificate (2022)</> },
      { name: "Interaction Design Foundation", description: <>UX Design Bootcamp (2021)</> },
      { name: "University of Oxford", description: <>Summer Abroad Program (2019)</> },
      { name: "University of Toronto", description: <>B.Com., Finance & Economics (2016–2020)</> },
    ],
  },*/
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "eCornell",
        description: <>Certificate, Design Thinking (2023)</>,
        logo: "/images/logos/ecornell.png",
      },
      {
        name: "Google x Udemy",
        description: <>UX Design Certificate (2022)</>,
        logo: "/images/logos/google.png",
      },
      {
        name: "Interaction Design Foundation",
        description: <>UX Design Bootcamp (2021)</>,
        logo: "/images/logos/idflogo.png",
      },
      {
        name: "University of Oxford",
        description: <>Summer Abroad Program (2019)</>,
        logo: "/images/logos/oxford.jpg",
      },
      {
        name: "University of Toronto",
        description: <>B.Com., Finance & Economics (2016–2020)</>,
        logo: "/images/logos/ut_coa.png",
      },
    ],
  },




  technical: {
    display: true,
    title: "Skills",
    skills: [
      { title: "Proficient", description: <>Figma, Sketch, Adobe XD, Advanced Excel, InVision, Lucid Spark, Jira</> },
      // { title: "Actively Learning", description: <>After Effects, Photoshop, Illustrator</> },
      { title: "Working Knowledge", description: <>Web Development, Microsoft Access, Microsoft Visio, Excel VBA, SQL, Tableau</> },
    ]
  },
};

const blog = {
  label: "Blog",
  title: "Writing", // Simplified
  description: `Thoughts on design, technology, and more.`, // More concise
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Projects", // Simplified
  description: `A selection of my design and development projects.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Gallery", // Simplified
  description: `A collection of personal photos.`, // More concise
  // Images from https://pexels.com  (You should replace these with YOUR photos!)
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };