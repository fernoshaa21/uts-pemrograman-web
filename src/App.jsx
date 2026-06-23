import profilePhoto from './assets/profile.jpg'
import mobileIllustration from './assets/mobile-development.svg'
import apiIllustration from './assets/api-architecture.svg'
import './App.css'

const linkedInUrl = 'https://www.linkedin.com/in/fernosha-alfaridzi-181047241/'

/*
const personalDetails = [
  ['Full Name', 'Fernosha Al Faridzi'],
  ['Place / Date of Birth', 'Jakarta, 01 July 2000'],
  ['Address', 'Jl. Delima 3 No. 37 RT 003 RW 007, Parung Panjang, Bogor, Jawa Barat'],
  ['Phone', '+62 859-5977-3546'],
  ['Email', 'fernosa12@gmail.com'],
  ['LinkedIn', linkedInUrl],
  ['Nationality', 'Indonesian'],
  ['Marital Status', 'Single'],
]
*/

const experiences = [
  {
    role: 'Mobile & Frontend Developer',
    company: 'PT Modernland Realty Tbk',
    period: '04/2026 - Present',
    description:
      'Develop and maintain Flutter-based mobile applications for internal business needs, including new feature development, REST API integration, performance improvements, and codebase refinement. Also support release preparation and deployment processes for the App Store and Play Store.',
  },
  {
    role: 'Mobile Developer',
    company: 'PT APBATECH',
    period: '08/2025 - 04/2026',
    description:
      'Built and enhanced production web applications using Flutter, focusing on feature implementation, UI improvements, bug fixing, and backend API connectivity. Contributed to cleaner application structure, maintainable code practices, and mobile release support.',
  },
  {
    role: 'Consultant Remote',
    company: 'Implement Solution',
    period: '06/2025 - 08/2025',
    description:
      'Worked remotely with an international team to support mobile application development. Assisted in implementing features, fixing bugs, and improving application performance using Flutter.',
  },
  {
    role: 'Mobile Developer',
    company: 'PT Onanmedia Internasional Indonesia',
    period: '08/2023 - 06/2025',
    description:
      'Developed several production mobile applications using Flutter. Contributed to application architecture, feature implementation, and third-party integrations such as payment systems and push notifications.',
  },
]

const skillGroups = [
  ['Mobile Development', ['Flutter', 'Dart', 'Kotlin', 'Jetpack Compose']],
  ['State Management', ['Riverpod', 'BLoC', 'Provider', 'GetX', 'Cubit']],
  ['Backend & API', ['NestJS', 'TypeScript', 'ExpressJS', 'REST API', 'GraphQL']],
  ['Database & Services', ['PostgreSQL', 'Firebase']],
  ['Architecture', ['Clean Architecture', 'MVVM', 'SOLID Principles', 'OOP']],
]

