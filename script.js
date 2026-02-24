// Portfolio Data
const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'TypeScript', level: 88, icon: '🔵' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Python', level: 88, icon: '🐍' },
    { name: 'Tailwind', level: 90, icon: '🌊' },
    { name: 'Firebase', level: 82, icon: '🔥' },
    { name: 'PostgreSQL', level: 80, icon: '🐘' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'JavaScript', level: 92, icon: '⚡' },
];

const projects = [
    {
        title: 'HackNect : An AI-powered Hackathon Matchmaker',
        description: 'HackNect connects participants with the right teams and projects based on their skills and interests using advanced machine learning algorithms.',
        tech: [
            'Frontend: Next.js, React, TypeScript, Tailwind',
            'Backend: Node.js, Express, TypeScript',
            'AI/ML: Python, FastAPI, Scikit-learn',
            'DB: PostgreSQL, MongoDB'
        ]
    },
    {
        title: 'PrepWise : AI-powered Interview Prep Platform',
        description: 'A comprehensive interview preparation platform that uses AI to analyze resumes, provide mock interviews, and offer personalized feedback.',
        tech: [
            'Frontend: Next.js, React, Tailwind, Framer Motion',
            'Backend: Next.js, Firebase',
            'AI: Gemini, Vercel AI SDK',
            'Parse: pdf-parse, Tesseract.js'
        ]
    }
];

const certificates = [
    {
        title: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        icon: '🏆'
    },
    {
        title: 'Google Cloud Professional',
        issuer: 'Google Cloud',
        icon: '🎯'
    },
    {
        title: 'Meta Frontend Developer',
        issuer: 'Meta',
        icon: '⭐'
    },
    {
        title: 'Microsoft Azure Expert',
        issuer: 'Microsoft',
        icon: '💫'
    }
];

const contacts = [
    { platform: 'Email', value: 'hello@example.com', icon: '📧', link: 'mailto:hello@example.com' },
    { platform: 'LinkedIn', value: 'in/devprofile', icon: '🔗', link: '#' },
    { platform: 'GitHub', value: 'github.com/devuser', icon: '🐙', link: '#' },
    { platform: 'Twitter', value: '@devtweet', icon: '🐦', link: '#' }
];

// Populate Skills
function initSkills() {
    const grid = document.getElementById('skillsGrid');
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <span class="skill-icon">${skill.icon}</span>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-progress" data-level="${skill.level}"></div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Populate Projects
function initProjects() {
    const grid = document.getElementById('projectsGrid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-thumb"></div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Populate Certificates
function initCertificates() {
    const grid = document.getElementById('certificatesGrid');
    certificates.forEach(cert => {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'cert-card';
        card.innerHTML = `
            <span class="cert-icon">${cert.icon}</span>
            <div class="cert-title">${cert.title}</div>
            <div class="cert-issuer">${cert.issuer}</div>
        `;
        grid.appendChild(card);
    });
}

// Populate Contact
function initContact() {
    const grid = document.getElementById('contactGrid');
    contacts.forEach(contact => {
        const card = document.createElement('a');
        card.href = contact.link;
        card.className = 'contact-card';
        card.innerHTML = `
            <span class="contact-icon">${contact.icon}</span>
            <span class="contact-label">${contact.platform}</span>
            <span class="contact-value">${contact.value}</span>
        `;
        grid.appendChild(card);
    });
}

// Handle Animations on Scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-progress')) {
                    const level = entry.target.getAttribute('data-level');
                    entry.target.style.width = `${level}%`;
                } else {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);

    // Observe skill bars
    document.querySelectorAll('.skill-progress').forEach(bar => observer.observe(bar));
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(5, 5, 5, 0.8)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.padding = '1rem 0';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.padding = '1.5rem 0';
        nav.style.borderBottom = 'none';
    }
});

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initSkills();
    initProjects();
    initCertificates();
    initContact();
    initScrollAnimations();
});
