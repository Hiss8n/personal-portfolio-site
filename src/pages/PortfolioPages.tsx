import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GithubLogo, LinkedinLogo, TwitterLogo, EnvelopeSimple, MapPin,
  Download, ArrowRight, Code, Brain, DeviceMobile, Globe, Briefcase,
  CheckCircle, Calendar, Phone, Copy, FilePdf, Sparkle, Rocket,
  Funnel, Eye, PaperPlaneTilt, Star,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import {
  PROFILE, STATS, SOCIAL_LINKS, PROJECTS, EXPERIENCES,
  SKILLS, TESTIMONIALS, PHILOSOPHY, EDUCATION, CERTIFICATIONS,
} from "@/data/portfolioData";
import CvDocument from "@/components/CvDocument";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  GithubLogo, LinkedinLogo, TwitterLogo, EnvelopeSimple,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const child = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ===== HOME PAGE ===== */
export function HomePage() {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" exit="exit" className="min-h-[100dvh]">
      {/* Hero */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.45_0.2_260/0.08),transparent_60%)]" />
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl w-full relative">
          <motion.div variants={child} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {PROFILE.availability}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.08]">
              {PROFILE.headline.split(" with code")[0]}
              <br />
              <span className="text-primary">with code that lasts.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[55ch]">
              {PROFILE.bio}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all">
                View Projects <ArrowRight size={16} weight="bold" />
              </Link>
              <Link to="/cv" className="inline-flex items-center gap-2 rounded-xl border border-border/60 px-5 py-2.5 text-sm font-semibold hover:bg-accent active:scale-[0.98] transition-all">
                <Download size={16} /> Download CV
              </Link>
            </div>
            <div className="mt-8 flex gap-3">
              {SOCIAL_LINKS.map((s) => {
                const Icon = ICON_MAP[s.icon];
                return (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {STATS.map((s, i) => (
            <motion.div key={s.label} variants={child} className="text-center">
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.h2 variants={child} className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Featured Work</motion.h2>
          <motion.p variants={child} className="text-muted-foreground mb-10">Selected projects that showcase depth and impact.</motion.p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <motion.div key={p.id} variants={child}
                className="group rounded-2xl border border-border/40 bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{p.category}</span>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={child} className="mt-10 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              View all projects <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <motion.h2 variants={child} className="text-2xl font-bold tracking-tight mb-10 text-center">What People Say</motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.author} variants={child} className="rounded-2xl border border-border/40 bg-card p-6">
                <div className="flex gap-1 mb-3">{[1,2,3,4,5].map((n) => <Star key={n} size={14} className="text-amber-400 fill-amber-400" />)}</div>
                <p className="text-sm leading-relaxed text-foreground/80 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

/* ===== PROJECTS PAGE ===== */
export function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [modal, setModal] = useState<(typeof PROJECTS)[0] | null>(null);
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" exit="exit" className="min-h-[100dvh] pt-24 pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.h1 variants={child} className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</motion.h1>
        <motion.p variants={child} className="mt-2 text-muted-foreground max-w-[60ch]">A curated collection of work spanning full-stack systems, AI, mobile, and design.</motion.p>

        {/* Filters */}
        <motion.div variants={child} className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="group rounded-2xl border border-border/40 bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer"
                onClick={() => setModal(p)}>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{p.category}</span>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye size={14} /> View Details</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setModal(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg rounded-2xl bg-card border border-border/50 p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{modal.category}</span>
                <button onClick={() => setModal(null)} className="text-muted-foreground hover:text-foreground text-xl">&times;</button>
              </div>
              <h2 className="text-xl font-bold">{modal.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{modal.longDescription}</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {modal.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-muted/50 p-3 text-center">
                    <p className="text-lg font-bold text-primary">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">{modal.tags.map((t) => (
                <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium">{t}</span>
              ))}</div>
              <div className="mt-6 flex gap-3">
                <a href={modal.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  <Globe size={16} /> Live Demo
                </a>
                <a href={modal.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border/60 px-4 py-2.5 text-sm font-semibold hover:bg-accent">
                  <GithubLogo size={16} /> Source
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ===== CV PAGE ===== */
export function CvPage() {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" exit="exit" className="min-h-[100dvh] pt-24 pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={child} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Curriculum Vitae</h1>
            <p className="mt-2 text-muted-foreground">Professional experience, education, and technical expertise.</p>
          </div>
          <button onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all">
            <FilePdf size={18} /> Download CV (PDF)
          </button>
        </motion.div>
        <motion.div variants={child}>
          <CvDocument />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ===== CONTACT PAGE ===== */
export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent successfully! I will get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    toast.success("Email copied to clipboard");
  };

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" exit="exit" className="min-h-[100dvh] pt-24 pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.h1 variants={child} className="text-3xl sm:text-4xl font-bold tracking-tight">Get in Touch</motion.h1>
        <motion.p variants={child} className="mt-2 text-muted-foreground max-w-[60ch]">Have a project in mind or want to discuss opportunities? I would love to hear from you.</motion.p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div variants={child} className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border/40 bg-card p-6">
              <h3 className="font-semibold mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><EnvelopeSimple size={18} className="text-primary" /></div>
                    <div><p className="text-sm font-medium">Email</p><p className="text-xs text-muted-foreground">{PROFILE.email}</p></div>
                  </div>
                  <button onClick={copyEmail} className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"><Copy size={16} /></button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><MapPin size={18} className="text-primary" /></div>
                  <div><p className="text-sm font-medium">Location</p><p className="text-xs text-muted-foreground">{PROFILE.location}</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><Calendar size={18} className="text-primary" /></div>
                  <div><p className="text-sm font-medium">Availability</p><p className="text-xs text-muted-foreground">Open for new opportunities</p></div>
                </div>
              </div>
            </div>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-border/40 bg-card p-4 text-sm font-medium hover:bg-accent transition-colors">
              <Phone size={16} className="text-primary" /> Schedule a Call
            </a>
          </motion.div>

          {/* Form */}
          <motion.form variants={child} onSubmit={handleSubmit} className="lg:col-span-3 rounded-2xl border border-border/40 bg-card p-6 sm:p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.name ? "border-destructive" : "border-border/60"}`}
                  placeholder="Your name" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.email ? "border-destructive" : "border-border/60"}`}
                  placeholder="you@example.com" type="email" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Subject</label>
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.subject ? "border-destructive" : "border-border/60"}`}
                placeholder="What is this about?" />
              {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
                className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none ${errors.message ? "border-destructive" : "border-border/60"}`}
                placeholder="Tell me about your project or opportunity..." />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button type="submit" disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all disabled:opacity-60">
              {sending ? (
                <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <><PaperPlaneTilt size={16} weight="fill" /> Send Message</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}

/* ===== ABOUT PAGE ===== */
export function AboutPage() {
  const skillCategories = Array.from(new Set(SKILLS.map((s) => s.category)));

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" exit="exit" className="min-h-[100dvh] pt-24 pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.h1 variants={child} className="text-3xl sm:text-4xl font-bold tracking-tight">About & Skills</motion.h1>
        <motion.p variants={child} className="mt-2 text-muted-foreground max-w-[60ch]">The story behind the code, and the tools I use to build it.</motion.p>

        {/* Story */}
        <motion.div variants={child} className="mt-12 rounded-2xl border border-border/40 bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Sparkle size={20} className="text-primary" /> My Story</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>I started programming at 14, building websites for local businesses. That early experience of turning ideas into tangible products hooked me permanently.</p>
            <p>After studying Computer Science at Stanford, I spent 3 years at a creative agency learning the craft of pixel-perfect interfaces, then transitioned into full-stack engineering where I found my sweet spot: the intersection of product thinking and technical depth.</p>
            <p>Today, as a Staff Engineer at Vantage Systems, I architect platform systems that serve 500k+ developers. I still obsess over the details: clean APIs, thoughtful abstractions, and interfaces that feel invisible.</p>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div variants={child} className="mt-8 rounded-2xl border border-border/40 bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Brain size={20} className="text-primary" /> Engineering Philosophy</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {PHILOSOPHY.map((p, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-muted/50 p-4">
                <Rocket size={18} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm font-medium leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={child} className="mt-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Code size={20} className="text-primary" /> Technical Expertise</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => {
              const catSkills = SKILLS.filter((s) => s.category === cat);
              return (
                <div key={cat} className="rounded-2xl border border-border/40 bg-card p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">{cat}</h3>
                  <div className="space-y-3">
                    {catSkills.map((s) => (
                      <div key={s.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{s.name}</span>
                          <span className="text-muted-foreground text-xs">{s.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }} className="h-full rounded-full bg-primary" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Education & Certs */}
        <motion.div variants={child} className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/40 bg-card p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Briefcase size={18} className="text-primary" /> Education</h3>
            <div className="space-y-4">
              {EDUCATION.map((ed) => (
                <div key={ed.degree} className="border-l-2 border-primary/20 pl-4">
                  <p className="text-sm font-semibold">{ed.degree}</p>
                  <p className="text-sm text-primary">{ed.school}</p>
                  <p className="text-xs text-muted-foreground">{ed.year} &middot; {ed.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border/40 bg-card p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> Certifications</h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((c) => (
                <div key={c.name} className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Star size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.issuer} &middot; {c.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
