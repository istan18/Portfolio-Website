import React, { useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="pt-40 pb-24 min-h-screen flex items-center bg-gradient-to-tr from-peach via-primary to-lavender bg-[length:200%_200%] animate-[gradientShift_15s_ease_infinite] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 w-full">
        <div className="text-center">
          <div className="mb-8">
            <img
src={profile}
              alt="Christian Tolentino"
              className="w-[300px] h-[300px] rounded-full object-cover border-8 border-white shadow-2xl animate-[float_3s_ease-in-out_infinite] transition-transform duration-300 inline-block hover:scale-105"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 font-poppins">
            Hi, I'm <span className="bg-white/20 px-2 rounded-lg inline-block">Christian Tolentino</span>
          </h1>
          <p className="text-lg md:text-xl opacity-95 mb-3 font-semibold">
            Software Engineer | Computer Science Honours Student @ UNSW
          </p>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-8 opacity-90">
            Ex-Splunk, Ex-Mastercard, Ex-Atlassian | Casual Academic @ UNSW | Passionate about building scalable solutions
          </p>
          <div className="flex gap-3 justify-center flex-wrap mb-8">
            <a className="bg-white text-primary font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition font-poppins" href="#projects">
              View My Work
            </a>
            <a className="bg-white/20 text-white border-2 border-white font-bold px-6 py-3 rounded-lg backdrop-blur hover:bg-white hover:text-primary transform hover:-translate-y-1 transition font-poppins" href="#blog">
              Read My Blog
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            {[
              ["LinkedIn", "https://www.linkedin.com/in/christian-tolentino-99724b122/", "fab fa-linkedin"],
              ["GitHub", "https://github.com/christian-tolentino", "fab fa-github"],
              ["Email", "mailto:christian.tolentino@example.com", "fas fa-envelope"],
              ["Resume", "assets/Christian_Tolentino_Resume.pdf", "fas fa-file-download"],
            ].map(([label, href, icon]) => (
              <a
                key={label}
                href={href as string}
                {...(label === "Resume" ? { download: true } : {})}
                aria-label={label as string}
                data-tooltip={label as string}
                className="text-white text-[1.5rem] w-[55px] h-[55px] flex items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/40 transition transform hover:-translate-y-1 hover:rotate-6 hover:scale-110 relative"
              >
                <i className={icon as string} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream to-white relative">
      <div className="absolute top-12 right-10 text-5xl opacity-10 select-none pointer-events-none">🌸</div>
      <div className="absolute bottom-12 left-10 text-4xl opacity-10 select-none pointer-events-none">🌿</div>
      <div className="max-w-4xl mx-auto px-5">
        <SectionTitle>About Me</SectionTitle>
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(224,159,125,0.15)] border-4 border-primary p-8 md:p-10 relative z-10">
          <div className="text-cute-brown text-[1.05rem] leading-8 space-y-6">
            <p>
              I'm currently pursuing a Bachelor of Advanced Computer Science (Honours) at UNSW. As a Casual Academic at UNSW, I
              teach Object-Oriented Programming & Design to university students, helping shape the next generation of software
              engineers.
            </p>
            <p>
              My professional journey includes software engineering internships at <strong>Splunk</strong>, <strong>Mastercard</strong>, and
              <strong> Atlassian</strong>, where I enhanced my full-stack development skills and learned to seamlessly integrate into agile
              environments. I've worked on everything from backend infrastructure and build systems to full-stack web
              applications.
            </p>
            <p>
              Beyond academics and work, I'm passionate about mentoring and community involvement. I've volunteered with various
              UNSW societies, teaching high school students programming and helping first-year students transition to
              university life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    {
      role: "Casual Academic",
      company: "UNSW Computer Science and Engineering",
      date: "Feb 2024 - Present",
      bullets: [
        "Tutor for COMP2511 (Object-Oriented Programming & Design)",
        "Delivered course material via tutorials and marked assignments and lab exercises",
        "Mentored students in software design patterns, Java, and OOP principles",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Splunk",
      date: "May 2025 - Oct 2025",
      bullets: [
        "16-week part-time Backend Software Engineer in the Build & Workflow Engine team",
        "Worked with Argo, Bazel, Kubernetes, CMake, and C++ on build infrastructure",
        "Contributed to workflow automation and build system improvements",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Mastercard",
      date: "Dec 2024 - Jan 2025",
      bullets: [
        "9-week internship working on Mastercard Payment Gateway Service (Team Pikachu - Performance Engineering)",
        "Full-stack development using Vue.js, Express.js, Node.js, and PostgreSQL for regression testing monitor",
        "Developed Python scripts integrating Jenkins API and Confluence API to automate Instant Rollback Testing documentation",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Atlassian",
      date: "Nov 2023 - Feb 2024",
      bullets: [
        "12-week Backend Software Engineer internship in Shard Collections (SCOL) team",
        "Built automated process to identify and resolve misconfigured AWS Aurora RDS autoscaling policies using Kotlin and Spring Boot",
        "Created observability wallboard using Terraform, Databricks, and SignalFX to track project impact",
        "Contributed to large-scale codebase refactoring project focusing on domain segregation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-5">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-peach" />
          {items.map((item) => (
            <div key={item.company + item.date} className="relative pl-12 mb-10 timeline-item">
              <div className="absolute left-[9px] top-0 w-5 h-5 rounded-full bg-primary ring-4 ring-white shadow" />
              <div className="bg-white rounded-xl border-2 border-primary shadow p-6">
                <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                <h4 className="text-primary font-bold uppercase tracking-wide mb-1">{item.company}</h4>
                <p className="text-cute-brown text-sm mb-3">{item.date}</p>
                <ul className="list-none space-y-2 text-cute-brown">
                  {item.bullets.map((b) => (
                    <li key={b}>▹ {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const cards = [
    {
      title: "WebSVF",
      desc:
        "Web-based platform leveraging Static Value Flow (SVF), an open-source C static code analyser. Integrates LLMs and AI for advanced code analysis capabilities.",
      icon: "fas fa-brain",
      tags: ["Python", "C++", "LLM", "AI", ".NET", "C#"],
      code: "https://github.com/unsw-cse-comp99-3900/capstone-project-3900w11aedg",
    },
    {
      title: "StreetCred - Identity Wallet",
      desc:
        "Self-sovereign-identity (SSI) mobile application leveraging digital identifiers and cryptography to revolutionise how users store and present identification.",
      icon: "fas fa-mobile-alt",
      tags: ["React Native", "Node.js", "Express.js", "Cryptography", "Tailwind CSS", "Figma"],
      code: "https://github.com/unsw-cse-comp99-3900/capstone-project-3900w11aedg",
    },
    {
      title: "Profile Page Maker",
      desc:
        "Full-stack web application developed as part of CSESoc Development training program. Led a team as Training Lead to mentor peers in web development.",
      icon: "fas fa-users",
      tags: ["MongoDB", "Express", "React", "Node.js", "MERN Stack"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-cream">
      <div className="max-w-7xl mx-auto px-5">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl overflow-hidden border-4 border-primary shadow transition hover:-translate-y-1 hover:shadow-xl project-card">
              <div className="h-48 bg-gradient-to-r from-primary via-peach to-lavender relative overflow-hidden border-b-4 border-white flex items-center justify-center">
                <i className={`${c.icon} text-white text-5xl`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-poppins">{c.title}</h3>
                <p className="text-cute-brown mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map((t) => (
                    <span key={t} className="inline-block bg-gradient-to-r from-primary to-peach text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                {c.code && (
                  <a href={c.code} target="_blank" className="text-primary font-bold hover:text-peach transition inline-flex items-center gap-2">
                    <i className="fab fa-github" /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const sections = [
    { icon: "fas fa-code", title: "Languages", tags: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C#", "Kotlin", "SQL"] },
    { icon: "fas fa-layer-group", title: "Frameworks & Libraries", tags: ["React Native", "Vue.js", "Node.js", "Express.js", "Spring Boot", ".NET", "Tailwind CSS"] },
    { icon: "fas fa-database", title: "Databases", tags: ["PostgreSQL", "MongoDB", "AWS Aurora RDS"] },
    { icon: "fas fa-tools", title: "Tools & DevOps", tags: ["Kubernetes", "Docker", "AWS", "Terraform", "Bazel", "Argo", "Jenkins", "CMake", "Gradle"] },
    { icon: "fas fa-project-diagram", title: "Platforms & Observability", tags: ["Jira", "Confluence", "Databricks", "SignalFX", "Artifactory", "Rally", "Figma"] },
    { icon: "fas fa-lightbulb", title: "Specializations", tags: ["AI/LLM", "Static Analysis", "Cryptography", "Software Design", "OOP", "MVC"] },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border-4 border-primary p-6 shadow transition hover:-translate-y-1 hover:shadow-xl skill-category">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-poppins">
                <i className={`${s.icon} text-primary`} /> {s.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="inline-block bg-gradient-to-r from-primary to-peach text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const posts = [
    { title: "Getting Started with Static Analysis in C++", meta: ["Jan 15, 2025", "5 min read"], icon: "fas fa-code", href: "blog.html#post-1", tag: "Tutorial", desc: "Exploring the fundamentals of static code analysis and how tools like SVF can help identify bugs before runtime..." },
    { title: "My Internship Journey at Splunk", meta: ["Jan 10, 2025", "8 min read"], icon: "fas fa-laptop-code", href: "blog.html#post-2", tag: "Experience", desc: "Lessons learned from working on build systems and CI/CD pipelines at a leading observability company..." },
    { title: "Building a Self-Sovereign Identity Wallet", meta: ["Jan 5, 2025", "6 min read"], icon: "fas fa-shield-alt", href: "blog.html#post-3", tag: "Technology", desc: "Deep dive into cryptography, digital identifiers, and how we built StreetCred from the ground up..." },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-white to-cream">
      <div className="max-w-7xl mx-auto px-5">
        <SectionTitle>Latest Blog Posts</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-2xl overflow-hidden border-4 border-primary shadow transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-56 bg-gradient-to-r from-peach via-primary to-lavender relative overflow-hidden flex items-center justify-center">
                <i className={`${p.icon} text-white text-5xl`} />
                <div className="absolute top-3 right-3 bg-white text-primary px-3 py-1 rounded-full text-sm font-bold shadow">{p.tag}</div>
              </div>
              <div className="p-6 flex flex-col">
                <div className="flex gap-4 text-cute-brown text-sm mb-2">
                  <span className="flex items-center gap-2"><i className="far fa-calendar text-primary" /> {p.meta[0]}</span>
                  <span className="flex items-center gap-2"><i className="far fa-clock text-primary" /> {p.meta[1]}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins">{p.title}</h3>
                <p className="text-cute-brown mb-4">{p.desc}</p>
                <a href={p.href} className="text-primary font-bold hover:text-peach transition inline-flex items-center gap-2">
                  Read More <i className="fas fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="blog.html" className="inline-block bg-white text-primary font-bold px-6 py-3 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useEffect(() => {
    // Animate-on-scroll for cards
    const animated = document.querySelectorAll('.project-card, .skill-category, .timeline-item');
    animated.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    animated.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <BlogPreview />
    </>
  );
}
