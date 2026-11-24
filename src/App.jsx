import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  CheckCircle2, Code2, Database, Github, Globe2, Layers3, Linkedin,
  Mail, Menu, MessageSquareCode, Network, Server, Sparkles, X, Award,
  Download, MapPin, Terminal
} from 'lucide-react'

const profile = {
  name: 'Dixitkumar Sathwara',
  role: 'Senior Software Engineer · SDE3',
  summary: 'I build scalable backend platforms, reliable APIs and AI-powered products that solve real business problems. With 10+ years in software engineering, I bring hands-on technical ownership, product thinking and a strong focus on engineering quality.',
  location: 'Ahmedabad, Gujarat, India',
  linkedin: 'https://www.linkedin.com/in/dixitsathwara/',
  github: 'https://github.com/DIXITSATHWARA', // Add your exact GitHub profile URL before publishing.
  email: 'djsathwara540@gmail.com',
}

const skills = [
  { title: 'Backend Engineering', icon: Server, items: ['Node.js (Express)', 'Laravel', 'PHP', 'Python', 'REST API Design', 'Microservices', 'MVC', 'Clean Architecture', 'Serverless', 'Python (Fast API)'] },
  { title: 'AI & LLM Engineering', icon: BrainCircuit, items: ['OpenAI (GPT)', 'Google Gemini', 'Prompt Engineering', 'RAG', 'Qdrant Vector Search', 'Agentic AI', 'Tool Calling'] },
  { title: 'Databases & Data', icon: Database, items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Indexing', 'Query Optimization', 'Caching'] },
  { title: 'Cloud & DevOps', icon: Globe2, items: ['AWS Lambda', 'AWS EC2', 'AWS S3', 'AWS SQS', 'Docker', 'PM2', 'CI/CD', 'Git', 'GitHub', 'GitLab'] },
  { title: 'Frontend Engineering', icon: Code2, items: ['React.js', 'JavaScript', 'jQuery'] },
  { title: 'Integrations & Security', icon: Network, items: ['WATI', 'AiSensy', 'Stripe', 'PayPal', 'Zumrails', 'DocuSign', 'DHL', 'OAuth', 'JWT', 'RBAC', 'API Security', 'Postman', 'Swagger', 'Cursor AI'] },
]

const projects = [
  { number: '01', type: 'AI · HR TECHNOLOGY', title: 'AI Resume Transformation', description: 'Built Node.js services on AWS Lambda for ATS health checks, CV scoring and resume transformation. Services are triggered asynchronously through AWS SQS from the core Laravel product and use LLMs to assess ATS compliance and parsing quality.', impact: '1,000+ monthly users and ₹3L+ monthly revenue.', tags: ['Node.js', 'AWS Lambda', 'AWS SQS', 'OpenAI', 'Gemini', 'ATS'] },
  { number: '02', type: 'AI · RECRUITMENT', title: 'Tailored CV Services & Editor', description: 'Built job-specific CV tailoring services for keyword injection, skill alignment and job-description mapping, integrated with a rich multi-template, real-time CV editor.', impact: '500+ paying candidates and ₹2L+ monthly revenue.', tags: ['Node.js', 'AWS Lambda', 'AWS SQS', 'LLM Integration', 'React'] },
  { number: '03', type: 'SAAS · ENTERPRISE', title: 'Recruiter Access & Talent Portal', description: 'Core backend engineering for a recruiter platform used by 5,000+ recruiters across a 3M+ candidate talent pool. Optimized caching, database indexing and queries, and automated candidate workflows and hiring communications.', impact: 'Approximately 30% faster page loads and 60% less recruiter manual workload.', tags: ['Node.js', 'Laravel', 'MySQL', 'MongoDB', 'AWS', 'React'] },
  { number: '04', type: 'AI · ENTERPRISE KNOWLEDGE', title: 'RAG & Agentic AI Workflows', description: 'Designed a retrieval-augmented generation pipeline using Qdrant vector search and MongoDB to ground LLM answers in enterprise documents and database records. Built agentic workflows with planning and tool calling over internal queries and third-party APIs.', impact: 'Grounded enterprise answers and automated multi-step task execution.', tags: ['Qdrant', 'MongoDB', 'RAG', 'LLMs', 'Tool Calling'] },
  { number: '05', type: 'ERP · BUSINESS SYSTEMS', title: 'ERP & HRMS Platform', description: 'Architected ERP and HRMS capabilities for 1,000+ users, covering payroll, appraisal, invoicing, licensing and role-based access control. Integrated DocuSign, DHL and Matrix APIs into business workflows.', impact: 'Approximately 35% faster API responses and 50–60% less manual workload.', tags: ['Node.js', 'React', 'Laravel', 'PHP', 'MySQL', 'MongoDB'] },
  { number: '06', type: 'PAYMENTS · FINANCIAL PRODUCT', title: 'Payment & Gold Price Integrations', description: 'Integrated PayPal, Stripe and Zumrails payment flows with webhooks and reconciliation, and delivered live gold-price API features for a financial product.', impact: 'Secure payment workflows and real-time financial product capabilities.', tags: ['Laravel', 'Node.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Stripe'] },
]

const experience = [
  {
    company: 'Uplers Solutions Pvt. Ltd.', role: 'SDE 3 · Promoted from Software Engineer', period: 'May 2023 — Present', points: [
      'Core backend developer on Recruiter Access and Talent Portal, used by 5,000+ recruiters across a 3M+ candidate talent pool.',
      'Improved page load times by approximately 30% through caching, database indexing and query optimization; reduced recruiter manual workload by approximately 60%.',
      'Built AI Resume Transformation services on Node.js and AWS Lambda, asynchronously triggered through SQS; supports 1,000+ monthly users and ₹3L+ monthly revenue.',
      'Built Tailored CV services and a real-time multi-template editor; supports 500+ paying candidates and ₹2L+ monthly revenue.',
      'Designed RAG with Qdrant and MongoDB; built agentic AI workflows with planning and tool calling over internal database queries and third-party APIs.',
      'Automated hiring-lifecycle email and WhatsApp communications; mentored 2–3 junior developers and led code reviews.',
    ]
  },
  {
    company: 'Wappnet Systems Pvt. Ltd.', role: 'Software Engineer', period: 'Mar 2022 — Apr 2023', points: [
      'Built full-stack applications with Laravel, Node.js and React.js, using secure authentication, validation and PostgreSQL, MySQL and MongoDB.',
      'Integrated PayPal, Stripe and Zumrails payment flows with webhooks and reconciliation; built live gold-price API features.',
      'Mentored junior developers, ran code reviews and collaborated across teams to ship production features.',
    ]
  },
  {
    company: 'Samaj Infotech', role: 'Backend Developer', period: 'Dec 2018 — Feb 2022', points: [
      'Architected ERP and HRMS for 1,000+ users using Node.js, React and Laravel, covering payroll, appraisal, invoicing, licensing and RBAC.',
      'Improved API response times by approximately 35% through optimized REST APIs, caching and query tuning.',
      'Reduced manual workload by approximately 50–60% with modular accounting and recruitment systems.',
      'Integrated DocuSign, DHL and Matrix APIs for real-time workflow automation.',
    ]
  },
  {
    company: 'DRC Systems Pvt. Ltd.', role: 'Software Developer', period: 'Nov 2017 — Oct 2018', points: [
      'Built REST APIs and web applications with Laravel, Yii, Yii2 and CodeIgniter, including location-aware features and ERP modules for construction and resource management.',
      'Designed MySQL schemas for geolocation-based logic and secure authentication across mobile and web.',
    ]
  },
  {
    company: 'Crest Infotech', role: 'Jr. Software Developer', period: 'Jan 2016 — Oct 2017', points: [
      'Built backend systems and REST APIs in PHP, Laravel and CodeIgniter for web, Android and iOS applications.',
      'Delivered Braintree and social login integrations, push notifications, user management, order processing and automated Excel reporting.',
    ]
  },
]

const awards = [
  ['Oct 2023', 'Upstar Award'],
  ['Mar 2024', 'Upstar Award'],
  ['Jul 2024', 'Upstar Award'],
  ['Jun 2025', 'Upstar Award'],
  ['Sep 2025', 'Upstar Award'],
  ['Oct–Dec 2022', 'Quarterly Rising Star · Wappnet'],
  ['Jan 2022', 'Top Performer · Samaj Infotech'],
]

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Education', '#education'], ['Contact', '#contact']]

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection('contact')
        return
      }
      const scrollPosition = window.scrollY + 140
      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { window.location.href = `mailto:${profile.email}` }
  }

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar-wrapper">
      <div className="topbar">
        <a
          className={activeSection === 'home' ? 'brand active' : 'brand'}
          href="#home"
          aria-label="Dixitkumar Sathwara home"
          onClick={() => { setActiveSection('home'); setMenuOpen(false); }}
        >
          <span className="brand-mark">DS</span>
          <span>DIXITKUMAR<span className="brand-dot">.</span></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={label}
                href={href}
                className={isActive ? 'nav-item active' : 'nav-item'}
                onClick={() => {
                  setActiveSection(id)
                  setMenuOpen(false)
                }}
              >
                {label}
                {isActive && <span className="active-dot" />}
              </a>
            )
          })}
          <a
            className={activeSection === 'contact' ? 'nav-cta active' : 'nav-cta'}
            href="#contact"
            onClick={() => {
              setActiveSection('contact')
              setMenuOpen(false)
            }}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="availability"><span className="pulse" /> OPEN TO THE RIGHT OPPORTUNITY <span className="availability-note">· Discreet search</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>Engineering products.<br /><span>Solving real problems.</span></motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .16 }}>I’m <strong>{profile.name}</strong>, a <strong>Senior Software Engineer (SDE3)</strong> with 10+ years building scalable backend systems, serverless AI services on AWS Lambda and enterprise platforms.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
            <a className="button button-ghost" href="/Dixitkumar-Sathwara-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16} /> Download CV</a>
          </motion.div>
          <div className="hero-meta"><span><MapPin size={14} /> {profile.location}</span><span><BriefcaseBusiness size={14} /> 10+ years experience</span></div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}>
          <div className="visual-grid" />
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="profile-orb">
            <img
              src="/profile.jpg"
              alt={profile.name}
              className="profile-img"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span>DS</span>
            <i />
          </div>
          <div className="floating-card card-top"><span className="mini-icon"><BrainCircuit size={17} /></span><div><b>AI-powered products</b><small>LLM integrations · RAG</small></div></div>
          <div className="floating-card card-bottom"><span className="mini-icon purple"><Layers3 size={17} /></span><div><b>Backend at scale</b><small>Architecture · APIs · Systems</small></div></div>
          <div className="visual-caption"><span className="caption-line" /> BUILD · LEAD · IMPROVE</div>
        </motion.div>
      </section>

      <section className="metrics section-wrap">
        <div className="metric"><strong>10<span>+</span></strong><small>Years in engineering</small></div>
        <div className="metric"><strong>5<span>×</span></strong><small>Upstar award recipient</small></div>
        <div className="metric"><strong>30<span>%</span></strong><small>Faster recruiter page loads</small></div>
        <div className="metric"><strong>₹5<span>L+</span></strong><small>Combined monthly AI product revenue</small></div>
      </section>

      <section className="section-wrap section-block" id="about">
        <SectionHeading eyebrow="01 / ABOUT" title="A builder's mindset. An ownership mentality." />
        <div className="about-grid">
          <div className="about-lead"><p className="large-copy">I enjoy turning complex requirements into <span>reliable, maintainable software</span> — from backend architecture and integrations to AI features that create measurable product value.</p><p>My experience spans recruitment technology, enterprise ATS platforms, ERP and HRMS systems, payment integrations and AI-enabled workflows. I work closely with product and engineering teams, take ownership of delivery and help other developers grow.</p></div>
          <div className="about-highlights">
            <div className="highlight"><span className="highlight-icon"><Code2 /></span><div><b>Hands-on engineering</b><small>From API design and data models to production performance.</small></div></div>
            <div className="highlight"><span className="highlight-icon"><Sparkles /></span><div><b>Applied AI</b><small>Practical LLM integrations, RAG experiments and AI product features.</small></div></div>
            <div className="highlight"><span className="highlight-icon"><MessageSquareCode /></span><div><b>Technical leadership</b><small>Code reviews, mentoring and cross-functional collaboration.</small></div></div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <SectionHeading eyebrow="02 / TOOLKIT" title="Technology I work with." description="A practical toolkit built through product delivery, platform engineering and continuous learning." />
        <div className="skills-grid">{skills.map(({ title, icon: Icon, items }) => <motion.div whileHover={{ y: -4 }} className="skill-card" key={title}><div className="skill-head"><span className="skill-icon"><Icon size={19} /></span><h3>{title}</h3></div><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></motion.div>)}</div>
        <p className="footnote">* MCP and tool-calling are areas of active hands-on learning and experimentation, not a claim of long-term production experience.</p>
      </section>

      <section className="section-wrap section-block" id="projects">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Products, platforms & experiments." description="A selection of business-focused engineering work. Some commercial projects are summarized without confidential implementation details." />
        <div className="projects-grid">{projects.map((project, i) => <motion.article className="project-card" key={project.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: i * .045 }}><div className="project-top"><span>{project.type}</span><span className="project-number">{project.number}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="impact"><Sparkles size={15} /><span>{project.impact}</span></div><div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></motion.article>)}</div>
      </section>

      <section className="section-wrap section-block" id="experience">
        <SectionHeading eyebrow="04 / CAREER" title="Experience built through delivery." description="Progressively taking on broader engineering ownership, product impact and team responsibilities." />
        <div className="timeline">{experience.map((job, i) => <div className="timeline-item" key={job.company}><div className="timeline-marker">{i === 0 ? <span className="marker-live" /> : <span />}</div><div className="timeline-content"><div className="timeline-title"><div><h3>{job.company}</h3><b>{job.role}</b></div><span className="period">{job.period}</span></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></div>)}</div>
      </section>

      <section className="section-wrap section-block" id="education">
        <SectionHeading eyebrow="05 / EDUCATION" title="A strong foundation in computer applications." />
        <div className="education-grid">
          <div className="education-card"><span className="eyebrow">2016</span><h3>Master of Computer Applications (MCA)</h3><p>NICM · GTU University</p><small>Gandhinagar, Gujarat</small></div>
          <div className="education-card"><span className="eyebrow">2014</span><h3>Bachelor of Computer Applications (BCA)</h3><p>BPCCS · KSV University</p><small>Gandhinagar, Gujarat</small></div>
        </div>
      </section>

      <section className="section-wrap section-block awards-section">
        <div className="awards-intro"><span className="eyebrow">05 / RECOGNITION</span><h2>Consistent work.<br /><span>Recognized impact.</span></h2><p>Recognized for consistent performance and business impact at Uplers, Wappnet and Samaj Infotech.</p></div>
        <div className="awards-list">{awards.map(([date, title]) => <div className="award-row" key={date}><span className="award-icon"><Award size={17} /></span><b>{title}</b><span>{date}</span><CheckCircle2 size={16} className="award-check" /></div>)}</div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-inner section-wrap"><span className="eyebrow">06 / CONTACT</span><h2>Have a meaningful problem<br />to <span>solve together?</span></h2><p>I’m interested in senior backend, senior software engineering and technical leadership opportunities — especially teams building scalable products and practical AI solutions.</p><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}><Mail size={17} /> {copied ? 'Email copied' : 'Copy email address'}</button><a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a></div><div className="contact-details"><span><MapPin size={14} /> Ahmedabad, India · Open to 100% remote roles across India</span></div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">DS</span><span>DIXITKUMAR<span className="brand-dot">.</span></span></a><span>Designed & built with care · © {new Date().getFullYear()} {profile.name}</span><div className="socials"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a></div></footer>
  </div>
}

export default App
