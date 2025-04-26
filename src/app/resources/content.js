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
  languages: ["English", "Mandarin"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
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
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lindsayshen",
  },
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
  headline: <>Product Designer and Builder</>, // Simplified "builder"
  subline: (
    <>
      I'm Lindsay — a Product Designer at <InlineCode>J.P. Morgan</InlineCode> intuitive user experiences and driving product thinking. I explore creativity through side projects, photography, music, and baking.
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
        Lindsay is a New York City-based Product Designer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        Her work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "J.P. Morgan",  // Corrected company name
        timeframe: "2023 - Present", //  Use a consistent timeframe format
        role: "Product Designer",
        achievements: [
          <>
            Led the redesign of the GLASS internal dashboard, improving
            sales team efficiency and client management.  This resulted in a
            streamlined workflow and improved data accessibility.
          </>,
          <>
            Co-led the strategic vision and workflow definition for the
            modernization of J.P. Morgan Access, directly influencing the
            product roadmap.
          </>,
           <>
            Collaborated on the North Star vision, crafting streamlined and scalable workflows.
          </>,
          <>
           Defined the 2024-2026 product roadmap via the Access North Star vision.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images

          {
            src: "/images/projects/access-north-star/overview.png",
            alt: "J.P. Morgan Access North Star Overview",
            width: 16,
            height: 9,
          },
           {
            src: "/images/projects/access-north-star/payment-overview.png",
            alt: "J.P. Morgan Payment Overview",
            width: 16,
            height: 9,
          },
           {
              src: "/images/projects/glass/dashboard-before.jpg",
              alt: "GLASS Dashboard Before",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/glass/dashboard-after.jpg",
              alt: "GLASS Dashboard After",
              width: 16,
              height: 9,
            },

        ],
      },
      {
        company: "Vimeo",
        timeframe: "2022-2023", // Example timeframe - adjust as needed
        role: "UX/UI Designer (Project-Based)",
        achievements: [
          <>
            Redesigned Vimeo's video analytics section, improving the user
            experience of the dashboard, streamlining filtering, and adding new
            features based on user feedback.
          </>,
          // Add other achievements from your Vimeo project
        ],
        images: [
             {
                src: "/images/projects/vimeo-analytics/dashboard-before.jpg",
                alt: "Vimeo Analytics Dashboard Before",
                width: 16,
                height: 9,
              },
              {
                src: "/images/projects/vimeo-analytics/dashboard-after.jpg",
                alt: "Vimeo Analytics Dashboard After",
                width: 16,
                height: 9,
              },
              {
                src: "/images/projects/vimeo-analytics/filter-before.jpg",
                alt: "Vimeo Analytics Filter Before",
                width: 16,
                height: 9,
              },
        ],
      },
      {
        company: "Freelance",
        timeframe: "2018 - 2022", // Example timeframe, combine if it overlaps
        role: "Product Designer",
        achievements: [
          <>
            Collaborated with various clients on diverse design projects, including website redesigns, mobile app development, and branding initiatives.
          </>,
          <>
           Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.
          </>,
          // Add other freelance achievements.  Be specific!
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education", // Changed to "Education" - more standard
    institutions: [
      {
        name: "Cornell University",  // Replace with your actual university
        description: <>B.S. in Information Science</>, // Replace with your degree
      },
        {
        name: "eCornell",  // Replace with your actual university
        description: <>Certificate, Design Thinking</>, // Replace with your degree
      },
      // Add more education entries as needed.
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            Proficient in using Figma for UI design, prototyping, and
            collaboration.  Experienced in creating and maintaining design
            systems within Figma.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "HTML, CSS, JavaScript", // Grouped fundamental web technologies
        description: (
          <>
            Strong understanding of front-end development principles.  Capable
            of building static websites and prototypes.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "React & Next.js",
        description: (
          <>
            Experience with React and Next.js for building dynamic web
            applications.  Familiar with component-based architecture and
            server-side rendering.
          </>
        ),
        images: [],
      },
        {
        title: "User Research Methodologies",
        description: (
          <>
            Skilled in conducting user interviews, usability testing, surveys, and data analysis to inform design decisions.
          </>
        ),
        images: [],
      },
      {
        title: "Agile & Lean UX",
        description: (
          <>
            Experience working in Agile environments and applying Lean UX principles for iterative design and development.
          </>
        ),
        images: [],
      },

      // Add other technical skills (e.g., specific design tools, prototyping tools, etc.)
    ],
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