import { Link } from 'react-router-dom'
import { Code2, FlaskConical, Bug, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react'
import Logo from '../components/ui/Logo.jsx'

const features = [
  { icon: Code2, title: 'Repository Visualization', desc: 'Turn any GitHub repository into an interactive visual map.' },
  { icon: FlaskConical, title: 'Interactive Diagram', desc: 'Explore folders and files through a clean, navigable repository graph.' },
  { icon: Bug, title: 'File Explorer', desc: 'Navigate your repository structure and quickly find the files you need.' },
  { icon: Rocket, title: 'GitHub Integration', desc: 'Connect a public GitHub repository and start exploring in seconds.' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-base-900">
      {/* Nav */}
      <header className="border-b border-base-600/30">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-base-50/70">
            <a href="#product" className="hover:text-white transition">Product</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#docs" className="hover:text-white transition">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:inline text-sm text-base-50/80 hover:text-white transition">Sign in</Link>
            <Link to="/app" className="btn-primary text-sm px-4 py-2">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="pill bg-accent/15 text-accent-light mb-5">
            <Rocket size={12} /> Free — Visualize any public GitHub repository
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-white mb-5">
            Understand any GitHub repository visually.
          </h1>
          <p className="text-base-50/60 text-base sm:text-lg mb-8 max-w-lg">
            Paste a GitHub URL and turn your repository into an
            interactive visual map of its structure, files, and folders.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/app" className="btn-primary">
              Try Repo Diagram Free <ArrowRight size={16} />
            </Link>
            <button className="btn-secondary">View Demo</button>
          </div>
          <div className="flex flex-wrap gap-5 mt-8 text-sm text-base-50/50">
            {['GitHub Integration', 'Interactive Repository Map', 'File & Folder Explorer', 'Free to Use'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-success" /> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="panel p-5 sm:p-6 shadow-glow">
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-danger/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
          </div>
          <div className="space-y-2.5 text-sm font-mono text-base-50/70">
            {['Repository found', 'Fetching repository tree', 'Reading directories', 'Mapping files', 'Building repository graph'].map((line, i) => (
              <div key={line} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} className={i < 4 ? 'text-success' : 'text-base-50/30'} />
                <span>{line}</span>
              </div>
            ))}
            <div className="pt-2 text-accent-light">Repository map ready!</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card">
              <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent-light flex items-center justify-center mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-white mb-1.5">{title}</h3>
              <p className="text-sm text-base-50/50">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-base-600/30 py-6 text-center text-sm text-base-50/40">
        Repo Diagram · See your codebase clearly.
      </footer>
    </div>
  )
}
