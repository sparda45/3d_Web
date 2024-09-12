import { esgul,dsc,asia,potatos,kemendikbud,bangkit } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    Figma,
    Kotlin,
    Android
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },{
        imageUrl:Kotlin,
        name: "Kotlin",
        type: "Java"
    },{
        imageUrl:Android,
        name:"android",
        type: "android"
    },
    {
        imageUrl: Figma,
        name: "Figma",
        type: "Frontend"
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "creative design",
        company_name: "Kemendikbud",
        icon: kemendikbud,
        iconBg: "#5D8AFD",
        date: "Aug 2019 - Dec 2019",
        points: [
            "Created content for Kemendikbud Ri Instagram, resulting in a 15% increase in engagement.",
            "Developed motion graphics for Kemendikbud Ri, resulting in a 20% increase in video views.",
            "Conducted video reporting for Kemendikbud Ri, resulting in a 25% increase in website traffic.",
            "Wrote documentation for Kemendikbud Ri, in a 30% decrease in support requests.",
        ],
    },
    {
        title: "Project Management & UI/UX Designer",
        company_name: "Potatos Studio",
        icon: potatos,
        iconBg: "#5D6DFD",
        date: "Sept 2021 - Present",
        points: [
            "Conducted user experience research and created prototypes for clients, resulting in a 20% increase in customer satisfaction.",
            "Managed project tasks across the division using Jira and Trello, resulting in a 80% increase in task completion efficiency",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Lead",
        company_name: "Google Developer Student Club",
        icon: dsc,
        iconBg: "#5DFDEA",
        date: "Aug 2023 - jul 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Reported on the impact of DSC events to Google Indonesia, providing valuable insights and recommendations for future initiatives.",
            "Created engaging and informative media content, including news articles and creative pieces, to increase audience engagement by 20%.",
        ],
    },
    {
        title: "Assistant Lecturer",
        company_name: "Esa Unggul University",
        icon: esgul,
        iconBg: "#FDBD5D",
        date: "Jun 2024 - Aug 2024",
        points: [
            "Assisted the Lecturer in developing a learning path for the project management class resulting in a 20% increase in student comprehension",
            "Introduced students to the workflow of project management, resulting in a 50% increase in understanding and efficiency",
        ],
    },
    {
        title: "Project Managment Intern",
        company_name: "Asia University Taiwan",
        icon: asia,
        iconBg: "#5DFD77",
        date: "May 2024 - Aug 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Mobile Developer Mentor",
        company_name: "Bangkit Academy",
        icon: bangkit,
        iconBg: "#a2d2ff",
        date: "May 2024 - Aug 2024",
        points: [
            "Guided and mentored aspiring Android developers through an intensive learning program focused on building industry-relevant mobile applications",

            "Collaborated with a team of mentors and instructors to design and improve the learning curriculum.",

            "Contributed to the continuous improvement of the mentorship program by sharing insights and student performance analysis with the program management.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sparda45',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/reflynandyaz/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Bank Landing Page',
        description: 'developing the landing page using the react and combine it with the tailwind.',
        link: 'https://github.com/sparda45/digibank',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'UI/UX Portofolio',
        description: 'this are my ui/ux portofolio including the study case',
        link: 'https://www.behance.net/vergilsparda',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Tik-Tok clone front end',
        description: 'make the clone of tiktok on website using the vite.js. It Also allowing the user to login and upload the video',
        link: 'https://github.com/sparda45/front_End',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Back-end Tiktok Clone',
        description: 'Built a complete back end clone of Tiktok. it make the api to passing the data form the user to the database',
        link: 'https://github.com/sparda45/aws',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'Mozart',
        description: 'Developing the android aplication who can scan the art on gallery or museum using the camera x.',
        link: 'https://github.com/Altaair07/MozArt',
    },
   
];