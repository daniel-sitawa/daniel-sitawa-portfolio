import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  ArrowUpRight,
  Code2,
  Menu,
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
  })

  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Sending...')

    try {
      const response = await fetch('https://formspree.io/f/xljbgyjd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('Message sent successfully! Thank you.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormStatus('Something went wrong. Please try again.')
      }
    } catch {
      setFormStatus('Unable to send your message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#080b14] text-white">

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <a href="#home" className="text-2xl font-bold tracking-tight">
            DS<span className="text-purple-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-purple-400"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden rounded-full border border-purple-500/50 px-5 py-2 text-sm transition hover:bg-purple-600 md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : <Menu size={27} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#080b14] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 transition hover:text-purple-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              <span className="h-px w-10 bg-purple-500" />
              Mathematics & Computer Science
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Hi, I'm
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Daniel Sitawa.
              </span>
              <span className="mt-2 block text-3xl text-white md:text-4xl">
                I Build Digital Solutions.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-400">
              A software developer passionate about building modern web
              applications, intelligent systems and technology-driven
              solutions to real-world problems.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <span className="text-purple-400">📍</span>
              Maseno, Kenya
              <span className="mx-2">·</span>
              <span className="text-green-400">Open to Opportunities</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 font-medium transition hover:-translate-y-1 hover:bg-purple-500"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 font-medium transition hover:border-purple-400 hover:text-purple-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-gray-400">
              <a
                href="https://github.com/daniel-sitawa"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-purple-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-purple-400"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* Developer Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-[100px]" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">

              <div className="mb-8 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-auto text-xs text-gray-500">
                  developer.js
                </span>
              </div>

              <Code2 size={48} className="mb-8 text-purple-400" />

              <div className="space-y-4 font-mono text-sm leading-relaxed">
                <p className="text-purple-400">const developer = {'{'}</p>

                <p className="pl-6 text-gray-300">
                  name: <span className="text-green-400">'Daniel Sitawa'</span>,
                </p>

                <p className="pl-6 text-gray-300">
                  role: <span className="text-green-400">'Full-Stack Developer'</span>,
                </p>

                <p className="pl-6 text-gray-300">
                  location: <span className="text-green-400">'Kenya'</span>,
                </p>

                <p className="pl-6 text-gray-300">
                  interests: <span className="text-green-400">'Web & Software Development'</span>,
                </p>

                <p className="pl-6 text-gray-300">
                  mindset: <span className="text-green-400">'Always Learning'</span>
                </p>

                <p className="text-purple-400">{'}'}</p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400">● Building something great</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
              A little about me
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Beyond the <span className="text-purple-400">Code.</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid items-center gap-14 md:grid-cols-2">

            {/* Left: Identity Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#171329] to-[#0d1220] p-8 md:p-10">

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-3xl font-bold text-purple-400">
                  DS
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  Daniel Sitawa
                </h3>

                <p className="mt-2 text-purple-400">
                  Computer Science Student & Aspiring Software Developer
                </p>

                <div className="my-8 h-px bg-white/10" />

                <div className="space-y-5">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Education
                    </p>
                    <p className="mt-1 font-medium text-gray-200">
                      BSc Mathematics & Computer Science
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      University
                    </p>
                    <p className="mt-1 font-medium text-gray-200">
                      Maseno University
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Location
                    </p>
                    <p className="mt-1 font-medium text-gray-200">
                      Kenya 🇰🇪
                    </p>
                  </div>

                </div>

                <div className="mt-10 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
                  <span className="text-sm text-green-400">
                    Always learning. Always building.
                  </span>
                </div>

              </div>
            </motion.div>

            {/* Right: Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <h3 className="text-2xl font-semibold leading-relaxed md:text-3xl">
                Turning ideas into
                <span className="text-purple-400"> practical solutions </span>
                through technology.
              </h3>

              <p className="mt-7 leading-8 text-gray-400">
                I'm Daniel Sitawa, a Mathematics and Computer Science
                student at Maseno University with a strong interest in
                software engineering and application development.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                My development journey has involved building web
                applications, desktop management systems and
                database-driven solutions using technologies such as
                Java, Python, PHP and MySQL.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                I enjoy approaching problems analytically, learning
                new technologies and transforming ideas into software
                that solves practical challenges.
              </p>

              <div className="mt-9">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">
                  Areas of interest
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    'Full-Stack Development',
                    'Web Applications',
                    'Software Engineering',
                    'Database Systems',
                    'Problem Solving',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#projects"
                className="mt-10 inline-flex items-center gap-2 font-medium text-purple-400 transition hover:gap-4"
              >
                Explore my projects
                <ArrowUpRight size={18} />
              </a>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/10 bg-white/[0.02] px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
              My technical toolkit
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Skills & <span className="text-purple-400">Technologies.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">
              Technologies and tools I use to develop applications,
              solve problems and bring software ideas to life.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                number: '01',
                title: 'Programming Languages',
                description: 'Languages used in my software development journey.',
                skills: ['Java', 'Python', 'PHP', 'HTML', 'CSS'],
              },
              {
                number: '02',
                title: 'Frontend Development',
                description: 'Building modern and responsive user interfaces.',
                skills: ['JavaScript', 'React', 'Tailwind CSS'],
                learning: true,
              },
              {
                number: '03',
                title: 'Backend Development',
                description: 'Application logic, server-side development and APIs.',
                skills: ['Python', 'Flask', 'PHP', 'Java'],
              },
              {
                number: '04',
                title: 'Databases',
                description: 'Designing and working with relational databases.',
                skills: ['MySQL', 'SQL'],
              },
              {
                number: '05',
                title: 'Development Tools',
                description: 'Tools that support my development workflow.',
                skills: ['Git', 'GitHub', 'VS Code'],
              },
              {
                number: '06',
                title: 'Currently Exploring',
                description: 'Expanding my knowledge of modern application development.',
                skills: ['Advanced React', 'Node.js', 'Framer Motion'],
                learning: true,
              },
            ].map((category, index) => (
              <motion.div
                key={category.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-[#0d111d] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
              >

                <div className="mb-7 flex items-center justify-between">
                  <span className="text-sm font-mono text-purple-400">
                    /{category.number}
                  </span>

                  {category.learning && (
                    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                      Learning
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-relaxed text-gray-500">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}

          </div>

          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-purple-500/[0.05] p-7 text-center">
            <p className="text-lg font-medium text-gray-200">
              Technology keeps evolving. So do I.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Continuously learning, experimenting and improving my skills.
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
              Selected work
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Featured <span className="text-purple-400">Projects.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">
              A selection of applications and systems I've worked on,
              exploring different areas of software development and
              solving practical problems through technology.
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="mt-14 grid gap-7 md:grid-cols-2">

            {[
              {
                number: '01',
                name: 'Hostel Booking Management System',
                category: 'Web Application',
                status: 'In Development',
                description:
                  'A platform designed to help students discover hostels, explore accommodation options and manage bookings near university campuses.',
                features: [
                  'Hostel discovery and search',
                  'Room availability management',
                  'Student booking dashboard',
                  'Administrative management',
                ],
                technologies: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
              },
              {
                number: '02',
                name: 'Academic Risk Monitoring System',
                category: 'Desktop Application',
                status: 'Academic Project',
                description:
                  'A student academic monitoring system designed to track attendance, academic performance and identify students who may require academic intervention.',
                features: [
                  'Student performance tracking',
                  'Attendance monitoring',
                  'Academic risk identification',
                  'Resit management workflow',
                ],
                technologies: ['Java', 'Swing', 'MySQL'],
              },
              {
                number: '03',
                name: "Benji's Gourmet",
                category: 'Business Website',
                status: 'Developed',
                description:
                  'A restaurant website designed to establish an online presence, showcase food offerings and support restaurant administration.',
                features: [
                  'Restaurant information pages',
                  'Digital menu management',
                  'Food image gallery',
                  'Administrative dashboard',
                ],
                technologies: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
              },
              {
                number: '04',
                name: 'Supermarket Management System',
                category: 'Desktop Application',
                status: 'Academic Project',
                description:
                  'A desktop-based management application developed to support supermarket operations and inventory-related activities.',
                features: [
                  'Inventory management',
                  'Database integration',
                  'Desktop application interface',
                  'Management operations',
                ],
                technologies: ['Java', 'MySQL'],
              },
            ].map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d111d] transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
              >

                {/* Project Preview Area */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950/60 via-[#111827] to-blue-950/40">

                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.3),_transparent_65%)]" />
                  </div>

                  <Code2
                    size={65}
                    strokeWidth={1}
                    className="relative text-purple-300/70 transition duration-500 group-hover:scale-110 group-hover:text-purple-300"
                  />

                  <span className="absolute left-6 top-5 font-mono text-sm text-purple-400">
                    /PROJECT_{project.number}
                  </span>

                  <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300">
                    {project.category}
                  </span>

                </div>

                {/* Project Information */}
                <div className="p-7">

                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-sm font-mono text-purple-400">
                      {project.number}
                    </span>

                    <span className={`rounded-full border px-3 py-1 text-xs ${
                      project.status === 'In Development'
                        ? 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400'
                        : 'border-green-500/20 bg-green-500/10 text-green-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Key Features
                    </p>

                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.features.map(feature => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="mt-1 text-purple-400">✦</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(technology => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-purple-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}

          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Every project is an opportunity to learn, experiment and build better.
            </p>
          </div>

        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="border-t border-white/10 bg-white/[0.02] px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
              My Journey
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Education & <span className="text-purple-400">Experience.</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-12 md:grid-cols-2">

            {/* Education */}
            <div>
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold">
                <span className="text-purple-400">🎓</span>
                Education
              </h3>

              <div className="relative border-l border-purple-500/30 pl-8">

                <div className="relative">
                  <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-purple-500 bg-[#080b14]" />

                  <p className="text-sm text-purple-400">
                    Current Studies
                  </p>

                  <h4 className="mt-3 text-xl font-semibold">
                    BSc Mathematics & Computer Science
                  </h4>

                  <p className="mt-2 text-gray-300">
                    Maseno University
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-400">
                    Developing a strong foundation in mathematics,
                    computing, programming, algorithms, software
                    development and problem-solving.
                  </p>

                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold">
                <span className="text-purple-400">💻</span>
                Development Journey
              </h3>

              <div className="relative border-l border-purple-500/30 pl-8">

                <div className="relative">
                  <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-purple-500 bg-[#080b14]" />

                  <p className="text-sm text-purple-400">
                    Ongoing
                  </p>

                  <h4 className="mt-3 text-xl font-semibold">
                    Independent Software Development
                  </h4>

                  <p className="mt-2 text-gray-300">
                    Personal & Academic Projects
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-400">
                    Building practical software applications while
                    strengthening skills in web development, desktop
                    applications, database management and software
                    engineering.
                  </p>

                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 rounded-2xl border border-purple-500/20 bg-purple-500/[0.05] p-8 text-center">

            <h3 className="text-2xl font-semibold">
              What's Next?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-400">
              I'm looking forward to opportunities that allow me to
              apply my technical knowledge, collaborate with other
              developers and grow through real-world software
              development experience.
            </p>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-purple-400">
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Let's Build Something
              <span className="block text-purple-400">Great Together.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-gray-400">
              Have an idea, opportunity, or project in mind?
              I'd love to hear from you. Let's connect and create something meaningful.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">Let's talk.</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  I'm open to software development opportunities,
                  collaborations, internships and exciting projects.
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:danielsitawa85@gmail.com"
                  className="mt-2 inline-block text-purple-400 transition hover:text-purple-300"
                >
                  danielsitawa85@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-2 text-gray-300">Maseno, Kenya</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Social Profiles</p>
                <div className="mt-3 flex gap-5">
                  <a
                    href="https://github.com/daniel-sitawa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 transition hover:text-purple-400"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 transition hover:text-purple-400"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="mb-2 block text-sm text-gray-300">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">Message</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-purple-600 px-6 py-4 font-medium transition hover:bg-purple-500"
              >
                Send Message
                <ArrowUpRight size={20} />
              </button>

              {formStatus && (
                <p className="text-center text-sm text-purple-400">
                  {formStatus}
                </p>
              )}

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#080b14] px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            {/* Brand */}
            <div>
              <a href="#home" className="text-2xl font-bold tracking-tight">
                Daniel<span className="text-purple-400">.</span>
              </a>

              <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
                Mathematics & Computer Science student passionate about
                building digital solutions through technology and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-5 font-semibold text-white">Quick Links</h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="transition hover:text-purple-400"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="mb-5 font-semibold text-white">Let's Connect</h3>

              <div className="flex flex-col gap-4 text-sm text-gray-400">

                <a
                  href="mailto:danielsitawa85@gmail.com"
                  className="transition hover:text-purple-400"
                >
                  Email Me ↗
                </a>

                <a
                  href="https://github.com/daniel-sitawa"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-purple-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-purple-400"
                >
                  LinkedIn ↗
                </a>

              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center text-sm text-gray-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Daniel Sitawa. All rights reserved.
            </p>

            <p>
              Designed & built with <span className="text-purple-400">♥</span> using React.
            </p>

            <a
              href="#home"
              className="transition hover:text-purple-400"
            >
              Back to Top ↑
            </a>

          </div>

        </div>
      </footer>

    </div>
  )
}

export default App