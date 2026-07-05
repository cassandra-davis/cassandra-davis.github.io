var CV_DATA = {

  personal: {
    name: "Cassandra Davis",
    title: "Engineer • Analyst • Technical Communicator",

    photo: "profile.png",

    email: "cassi.g.davis@gmail.com",
    linkedin: "https://www.linkedin.com/in/cassandra-davis-761877108/",
    github: "https://github.com/cassandra-davis",

    summary:
      "Senior Calibration and Test Engineer with 6+ years of experience in automotive engineering, data analysis, testing and validation. Specialising in engineering reporting systems, automation, technical documentation and cross-functional coordination across international teams."
  },

  hero: {
    headline: "Building Clarity from Complexity",
    subtitle: "Technical Documentation, Engineering Reporting Systems & Process Automation",
    paragraphs: [
      "I help engineering teams turn complex data, processes and technical knowledge into structured, usable systems.",
      "With 6+ years in automotive calibration, testing and data analysis, I specialise in reporting automation, technical documentation and engineering information systems."
    ],
    tags: [
      "Python",
      "Automation",
      "Technical Documentation",
      "Reporting Systems",
      "Data Analysis",
      "Knowledge Management"
    ]
  },

  // Stats variants: portfolio and CV-specific
  stats_portfolio: [
    { value: "6+", label: "Years Engineering Experience" },
    { value: "20+", label: "Automation & Reporting Tools Built" },
    { value: "Bosch", label: "Automotive Engineering Background" }
  ],

  stats_cv: [
    { value: "6+", label: "Years Engineering Experience" },
    { value: "20+", label: "Automation & Reporting Tools Built" },
    { value: "5+", label: "Countries Coordinated" },
    { value: "Bosch", label: "Automotive Engineering Background" }
  ],

  experience: [

    {
      company: "SAX Power GmbH",
      role: "Senior Test Engineer & Project Coordinator",
      dates: "2025 – Present",
      bullets: [
        "Leading core battery software testing and validation activities",
        "Managing project timelines, deliverables and cross-functional coordination",
        "Designing automation tools and reporting workflows to improve efficiency and tracking"
      ]
    },

    {
      company: "Bosch",
      role: "Senior Calibration Engineer",
      dates: "2021 – 2025",
      bullets: [
        "Delivered calibration, testing and validation for automotive systems",
        "Designed and implemented 20+ automation tools for reporting and analysis",
        "Led cross-functional collaboration across software, hardware and quality teams",
        "Supported full lifecycle development from pre-production to Job#1"
      ]
    },

    {
      company: "Bosch Graduate Programme",
      role: "Graduate Engineer",
      dates: "2019 – 2021",
      bullets: [
        "Rotational programme across calibration, testing and validation",
        "Developed early automation and data analysis workflows",
        "Supported engineering test campaigns and reporting systems"
      ]
    }
  ],

  achievements: [

    {
      title: "Project Leadership & Efficiency",
      text: "Led core project activities for confidential software, designing 20+ automation tools to improve engineering reporting, tracking and workflow efficiency."
    },

    {
      title: "International Test Campaigns",
      text: "Planned and led 2 international test campaigns including scheduling, instrumentation, resources and cross-team coordination."
    },

    {
      title: "Risk & Quality Management",
      text: "Led 10+ structured investigations using 8D and root cause analysis to identify risks and implement corrective actions."
    },

    {
      title: "Global Engineering Coordination",
      text: "Coordinated across 6+ departments and 5+ countries, improving communication and standardising engineering workflows."
    },

    {
      title: "Leadership & Initiatives",
      text: "Led sustainability communications (35+ newsletters, 5000+ employees), organised Women@Bosch events over 3+ years, and contributed to 50+ innovation ideas."
    },

    {
      title: "Full Lifecycle Delivery",
      text: "Managed engineering projects from pre-production to series production launch (Job#1) ensuring full milestone completion."
    }
  ],

  skills: {

    testing: [
      "HiL Testing",
      "Vehicle Testing",
      "Regression Testing",
      "Validation"
    ],

    tools: [
      "Python",
      "Pandas",
      "Power BI",
      "Excel",
      "Jupyter",
      "Markdown",
      "Git",
      "PowerPoint"
    ],

    methods: [
      "FMEA",
      "8D",
      "Root Cause Analysis",
      "Continuous Improvement",
      "Project Planning"
    ]
  },

  languages: [
    { lang: "English", level: "Native" },
    { lang: "Italian", level: "A2" },
    { lang: "German", level: "A1" }
  ],

  interests: [
    "Technical documentation systems",
    "Knowledge management",
    "Information architecture",
    "Automation",
    "Creative projects"
  ],

  about_portfolio: {
    heading: "About Me",
    paragraphs: [
      "I'm a Senior Calibration and Test Engineer with 6+ years of experience in automotive systems, data analysis, and engineering communication.",
      "I focus on building structured systems that turn engineering complexity into clarity."
    ],
    bullets: [
      "Automating reporting workflows",
      "Creating technical documentation",
      "Structuring engineering knowledge",
      "Improving data usability"
    ],
    exploring: [
      "Technical documentation systems",
      "Knowledge management workflows",
      "Information architecture",
      "Python automation"
    ]
  },

  services: [
    {
      title: "📊 Engineering Data Systems",
      text: "Transforming raw engineering data into clear reporting and decision-support systems."
    },
    {
      title: "⚙️ Reporting Automation",
      text: "Automating repetitive reporting workflows using Python and structured processes."
    },
    {
      title: "📚 Technical Documentation",
      text: "Creating clear documentation, procedures, guides and engineering knowledge resources."
    },
    {
      title: "🗂 Information Organisation",
      text: "Structuring technical information so teams can find, understand and reuse it effectively."
    }
  ],

  /*
  projects: [
    {
      title: "Predictive Maintenance Reporting System",
      image: "images/project-dashboard.png",
      link: "projects/predictive-maintenance/",
      text: "Developed analytics workflow to identify early fault indicators in automotive systems."
    },
    {
      title: "Automated Test Reporting Tool",
      image: "images/project-automation.png",
      link: "projects/test-automation/",
      text: "Built Python-based reporting pipeline reducing manual effort."
    },
    {
      title: "Engineering Documentation System",
      image: "images/project-documentation.png",
      link: "projects/technical-writing/",
      text: "Structured documentation improving clarity and onboarding efficiency."
    }
  ]
    */

  projects: [
    {
      title: "Automated Engineering Reports",
      image: "projects/engineering-reporting-system/assets/html-screenshot.png",
      link: "projects/engineering-reporting-system/",
      text: `- Built Python + Quarto pipeline for automated reporting  
            - Converts raw validation data into KPIs, charts, and insights  
            - Outputs structured HTML, PDF, and DOCX reports  
            - Improves consistency and reduces manual reporting effort`
    },
    {
      title: "Technical Documentation Improvement",
      image: "images/project-documentation.png",
      link: "projects/technical-documentation-improvement/",
      text: "Improved engineering documentation structure and readability through standardisation, rewriting, and information design."
    },
    {
      title: "Engineering Procedure & Systems Design",
      image: "images/project-procedures.png",
      link: "projects/engineering-procedure-systems-design/",
      text: "Developed structured engineering workflows and procedures to improve consistency, repeatability, and knowledge transfer."
    }
  ]

};

window.CV_DATA = CV_DATA;

