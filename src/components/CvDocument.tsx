import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Certificate, CheckCircle, MapPin, EnvelopeSimple, Phone, Download } from "@phosphor-icons/react";
import { PROFILE, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS } from "@/data/portfolioData";

export default function CvDocument() {
  const handlePrint = () => window.print();

  return (
    <div className="cv-document mx-auto max-w-4xl">
      <div className="rounded-2xl border border-border/50 bg-card p-8 sm:p-12 shadow-sm print:border-0 print:shadow-none print:p-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 border-b border-border/40 pb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="mt-1 text-lg text-primary font-medium">{PROFILE.title}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><EnvelopeSimple size={14} />{PROFILE.email}</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} />{PROFILE.location}</span>
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="hidden print:flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Download size={16} /> Download PDF
          </button>
        </div>

        {/* Summary */}
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-foreground/80">{PROFILE.bio}</p>
        </section>

        {/* Experience */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
            <Briefcase size={16} /> Experience
          </h2>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-6 border-l-2 border-primary/20"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold text-base">{exp.role}</h3>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">{exp.period}</span>
                </div>
                <p className="text-sm text-primary font-medium mt-0.5">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.techStack.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
            <GraduationCap size={16} /> Education
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {EDUCATION.map((ed) => (
              <div key={ed.degree} className="rounded-xl border border-border/40 p-4">
                <h3 className="font-semibold text-sm">{ed.degree}</h3>
                <p className="text-sm text-primary mt-0.5">{ed.school}</p>
                <p className="text-xs text-muted-foreground mt-1">{ed.year} &middot; {ed.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
            <Certificate size={16} /> Certifications
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="rounded-xl border border-border/40 p-4 text-center">
                <p className="text-xs font-semibold">{c.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                <p className="text-xs text-primary mt-1">{c.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
            <Download size={16} /> Technical Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(
              SKILLS.reduce<Record<string, typeof SKILLS>>((acc, skill) => {
                (acc[skill.category] ||= []).push(skill);
                return acc;
              }, {})
            ).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">{category}</h3>
                <div className="space-y-2.5">
                  {skills.map((s) => (
                    <div key={s.name} className="flex items-center justify-between gap-3">
                      <span className="text-sm">{s.name}</span>
                      <div className="flex-1 max-w-[120px] h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${s.level}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground w-8 text-right">{s.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
