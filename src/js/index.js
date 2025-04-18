
// TIMELINE WORK EXPERIENCE
const experiences = [
    {
        title: "Web Developer",
        start_date: "2023-01-16",
        end_date: null,
        summary: "Building UI using ReactJS and implementing State Management using Tool like Redux. Consuming API’s and Integrating them into the Application. Developing Server-Side Logic using Node.js and Integrating with Databases like MongoDB, MySQL. Implementing Authentication and Authorization Mechanism for Both Sides."
    },
]


// PROJECTS
const projects = [
    {
        title: "SwiftBuy",
        preview: 'project01.png',
        url: "https://swiftbuy-two.vercel.app"
    },
    {
        title: "Gadchiroli Travels",
        preview: 'project02.png',
        url: "https://gadchiroli-travel.web.app"
    },
]


// SKILLS
const skills = [
    {
        title: "HTML",
        icon: "fa-brands fa-html5",
        description: "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web, including text, images, and links."
    },
    {
        title: "CSS",
        icon: "fa-brands fa-css3-alt",
        description: "CSS (Cascading Style Sheets) is used to style and layout HTML elements, controlling aspects like colors, fonts, spacing, and responsiveness."
    },
    {
        title: "JavaScript",
        icon: "fa-brands fa-js",
        description: "JavaScript is a versatile programming language used to create dynamic and interactive content on websites, forms, and real-time updates."
    },
    {
        title: "React",
        icon: "fa-brands fa-react",
        description: "ReactJS is a popular JavaScript library for building fast, scalable, and dynamic user interfaces, primarily for single-page applications."
    },
    {
        title: "Node.js",
        icon: "fa-brands fa-node-js",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting and scalable, fast, and efficient application development."
    },
    {
        title: "Bootstrap",
        icon: "fa-brands fa-bootstrap",
        description: "Bootstrap is a popular front-end framework for building responsive and efficiently with pre-designed components and utilities."
    },
    {
        title: "SASS",
        icon: "fa-brands fa-sass",
        description: "Sass is a CSS preprocessor that extends CSS with features like variables, nesting, and mixins to make stylesheets more powerful and maintainable."
    },
    {
        title: "Database",
        icon: "fa fa-database",
        description: "MySQL is a relational database that uses structured tables and SQL for queries, while MongoDB is a NoSQL database that stores data in flexible, JSON-like documents."
    },
    {
        title: "GitHub",
        icon: "fa-brands fa-github",
        description: "Git is a version control system for tracking code changes, while GitHub is a popular cloud-based platform that hosts Git repositories, providing additional features like version control."
    },
]




// DATA HANDLE CODE
document.addEventListener('DOMContentLoaded', function () {
    const skillContainer = document.getElementById('skill_container');
    const projectContainer = document.getElementById('project_container');
    const timelineContainer = document.getElementById('timeline_container');


    // EXPERIENCE
    experiences?.forEach((item) => {
        const startDate = new Date(item.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        const endDate = item.end_date ? new Date(item.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'CURRENT';

        const timelineitem = document.createElement('div');
        timelineitem.className = 'timeline-item';
        timelineitem.innerHTML = `
            <div class="circle-dot"></div>
            <h3 class="timeline-date">
                <i class="fa fa-calendar"> ${startDate} - ${endDate}</i>
            </h3>
            <h4 class="timeline-title">${item.title?.toUpperCase()}</h4>
            <p class="timeline-text">${item.summary}</p>
        `;

        timelineContainer.appendChild(timelineitem);
    });


    // PROJECT
    projects?.forEach((item) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'portfolio-item padd-15';

        projectItem.innerHTML = `
            <div class="portfolio-item-inner shadow-dark">
                <a href=${item.url} title=${item.title.toUpperCase()} target="blank"
                    class="portfolio-img">
                    <img src="./public/assets/${item.preview}" alt=${item.title.toUpperCase()}>
                </a>
            </div>
        `;

        projectContainer.appendChild(projectItem);
    });

    // SKILLS
    skills?.forEach((item) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'service-item padd-15';

        skillItem.innerHTML = `
            <div class="service-item-inner">
                <div class="icon">
                    <i class="${item.icon}"></i>
                </div>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;

        skillContainer.appendChild(skillItem);
    });
});