import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code2, Award, Briefcase, Phone } from "lucide-react";

type Page = "landing" | "about" | "skills" | "projects" | "experience" | "certificates" | "publications" | "contact";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [isLoading, setIsLoading] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: "SudhaarSetu",
      desc: "A platform focused on connecting citizens with authorities to report and resolve local issues efficiently.",
      github: "https://github.com/Sami-1105/E-Waste-.git",
      tags: ["Web Dev", "Civic Tech"],
    },
    {
      title: "ServiGo",
      desc: "A service-based application that helps users find and connect with nearby professionals easily.",
      github: "https://github.com/Sami-1105",
      tags: ["Mobile", "Services"],
    },
    {
      title: "CareMaa",
      desc: "AI-powered maternal & child healthcare platform featuring pregnancy risk prediction and healthcare guidance.",
      github: "https://github.com/Sami-1105/CareMaa.git",
      tags: ["AI/ML", "Healthcare"],
    },
    {
      title: "Airlytics",
      desc: "ML-powered aviation analytics platform transforming incident data into actionable insights.",
      github: "https://github.com/Sami-1105/AirLytics.git",
      tags: ["ML", "Analytics"],
    },
    {
      title: "CampVerse",
      desc: "An all-in-one campus management platform for Gen-Z students with AI tools and collaboration features.",
      github: "https://github.com/Sami-1105/CampVerse.git",
      tags: ["AI", "Education"],
    },
  ];

  const skills = {
    Languages: ["C++", "Java", "Python", "MySQL"],
    "AI / ML": [
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Computer Vision",
      "NLP",
      "Streamlit",
    ],
    "Web & Backend": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "FastAPI",
    ],
    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
    ],
  };

  const roles = [
    "OPEN TO HIRE ✓",
    "AI ENGINEER ✓",
    "FULL STACK DEVELOPER ✓",
    "OPEN SOURCE CONTRIBUTOR ✓",
  ];

  // Custom cursor
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (dot && ring) {
        (dot as HTMLElement).style.left = `${x}px`;
        (dot as HTMLElement).style.top = `${y}px`;
        (ring as HTMLElement).style.left = `${x}px`;
        (ring as HTMLElement).style.top = `${y}px`;
      }
      
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  // Landing page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  const Footer = () => (
    <footer className="py-10 px-8 border-t border-cyan-400/10 bg-[#020617]/80 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/Sami-1105"
                target="_blank"
                rel="noreferrer"
                className="social-icon w-11 h-11 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/samridhi-tyagi-554463324?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="social-icon w-11 h-11 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:samridhityagi1105@gmail.com"
                className="social-icon w-11 h-11 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+916395547010"
                className="social-icon w-11 h-11 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center text-sm text-slate-400 space-y-1">
              <p>samridhityagi1105@gmail.com</p>
              <p>+91 6395547010</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">
              © 2026 Samridhi Tyagi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  // Landing Page
  if (currentPage === "landing") {
    return (
      <div className="relative bg-[#020617] text-white min-h-screen overflow-hidden flex items-center justify-center selection:bg-cyan-400 selection:text-black">
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
        <div className="glow-blob blob1"></div>
        <div className="glow-blob blob2"></div>
        <div className="glow-blob blob3"></div>

        <div className="text-center z-10 px-6">
          {isLoading ? (
            <div className="space-y-8">
              <div className="loading-spinner w-24 h-24 mx-auto border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
              <h2 className="text-3xl font-bold text-cyan-400 glow-text animate-pulse">
                Loading Portfolio...
              </h2>
            </div>
          ) : (
            <div className="fade-in visible space-y-10">
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent glow-text">
                  Samridhi Tyagi
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-slate-300 font-light tracking-wide">
                AI-ML Engineer | Full Stack Developer
              </p>
              <div className="flex flex-wrap justify-center gap-5 mt-12">
                <button
                  onClick={() => setCurrentPage("about")}
                  className="btn-shine px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                >
                  Explore Portfolio
                </button>
                <a
                  href="Samridhi Tyagi_cv.pdf"
                  className="btn-shine px-8 py-4 rounded-2xl border border-cyan-400/30 bg-white/5 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#020617] text-white min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* CURSOR */}
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>

      {/* BACKGROUND LIGHTS */}
      <div className="glow-blob blob1"></div>
      <div className="glow-blob blob2"></div>
      <div className="glow-blob blob3"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage("landing")}
            className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent glow-text cursor-pointer hover:scale-105 transition"
          >
            Samridhi Tyagi
          </button>
          <div className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
            <button
              onClick={() => setCurrentPage("about")}
              className={`hover:text-cyan-400 transition ${currentPage === "about" ? "text-cyan-400" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage("skills")}
              className={`hover:text-cyan-400 transition ${currentPage === "skills" ? "text-cyan-400" : ""}`}
            >
              Skills
            </button>
            <button
              onClick={() => setCurrentPage("projects")}
              className={`hover:text-cyan-400 transition ${currentPage === "projects" ? "text-cyan-400" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => setCurrentPage("experience")}
              className={`hover:text-cyan-400 transition ${currentPage === "experience" ? "text-cyan-400" : ""}`}
            >
              Experience
            </button>
            <button
              onClick={() => setCurrentPage("certificates")}
              className={`hover:text-cyan-400 transition ${currentPage === "certificates" ? "text-cyan-400" : ""}`}
            >
              Certificates
            </button>
            <button
              onClick={() => setCurrentPage("publications")}
              className={`hover:text-cyan-400 transition ${currentPage === "publications" ? "text-cyan-400" : ""}`}
            >
              Publications
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className={`hover:text-cyan-400 transition ${currentPage === "contact" ? "text-cyan-400" : ""}`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* ABOUT PAGE */}
      {currentPage === "about" && (
      <section
        className="min-h-screen flex items-center justify-center px-6 md:px-14 lg:px-24 pt-24 pb-16 relative overflow-hidden"
      >
        {/* LEFT SIDE */}
        <div className="flex-1 z-10 max-w-3xl fade-in">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold mb-5">
            Welcome To My Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[95px] font-black leading-[0.95] tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent glow-text">
              Samridhi Tyagi
            </span>
          </h1>

          {/* LIVE ROLE SECTION */}
          <div className="live-role-wrapper mt-6">
            <span className="live-dot"></span>
            <div className="live-role">
              <span
                key={currentRole}
                className="inline-block animate-[slideUp_0.5s_ease-out]"
              >
                {roles[currentRole]}
              </span>
            </div>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mt-6">
            AI-ML student at VIT Bhopal with a CGPA of 8.7, passionate about
            Artificial Intelligence, Full-Stack Development, and building
            impactful digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-8 flex-wrap">
            <button
              onClick={() => setCurrentPage("contact")}
              className="btn-shine px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              Hire Me
            </button>
            <a
              href="Samridhi Tyagi_cv.pdf"
              className="btn-shine px-7 py-3 rounded-2xl border border-cyan-400/30 bg-white/5 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 mt-14">
            <div className="scale-in">
              <h2 className="text-5xl font-black text-cyan-400 glow-text">
                8.7
              </h2>
              <p className="text-slate-500 mt-2 uppercase tracking-[3px] text-xs">
                CGPA
              </p>
            </div>
            <div className="scale-in" style={{ transitionDelay: "0.1s" }}>
              <h2 className="text-5xl font-black text-blue-400 glow-text">
                5+
              </h2>
              <p className="text-slate-500 mt-2 uppercase tracking-[3px] text-xs">
                Projects
              </p>
            </div>
            <div className="scale-in" style={{ transitionDelay: "0.2s" }}>
              <h2 className="text-5xl font-black text-indigo-400 glow-text">
                50+
              </h2>
              <p className="text-slate-500 mt-2 uppercase tracking-[3px] text-xs">
                Contributions
              </p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 mt-10">
            <a
              href="https://github.com/Sami-1105"
              target="_blank"
              rel="noreferrer"
              className="social-icon w-12 h-12 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/samridhi-tyagi-554463324?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="social-icon w-12 h-12 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:samridhityagi1105@gmail.com"
              className="social-icon w-12 h-12 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center items-center relative z-10 mt-16 lg:mt-0 fade-in">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-[90px] rounded-full scale-110"></div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-pulse"></div>

            {/* Image */}
            <img
              src="profile.jpg.jpeg"
              alt="profile"
              className="relative z-10 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover rounded-full border-4 border-cyan-400 float-animation glow"
            />
          </div>
        </div>
      
      </section>
      )}

      {/* SKILLS PAGE */}
      {currentPage === "skills" && (
      <section
        className="min-h-screen py-28 px-8 md:px-20 bg-[#061122]/40 relative z-10 flex flex-col"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 fade-in">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mastery
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([title, items], index) => (
              <div
                key={title}
                className="glass-card rounded-[32px] p-7 fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-sm text-slate-300 hover:bg-cyan-400 hover:text-black transition cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    <div className="mt-auto">
          <Footer />
        </div>
      </section>
      )}

      {/* PROJECTS PAGE */}
      {currentPage === "projects" && (
      <section className="min-h-screen py-32 px-6 md:px-20 relative z-10 flex flex-col">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 fade-in">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-[30px] p-8 flex flex-col justify-between min-h-[320px] group fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl mb-6 group-hover:scale-110 transition">
                    ✦
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-cyan-400/5 border border-cyan-400/20 text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 text-cyan-400 font-semibold group-hover:translate-x-2 transition flex items-center gap-2">
                  View Project <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
      )}

      {/* EXPERIENCE PAGE */}
      {currentPage === "experience" && (
      <section
        className="min-h-screen py-32 px-6 md:px-20 bg-[#061122]/40 relative z-10 flex flex-col"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 fade-in">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="space-y-8">
            {[
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
            ].map((exp, index) => (
              <div
                key={exp.title}
                className="glass-card rounded-[30px] p-8 fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                      {exp.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
      )}

      {/* CERTIFICATIONS PAGE */}
      {currentPage === "certificates" && (
      <section
        className="min-h-screen py-32 px-6 md:px-20 relative z-10 flex flex-col"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 fade-in">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💻",
                title: "Deloitte Australia - Technology Job Simulation",
                desc: "Completed hands-on training and practical implementation projects focused on real-world workflows.",
              },
              {
                icon: "🤖",
                title: "Infosys Springboard 7.0 Internship",
                desc: "Hands-on experience with AI, NLP, and Generative AI technologies.",
              },
              {
                icon: "🏥",
                title: "Johns Hopkins University Hackathon",
                desc: "Participated in healthcare innovation hackathon solving real-world medical challenges.",
              },
              {
                icon: "🗄️",
                title: "Oracle Dev Gym",
                desc: "Completed MySQL fundamentals and database optimization concepts.",
              },
               {
                icon: "🗄️",   
                title: "CS107 C++ Programming",
                 desc: "Completed C++ fundamentals",
           },
           {
                icon: "🗄️",   
                title: "Python Essentials — Vityarthi",
                 desc: "Understood Python fundamentals",
           },
           {
                icon: "🗄️",   
                title: "NPTEL Cloud Computing",
                 desc: "Completed Cloud computing fundamentals",
           },
           {
                icon: "🗄️",   
                title: "Programming in Java — Vityarthi",
                 desc: "Completed Java fundamentals",
           },
           {
                icon: "🗄️",   
                title: "Fundamentals of AI and ML — Vityarthi",
                 desc: "Completed AI-ML fundamentals",
           },
           {
                icon: "🗄️",   
                title: "MATLAB Onramp — MathWorks",
                 desc: "Understood MATLAB fundamentals",
           },
            ].map((cert, index) => (
              <div
                key={cert.title}
                className="glass-card rounded-[30px] p-8 fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-2xl mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
      )}

      {/* PUBLICATIONS PAGE */}
      {currentPage === "publications" && (
      <section
        className="min-h-screen py-28 px-8 md:px-20 bg-[#061122]/40 relative z-10 flex flex-col"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 fade-in">
            Publications
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Agentic AI Framework for KidSafe Browser",
                desc: "Research work focused on balancing digital wellbeing, cybersecurity, and AI-powered protection systems for children against harmful online content.",
              },
              {
                title:
                  "Multidiag-X: AI-Powered Multi-Disease Risk Prediction and Medical Report Analyzer",
                desc: "Research work focused on improving health awareness and supporting informed decisions without replacing professional medical advice.",
              },
            ].map((pub, index) => (
              <div
                key={pub.title}
                className="glass-card rounded-[32px] p-10 fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-5">
                      {pub.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {pub.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
      )}

      {/* CONTACT PAGE */}
      {currentPage === "contact" && (
      <section
        className="min-h-screen py-28 px-8 md:px-20 text-center relative z-10 flex flex-col"
      >
        <div className="max-w-4xl mx-auto fade-in">
          <p className="uppercase tracking-[5px] text-cyan-400 mb-4">
            Contact
          </p>
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent glow-text">
              Amazing
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Open to AI projects, collaborations, internships, and innovative
            opportunities.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:samridhityagi1105@gmail.com"
              className="btn-shine px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300 shadow-[0_0_35px_rgba(34,211,238,0.4)] flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>

            <a
              href="https://github.com/Sami-1105"
              target="_blank"
              rel="noreferrer"
              className="btn-shine px-7 py-3 rounded-2xl border border-cyan-400/30 bg-white/5 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] transition duration-300 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 pt-10 border-t border-cyan-400/10">
            <p className="text-slate-400 text-lg">Connect with me:</p>
            <div className="flex gap-5">
              <a
                href="https://github.com/Sami-1105"
                target="_blank"
                rel="noreferrer"
                className="social-icon w-14 h-14 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/samridhi-tyagi-554463324?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="social-icon w-14 h-14 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="tel:+916395547010"
                className="social-icon w-14 h-14 rounded-full bg-white/5 border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400 transition"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <p className="text-slate-500 text-sm">+91 63955 47010</p>
          </div>
        </div>
        
      </section>
      )}
    </div>
  );
}
