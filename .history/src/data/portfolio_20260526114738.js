export const personal = {
  name: 'Kuljeetsinh Parmar',
  shortName: 'Kuljeet',
  role: 'Fullstack Developer',
  location: 'Pune, India',
  email: 'kuljeetsinh1305@gmail.com',       
  github: 'https://github.com/kuljeetsinhparmar',    
  linkedin: 'https://www.linkedin.com/in/kuljeetsinh-parmar/', 
  resumeUrl: '/resume.pdf',            
  bio: [
    "I'm a Computer Engineering graduate who enjoys building things for the web. I started with HTML and CSS, got into JavaScript, and recently built my first full-stack project using React and Node.js.",
    "I'm honest about where I am — I'm not a senior engineer yet. But I learn fast, I ship real things, and I'm looking for a team where I can grow and contribute from day one.",
  ],
  typingPhrases: [
    'Fullstack Developer',
    'Problem Solver',
    'Open to Opportunities 🚀',
  ],
}

export const stats = [
  { value: '4',   label: 'Project Shipped'   },
  { value: '4+',  label: 'Technologies'      },
  { value: 'CE',  label: 'Graduate 2026'     },
  { value: '100%', label: 'Eager to Learn'   },
]

export const skills = [
  {
    category: 'Frontend',
    color: 'green',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive Design'],
  },
  {
    category: 'Backend',
    color: 'teal',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
  },
  {
    category: 'Coursework',
    color: 'green',
    items: ['Data Structures ', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive Design'],
  },
  {
    category: 'Tools & Others',
    color: 'lime',
    items: ['Git', 'GitHub', 'VS Code', 'Python (basics)', 'Command Line'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Inventory Management System',
    tagline: 'A full-stack web app to manage stock for small businesses.',
    description:
      'Built a web application that lets businesses track their inventory — adding products, updating quantities, searching items, and viewing a simple dashboard with charts. This was my first full-stack project.',
    features: [
      'Add, edit, and delete inventory items (CRUD)',
      'Search and filter products by name or category',
      'Dashboard with basic charts showing stock levels',
      'Simple login to protect the admin panel',
    ],
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/kuljeetsinhparmar/Inventory_management',
    demo: 'https://inventory-management-gray-xi.vercel.app/login',  
    honest:
      'This was my first real project. It taught me how the frontend and backend connect, how to structure a React app, and how to work with a database.',
  },
]

export const journey = [
  {
    date: '2026',
    title: 'Graduated — B.E. Computer Engineering',
    org: 'LDRP-ITR,GANDHINAGAR',
    desc: 'Completed my degree with coursework in Data Structures, DBMS, Operating Systems, and Computer Networks. Graduated with the motivation to actually build things, not just study them.',
  },
  {
  date: "2025",
  title: "Built Personal Portfolio Website",
  org: "React.js • Tailwind CSS",
  desc: "Designed and developed a responsive developer portfolio to showcase projects, technical skills, and software engineering journey."
},
  {
    date: '2024–2025',
    title: 'Built my first full-stack project',
    org: 'Self-directed learning',
    desc: 'Spent months learning React and Node.js through tutorials, docs, and trial and error. Shipped the Inventory Management System — my first app with a real backend, database, and deployed frontend.',
  },
  {
  date: "2024",
  title: "Internship",
  org: "SAC,ISRO,Ahmedabad",
  desc: "Worked on LiDAR data preprocessing and automation using Python. Built noise filtering pipelines using SOR and Radius Outlier Removal algorithms."
},
  {
    date: '2023–2024',
    title: 'Learned the fundamentals',
    org: 'Online courses + practice',
    desc: 'Worked through HTML, CSS, and JavaScript from scratch. Built small projects — landing pages, a to-do app, a calculator — to make the concepts stick.',
  },
  {
    date: '2022',
    title: 'Started Computer Engineering',
    org: 'LDRP-ITR,GANDHINAGAR',
    desc: 'Chose CE because I wanted to understand how software actually works. First introduction to programming through C and Java.',
  },
]
