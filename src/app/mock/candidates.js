// Development mode: use local mock candidates instead of calling the API

export const data = [
  {
    id: "1",
    name: "Radhika Jain",
    position: "Sr. Product Manager",
    company: "HealthifyMe",
    location: "Bangalore, India",
    education: "B.Tech - Manipal Institute of Tech",
    skills: "Product Strategy | A/B Testing | Figma | Agile",
    experience:
      "5+ years building mobile-first healthtech products, managing 3 squads and driving 20%+ conversion improvements. Ex-Zomato, Ex-Flipkart.",
    email: "radhika.jain@gmail.com",
    phone: "+91-98XXXXXXX",
    avatar: "RJ",
    avatarColor: "bg-red-500",
    isVerified: true,
    isLocked: true,
    // Additional data for profile page
    university: "Manipal Institute of Technology",
    experiences: [
      {
        company: "HealthifyMe",
        role: "Sr. Product Manager",
        period: "2022 - Present",
        description:
          "Led product strategy for mobile health platform, managing 3 squads and driving 20%+ conversion improvements",
      },
      {
        company: "Zomato",
        role: "Product Manager",
        period: "2020 - 2022",
        description:
          "Built and scaled food delivery features, improving user engagement by 35%",
      },
    ],
    highlights: [
      { label: "Product", color: "bg-blue-100 text-blue-800" },
      { label: "Healthtech", color: "bg-green-100 text-green-800" },
      { label: "Mobile", color: "bg-orange-100 text-orange-800" },
      { label: "Analytics", color: "bg-pink-100 text-pink-800" },
      { label: "Leadership", color: "bg-purple-100 text-purple-800" },
    ],
    summary:
      "Experienced product manager with 5+ years building mobile-first healthtech products, managing cross-functional teams and driving significant conversion improvements. Strong background in analytics and user-centered design.",
    aiMatch: 92,
  },
  {
    id: "2",
    name: "Pratibha Sharma",
    position: "Product Manager",
    company: "Quick Sun Technology Pvt Ltd",
    location: "Bangalore, India",
    education: "B.Tech - IIT Delhi",
    skills: "Product Strategy | User Research | Data Analytics | Agile",
    experience:
      "2+ years building B2B SaaS products with focus on user experience and conversion optimization.",
    email: "pratibha.sharma@gmail.com",
    phone: "+91-99XXXXXXX",
    avatar: "PS",
    avatarColor: "bg-purple-500",
    isVerified: false,
    isLocked: true,
    university: "Indian Institute of Technology, Delhi",
    experiences: [
      {
        company: "Quick Sun Technology",
        role: "Product Manager",
        period: "2021 - Present",
        description:
          "Building B2B SaaS products with focus on user experience and conversion optimization",
      },
    ],
    highlights: [
      { label: "B2B SaaS", color: "bg-blue-100 text-blue-800" },
      { label: "UX", color: "bg-green-100 text-green-800" },
      { label: "Analytics", color: "bg-orange-100 text-orange-800" },
    ],
    summary:
      "Product manager with 2+ years experience in B2B SaaS, focusing on user experience and data-driven product decisions.",
    aiMatch: 78,
  },
  {
    id: "3",
    name: "Hitesh Prasad",
    position: "Senior Product Manager",
    company: "TechCorp Solutions",
    location: "Mumbai, India",
    education: "MBA - IIM Bangalore",
    skills: "Product Strategy | Analytics | Team Leadership | Go-to-Market",
    experience:
      "6+ years in product management with expertise in B2B SaaS, team leadership, and driving product growth.",
    email: "hitesh.prasad@gmail.com",
    phone: "+91-97XXXXXXX",
    avatar: "HP",
    avatarColor: "bg-green-500",
    isVerified: true,
    isLocked: true,
    university: "Indian Institute of Management, Bangalore",
    experiences: [
      {
        company: "TechCorp Solutions",
        role: "Senior Product Manager",
        period: "2021 - Present",
        description:
          "Leading product strategy for enterprise SaaS platform, managing cross-functional teams and driving 30%+ growth",
      },
      {
        company: "StartupXYZ",
        role: "Product Manager",
        period: "2019 - 2021",
        description:
          "Built and launched core product features, resulting in 50% increase in user engagement",
      },
    ],
    highlights: [
      { label: "B2B SaaS", color: "bg-blue-100 text-blue-800" },
      { label: "Leadership", color: "bg-green-100 text-green-800" },
      { label: "Analytics", color: "bg-orange-100 text-orange-800" },
      { label: "Growth", color: "bg-pink-100 text-pink-800" },
    ],
    summary:
      "Senior product manager with 6+ years experience in B2B SaaS, specializing in team leadership and driving product growth through data-driven decisions.",
    aiMatch: 88,
  },
  {
    id: "4",
    name: "Mehul Sharma",
    position: "Product Manager",
    company: "Ransh Innovations pvt ltd.",
    location: "Delhi, India",
    education: "B.Tech - NIT Trichy",
    skills: "Product Strategy | User Experience | Data Analysis | Scrum",
    experience:
      "1+ year in product management with strong background in analytics and user-centered design.",
    email: "mehul.sharma@gmail.com",
    phone: "+91-96XXXXXXX",
    avatar: "MS",
    avatarColor: "bg-orange-500",
    isVerified: false,
    isLocked: true,
    university: "National Institute of Technology, Trichy",
    experiences: [
      {
        company: "Ransh Innovations",
        role: "Product Manager",
        period: "2023 - Present",
        description:
          "Leading product development for innovative tech solutions with focus on user experience and data analysis",
      },
    ],
    highlights: [
      { label: "UX Design", color: "bg-blue-100 text-blue-800" },
      { label: "Analytics", color: "bg-green-100 text-green-800" },
      { label: "Innovation", color: "bg-orange-100 text-orange-800" },
    ],
    summary:
      "Product manager with strong background in analytics and user-centered design, focusing on innovative tech solutions and data-driven product decisions.",
    aiMatch: 75,
  },
  {
    id: "5",
    name: "Jitu Gandhare",
    position: "Frontend Developer",
    company: "Independent",
    location: "Pune, India",
    education: "B.Tech - Pune University",
    skills: "React | JavaScript | HTML/CSS | Node.js",
    experience:
      "2+ years in frontend development with expertise in React and modern web technologies.",
    email: "jitu.gandhare@gmail.com",
    phone: "+91-95XXXXXXX",
    avatar: "JG",
    avatarColor: "bg-indigo-500",
    isVerified: false,
    isLocked: true,
    university: "Pune University",
    experiences: [
      {
        company: "Freelance",
        role: "Frontend Developer",
        period: "2022 - Present",
        description:
          "Building responsive web applications using React, JavaScript, and modern frontend technologies",
      },
    ],
    highlights: [
      { label: "Frontend", color: "bg-blue-100 text-blue-800" },
      { label: "React", color: "bg-green-100 text-green-800" },
      { label: "JavaScript", color: "bg-orange-100 text-orange-800" },
    ],
    summary:
      "Frontend developer with 2+ years experience in React and modern web technologies, specializing in building responsive and user-friendly web applications.",
    aiMatch: 70,
  },
];