const projects = [
  {
    name: 'Mobile Onanmedia',
    type: 'Freelance Service Marketplace Application',
    stack: 'Flutter, BLoC, Firebase, REST API',
    description:
      'Developed a mobile marketplace connecting freelance service providers with clients. Implemented authentication, service listings, order management, real-time chat, payment gateway integration, and push notifications using Firebase Cloud Messaging.',
  },
  {
    name: 'Remunakes',
    type: 'Healthcare Staff Remuneration Management System',
    stack: 'Flutter, REST API, PostgreSQL',
    description:
      'Developed core modules for activity logging, performance tracking, remuneration workflows, backend API synchronization, secure authentication, and session management.',
    link: 'https://apps.apple.com/id/app/id6754039481',
  },
  {
    name: 'CPC Token',
    type: 'Blockchain Investment Dashboard',
    stack: 'Flutter Web, Riverpod, GraphQL',
    description:
      'Built a web dashboard for Solana-based investment portfolio monitoring with GraphQL integration, historical analytics, interactive charts, and Solflare wallet connectivity.',
  },
  {
    name: 'MedJourney',
    type: 'Medical Examination Application - Universitas Indonesia',
    stack: 'Flutter, Provider, Firebase',
    description:
      'Developed a mobile platform for academic medical examination workflows, consultant and student modules, case evaluation, FCM notifications, deep-link navigation, and App Store / Play Store deployment.',
  },
  {
    name: 'SATU IDI',
    type: 'Human Resource Management System for Indonesian Medical Doctors',
    stack: 'Java Native',
    description:
      'Analyzed and documented an existing native codebase for system handover, mapped modules for internal transition, and secured transfer of business logic for job analysis, remuneration surveys, and performance evaluation.',
  },
  {
    name: 'SignFlow',
    type: 'Internal Digital Approval & Helpdesk Mobile Application',
    stack: 'Flutter, REST API, Firebase, TestFlight',
    description:
      'Developed and maintained approval workflows, helpdesk ticketing, authentication, session handling, biometric login behavior, FCM ticket reminders, real-device iOS testing, TestFlight distribution, release validation, and handover documentation.',
  },
]

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top cv-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            Fernosha
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavigation"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#experience">
                Experience
              </a>
              <a className="nav-link" href="#skills">
                Skills
              </a>
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main id="home">
        {/* Hero Section */}
        <section className="hero-section section-band">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <p className="eyebrow mb-3">Portfolio CV</p>
                <h1 className="display-4 fw-bold mb-3">Fernosha Al Faridzi</h1>
                <h2 className="hero-title mb-3">Fullstack Mobile Developer</h2>
                <h3 className="hero-headline mb-4">
                  Flutter developer experienced in mobile application development, API
                  integration, clean architecture, and responsive user interface development.
                </h3>
                <div className="d-flex flex-wrap gap-3">
                  <a
                    className="btn btn-primary"
                    href={linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a className="btn btn-outline-light" href="mailto:fernosa12@gmail.com">
                    Email Me
                  </a>
                  <a
                    className="btn btn-outline-light"
                    href="https://apps.apple.com/id/app/id6754039481"
                    target="_blank"
                    rel="noreferrer"
                  >
                    App Store Project
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="profile-frame">
                  <img
                    src={profilePhoto}
                    className="profile-photo"
                    alt="Fernosha Al Faridzi profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-block">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <p className="eyebrow">About Me</p>
                <h2 className="section-title">Mobile products with reliable architecture</h2>
                <p>
                  I am a <strong>Flutter developer</strong> with over two years of
                  experience building mobile applications using Flutter and Dart. I have
                  experience in developing business features, integrating APIs, and
                  implementing state management such as <em>Riverpod</em>, BLoC, GetX, and
                  Provider.
                </p>
                <p>
                  I have worked on several production applications, including a freelance
                  service marketplace platform, a hospital internal system, a blockchain
                  investment dashboard, a medical examination application, and an internal
                  approval and helpdesk application. My focus is on writing maintainable code,
                  applying <mark>clean architecture</mark>, creating responsive user
                  interfaces, and delivering a good user experience.
                </p>
                <p>
                  I also have basic backend development experience using <u>NestJS</u> and
                  ExpressJS to build REST APIs that support mobile applications. I support
                  mobile app release preparation and deployment to the App Store and Play
                  Store. <small>Available for professional mobile development roles.</small>
                </p>
              </div>
              <div className="col-lg-5">
                <img
                  src={mobileIllustration}
                  className="section-illustration"
                  alt="Mobile development illustration"
                />
              </div>
            </div>
          </div>
        </section>

        {/*
          Personal Details Section hidden temporarily.

          <section className="section-block section-muted">
            ...
          </section>
        */}

        {/* Work Experience Section */}
        <section id="experience" className="section-block">
          <div className="container">
            <p className="eyebrow">Work Experience</p>
            <h2 className="section-title">Professional timeline</h2>
            <div className="timeline">
              {experiences.map((experience) => (
                <article className="content-card timeline-card" key={`${experience.company}-${experience.period}`}>
                  <div>
                    <span className="period-badge">{experience.period}</span>
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                  </div>
                  <p>{experience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-block section-muted">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <img
                  src={apiIllustration}
                  className="section-illustration"
                  alt="Backend API architecture illustration"
                />
              </div>
              <div className="col-lg-7">
                <p className="eyebrow">Skills</p>
                <h2 className="section-title">Tools and engineering focus</h2>
                <ul className="skill-list">
                  {skillGroups.map(([group, skills]) => (
                    <li key={group}>
                      <strong>{group}:</strong> {skills.join(', ')}
                    </li>
                  ))}
                </ul>
                <div className="table-responsive content-card mt-4">
                  <table className="table align-middle mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Technologies</th>
                      </tr>
                    </thead>
                    <tbody>
                      {skillGroups.map(([group, skills]) => (
                        <tr key={`table-${group}`}>
                          <th scope="row">{group}</th>
                          <td>
                            <div className="badge-wrap">
                              {skills.map((skill) => (
                                <span className="skill-badge" key={skill}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-block">
          <div className="container">
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Selected production work</h2>
            <div className="row g-4">
              {projects.map((project) => (
                <div className="col-md-6 col-xl-4" key={project.name}>
                  <article className="content-card project-card h-100">
                    <h3>{project.name}</h3>
                    <p className="project-type">{project.type}</p>
                    <p>{project.description}</p>
                    <ul>
                      <li>Tech stack: {project.stack}</li>
                      <li>Focus: feature delivery, integration, and maintainable code</li>
                    </ul>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        View App Store project
                      </a>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section-block section-muted">
          <div className="container">
            <p className="eyebrow">Education</p>
            <div className="content-card education-card">
              <h2>Universitas Siber Asia (UNSIA)</h2>
              <p>Informatics Engineering - 2025 - Present</p>
              <p>Online Program</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2026 Fernosha Al Faridzi. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
