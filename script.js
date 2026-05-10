// Portfolio Data
const skills = [
    { name: 'Java', level: 88, icon: '☕' },
    { name: 'SQL', level: 86, icon: '🗄️' },
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'C', level: 80, icon: '🔧' },
    { name: 'HTML', level: 92, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 92, icon: '⚡' },
    { name: 'ReactJS', level: 89, icon: '⚛️' },
    { name: 'Pandas', level: 85, icon: '📊' },
    { name: 'NumPy', level: 85, icon: '🔢' },
    { name: 'Scikit-Learn', level: 84, icon: '🤖' },
    { name: 'Matplotlib', level: 82, icon: '📈' },
    { name: 'Seaborn', level: 82, icon: '📉' },
    { name: 'Vercel', level: 80, icon: '🚀' },
    { name: 'Firebase', level: 83, icon: '🔥' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Data Analysis', level: 88, icon: '🧠' },
    { name: 'Machine Learning', level: 86, icon: '🤖' },
    { name: 'Deep Learning', level: 84, icon: '🧠' },
    { name: 'Frontend Development', level: 90, icon: '💻' },
];

const projects = [
    {
        title: 'PrepWise – An AI Powered Interview Coach',
        description: 'Developed an end-to-end interview preparation platform featuring intelligent resume ATS scoring, interactive voice-based mock interviews with real-time feedback, and detailed performance analytics.',
        tech: [
            'Tools Used: Next.js 16, React 19, TypeScript, Tailwind CSS, Firebase (Auth/Firestore)',
            'Google Gemini 1.5 Flash, Vercel AI SDK, Web Speech API'
        ]
    },
    {
        title: 'ScholarForge – An AI-Powered Collaborative Research Workspace',
        description: 'Built a full-stack research platform enabling AI-assisted academic paper drafting using a local RAG pipeline that performs semantic search over uploaded PDFs to generate cited, hallucination-free content.',
        tech: [
            'Tools Used: Next.js 16, React 19, TypeScript, Tailwind CSS, Prisma (PostgreSQL), Clerk Auth',
            'LangChain, Ollama (Llama 3.2), Liveblocks, Tiptap, Yjs, LaTeX'
        ]
    },
    {
        title: 'AI FormCoach – Real-Time Exercise Form Analyzer',
        description: 'Built a computer vision fitness application using OpenCV and MediaPipe to track 33 body landmarks in real-time, calculate joint angles, and provide instant posture correction feedback with automated rep counting across multiple exercises.',
        tech: [
            'Tools Used: Python, OpenCV, MediaPipe, NumPy, PyTest'
        ]
    }
];

const certificates = [
    {
        title: 'MERN Stack Developer',
        issuer: 'Apna College',
        icon: '🏆'
    },
    {
        title: 'Data science for Engineers',
        issuer: 'NPTEL',
        icon: '🎯'
    },
    {
        title: 'JavaScript',
        issuer: 'Scaler',
        icon: '⭐'
    }
];

const contacts = [
    { platform: 'Email', value: 'harshithababu006@gmail.com', icon: '📧', link: 'mailto:harshithababu006@gamil.com' },
    { platform: 'LinkedIn', value: 'harshitha2006', icon: '🔗', link: 'https://www.linkedin.com/in/harshitha2006/' },
    { platform: 'GitHub', value: 'Harshitha006', icon: '🐙', link: 'https://github.com/Harshitha006/' }
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
