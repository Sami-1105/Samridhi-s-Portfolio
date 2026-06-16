import { useEffect, useState, useCallback } from "react";
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Award, Briefcase, Menu, X } from "lucide-react";

type Page = "landing" | "about" | "skills" | "projects" | "experience" | "certificates" | "publications" | "contact";

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: "About", page: "about" },
  { label: "Skills", page: "skills" },
  { label: "Projects", page: "projects" },
  { label: "Experience", page: "experience" },
  { label: "Certificates", page: "certificates" },
  { label: "Publications", page: "publications" },
  { label: "Contact", page: "contact" },
];

const PROJECTS = [
  {
    title: "SudhaarSetu",
    desc: "A platform connecting citizens with authorities to report and resolve local issues efficiently.",
    github: "https://github.com/Sami-1105/E-Waste-.git",
    tags: ["Web Dev", "Civic Tech"],
    icon: "🏙️",
  },
  {
    title: "ServiGo",
    desc: "Service application helping users find and connect with nearby professionals easily.",
    github: "https://github.com/Sami-1105",
    tags: ["Mobile", "Services"],
    icon: "⚡",
  },
  {
    title: "CareMaa",
    desc: "AI-powered maternal & child healthcare platform featuring pregnancy risk prediction.",
    github: "https://github.com/Sami-1105/CareMaa.git",
    tags: ["AI/ML", "Healthcare"],
    icon: "🩺",
  },
  {
    title: "Airlytics",
    desc: "ML-powered aviation analytics platform transforming incident data into actionable insights.",
    github: "https://github.com/Sami-1105/AirLytics.git",
    tags: ["ML", "Analytics"],
    icon: "✈️",
  },
  {
    title: "CampVerse",
    desc: "All-in-one campus management platform for Gen-Z students with AI tools and collaboration.",
    github: "https://github.com/Sami-1105/CampVerse.git",
    tags: ["AI", "Education"],
    icon: "🎓",
  },
];

const SKILLS: { cat: string; items: string[]; icon: string }[] = [
  { cat: "Languages", items: ["C++", "Java", "Python", "MySQL"], icon: "{ }" },
  { cat: "AI / ML", items: ["TensorFlow", "Pandas", "NumPy", "Matplotlib", "Computer Vision", "NLP", "Streamlit"], icon: "⬡" },
  { cat: "Web & Backend", items: ["HTML", "CSS", "JavaScript", "React", "FastAPI"], icon: "◈" },
  { cat: "Tools", items: ["Git", "GitHub", "VS Code", "Google Colab"], icon: "◎" },
];

const EXPERIENCE = [
  {
    title: "Technical Team Member — Null VIT Bhopal",
    desc: "Organized cybersecurity CTF challenges focused on XSS and LLM vulnerabilities.",
  },
  {
    title: "Technical Team Member — Mharo Rajasthan Club",
    desc: "Coordinated technical operations and management for large-scale cultural events.",
  },
  {
    title: "Open Source Contributor — GSSoC 2025",
    desc: "Collaborated on open-source repositories contributing features, fixes, and improvements.",
  },
];

const CERTIFICATES = [
  { icon: "💼", name: "Deloitte Australia – Technology Job Simulation", desc: "Practical implementation projects focused on real-world workflows." },
  { icon: "🤖", name: "Infosys Springboard 7.0 Internship", desc: "Hands-on experience with AI, NLP, and Generative AI technologies." },
  { icon: "🏥", name: "Johns Hopkins University Hackathon", desc: "Healthcare innovation hackathon solving real-world medical challenges." },
  { icon: "🗄️", name: "Oracle Dev Gym", desc: "MySQL fundamentals and database optimization concepts." },
  { icon: "⌨️", name: "CS107 C++ Programming", desc: "Completed C++ fundamentals." },
  { icon: "🐍", name: "Python Essentials — Vityarthi", desc: "Python core concepts and practical applications." },
  { icon: "☁️", name: "NPTEL Cloud Computing", desc: "Cloud computing architecture and deployment models." },
  { icon: "☕", name: "Programming in Java — Vityarthi", desc: "Java OOP principles and standard libraries." },
  { icon: "🧠", name: "Fundamentals of AI and ML — Vityarthi", desc: "Core machine learning algorithms and theory." },
  { icon: "📐", name: "MATLAB Onramp — MathWorks", desc: "MATLAB environment and numerical computing basics." },
];

const PUBLICATIONS = [
  {
    title: "Agentic AI Framework for KidSafe Browser",
    desc: "Research on balancing digital wellbeing, cybersecurity, and AI-powered protection systems for children against harmful online content.",
  },
  {
    title: "Multidiag-X: AI-Powered Multi-Disease Risk Prediction and Medical Report Analyzer",
    desc: "Research improving health awareness and supporting informed decisions through multi-disease AI diagnostics without replacing professional advice.",
  },
];

const ROLES = ["OPEN TO HIRE ✓", "AI ENGINEER ✓", "FULL STACK DEVELOPER ✓", "OPEN SOURCE CONTRIBUTOR ✓"];

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [isLoading, setIsLoading] = useState(true);
  const [roleIdx, setRoleIdx] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Custom cursor
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot") as HTMLElement | null;
    const ring = document.querySelector(".cursor-ring") as HTMLElement | null;
    const move = (e: MouseEvent) => {
      if (dot) { dot.style.left = `${e.clientX}px`; dot.style.top = `${e.clientY}px`; }
      if (ring) { ring.style.left = `${e.clientX}px`; ring.style.top = `${e.clientY}px`; }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Loading
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  // Role rotation
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(p => (p + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  // Scroll animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".fade-in, .scale-in").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [currentPage]);

  // Close mobile nav on page change
  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const SocialLinks = ({ size = 36 }: { size?: number }) => (
    <div className="socials">
      {[
        { href: "https://github.com/Sami-1105", icon: <Github size={size * 0.44} />, label: "GitHub" },
        { href: "https://www.linkedin.com/in/samridhi-tyagi-554463324", icon: <Linkedin size={size * 0.44} />, label: "LinkedIn" },
        { href: "mailto:samridhityagi1105@gmail.com", icon: <Mail size={size * 0.44} />, label: "Email" },
        { href: "tel:+916395547010", icon: <Phone size={size * 0.44} />, label: "Phone" },
      ].map(s => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn" aria-label={s.label}>
          {s.icon}
        </a>
      ))}
    </div>
  );

  const Footer = () => (
    <footer className="footer">
      <SocialLinks size={32} />
      <span className="footer-copy">© 2026 Samridhi Tyagi</span>
    </footer>
  );

  // LANDING
  if (currentPage === "landing") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div className="cursor-dot" />
        <div className="cursor-ring" />
        <div className="ambient" />
        <div className="landing">
          {isLoading ? (
            <div className="loading-wrap">
              <div className="loading-ring" />
              <span className="loading-text">Loading</span>
            </div>
          ) : (
            <div className="landing-content fade-in visible">
              <div className="landing-label">Portfolio 2026</div>
              <h1 className="landing-name">
                Samridhi<br /><span>Tyagi</span>
              </h1>
              <p className="landing-title">AI Engineer · Full Stack Developer · Open Source Contributor</p>
              <div className="landing-actions">
                <button className="btn-primary" onClick={() => navigate("about")}>
                  Explore Portfolio
                </button>
                <a href="resume.pdf" className="btn-ghost" download>
                  Download CV
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <div className="ambient" />

      {/* NAVBAR */}
      <nav>
        <button className="nav-logo" onClick={() => navigate("landing")}>
          S<span>.</span>Tyagi
        </button>
        <div className={`nav-links${mobileNavOpen ? " open" : ""}`}>
          {NAV_ITEMS.map(n => (
            <button
              key={n.page}
              className={currentPage === n.page ? "active" : ""}
              onClick={() => navigate(n.page)}
            >
              {n.label}
            </button>
          ))}
        </div>
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileNavOpen(p => !p)}
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div className="page-section">

        {/* ABOUT */}
        {currentPage === "about" && (
          <div className="section">
            <div className="about-grid">
              <div>
                <div className="about-tag fade-in visible">Welcome</div>
                <h1 className="about-name fade-in visible">
                  Hi, I'm <span>Samridhi Tyagi</span>
                </h1>
                <div className="role-ticker">
                  <span className="ticker-dot" />
                  <span className="ticker-text" key={roleIdx}>{ROLES[roleIdx]}</span>
                </div>
                <p className="about-bio fade-in visible">
                  AI-ML student at VIT Bhopal with a CGPA of 8.7, passionate about Artificial Intelligence, Full-Stack Development, and building impactful digital experiences.
                </p>
                <div className="about-actions fade-in visible">
                  <button className="btn-primary" onClick={() => navigate("contact")}>Hire Me</button>
                  <a href="resume.pdf" className="btn-ghost" download>Download CV</a>
                </div>
                <div className="about-stats fade-in visible">
                  {[
                    { n: "8.7", l: "CGPA" },
                    { n: "5+", l: "Projects" },
                    { n: "50+", l: "Contributions" },
                  ].map(s => (
                    <div className="stat-item scale-in visible" key={s.l}>
                      <span className="stat-number">{s.n}</span>
                      <span className="stat-label">{s.l}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "1.75rem" }} className="fade-in visible">
                  <SocialLinks />
                </div>
              </div>
              <div className="profile-wrap fade-in visible">
               <div className="profile-ring">
           <img
      src="/profile.jpg.jpeg"
      alt="Samridhi Tyagi"
      className="profile-image"
    />
  </div>
</div>
            </div>
            <Footer />
          </div>
        )}

        {/* SKILLS */}
        {currentPage === "skills" && (
          <div className="section">
            <div className="section-eyebrow">Expertise</div>
            <h2 className="section-title">Technical Mastery</h2>
            <p className="section-desc">Technologies and tools I work with to build intelligent, scalable systems.</p>
            <div className="skills-grid">
              {SKILLS.map((s, i) => (
                <div
                  key={s.cat}
                  className="card fade-in"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="skill-card-header">
                    <div className="skill-icon">{s.icon}</div>
                    <span className="skill-cat-name">{s.cat}</span>
                  </div>
                  <div className="skill-pills">
                    {s.items.map(item => (
                      <span key={item} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        )}

        {/* PROJECTS */}
        {currentPage === "projects" && (
          <div className="section">
            <div className="section-eyebrow">Work</div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">A selection of projects spanning AI/ML, web development, and civic tech.</p>
            <div className="projects-grid">
              {PROJECTS.map((p, i) => (
                <a
                  key={p.title}
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card fade-in"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="project-icon">{p.icon}</div>
                  <div className="project-name">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                  <div className="project-link">
                    View on GitHub <ExternalLink size={13} />
                  </div>
                </a>
              ))}
            </div>
            <Footer />
          </div>
        )}

        {/* EXPERIENCE */}
        {currentPage === "experience" && (
          <div className="section">
            <div className="section-eyebrow">Journey</div>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-desc">Roles and contributions that shaped my technical and collaborative skills.</p>
            <div className="exp-list">
              {EXPERIENCE.map((exp, i) => (
                <div key={exp.title} className="exp-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="exp-icon-wrap">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <div className="exp-title">{exp.title}</div>
                    <div className="exp-desc">{exp.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        )}

        {/* CERTIFICATES */}
        {currentPage === "certificates" && (
          <div className="section">
            <div className="section-eyebrow">Learning</div>
            <h2 className="section-title">Certifications</h2>
            <p className="section-desc">Credentials and courses completed across AI, cloud, and software development.</p>
            <div className="cert-grid">
              {CERTIFICATES.map((c, i) => (
                <div key={c.name} className="cert-card fade-in" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <span className="cert-icon">{c.icon}</span>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-desc">{c.desc}</div>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        )}

        {/* PUBLICATIONS */}
        {currentPage === "publications" && (
          <div className="section">
            <div className="section-eyebrow">Research</div>
            <h2 className="section-title">Publications</h2>
            <p className="section-desc">Research contributions at the intersection of AI, safety, and healthcare.</p>
            <div className="pub-list">
              {PUBLICATIONS.map((p, i) => (
                <div key={p.title} className="pub-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="pub-title">{p.title}</div>
                  <div className="pub-desc">{p.desc}</div>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        )}

        {/* CONTACT */}
        {currentPage === "contact" && (
          <div className="section">
            <div className="contact-wrap">
              <div className="section-eyebrow" style={{ justifyContent: "center" }}>Get in Touch</div>
              <h2 className="section-title">Let's Build Something Amazing</h2>
              <p className="section-desc">Open to AI projects, collaborations, internships, and innovative opportunities.</p>
              <div className="contact-actions">
                <a href="mailto:samridhityagi1105@gmail.com" className="btn-primary">
                  <Mail size={15} /> Email Me
                </a>
                <a href="https://github.com/Sami-1105" target="_blank" rel="noreferrer" className="btn-ghost">
                  <Github size={15} /> GitHub
                </a>
              </div>
              <div className="contact-links-grid fade-in visible">
                {[
                  { href: "https://github.com/Sami-1105", icon: <Github size={16} />, text: "Sami-1105" },
                  { href: "https://linkedin.com/in/samridhi-tyagi-554463324", icon: <Linkedin size={16} />, text: "samridhi-tyagi" },
                  { href: "mailto:samridhityagi1105@gmail.com", icon: <Mail size={16} />, text: "samridhityagi1105@gmail.com" },
                  { href: "tel:+916395547010", icon: <Phone size={16} />, text: "+91 63955 47010" },
                ].map(c => (
                  <a key={c.text} href={c.href} target="_blank" rel="noreferrer" className="contact-card">
                    <span className="contact-card-icon">{c.icon}</span>
                    <span className="contact-card-text">{c.text}</span>
                  </a>
                ))}
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}
