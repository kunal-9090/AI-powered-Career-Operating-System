import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  Command,
  FileScan,
  Fingerprint,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Mic2,
  Network,
  PanelLeft,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X,
  Zap
} from "lucide-react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const slideContent = [
  {
    kicker: "01 / Product Thesis",
    title: "Career prep should behave like an operating system.",
    text: "Students do not need another isolated tracker. They need a connected loop that translates goals into daily action, feedback, and measurable progress."
  },
  {
    kicker: "02 / Market Gap",
    title: "The current workflow is fragmented across too many tools.",
    text: "Candidates jump between spreadsheets, resumes, calendars, interview notes, learning platforms, and AI chats without a single source of truth."
  },
  {
    kicker: "03 / Core Insight",
    title: "Anxiety increases when progress is invisible.",
    text: "CareerOS makes invisible preparation visible through readiness scores, weak-topic trends, application health, and next-best actions."
  },
  {
    kicker: "04 / Target User",
    title: "Built for ambitious students, designers, developers, and switchers.",
    text: "The interface supports high-agency users who want structure without losing control over their path."
  },
  {
    kicker: "05 / AI Strategy",
    title: "AI acts like a career coach, not a decoration.",
    text: "Recommendations explain the reasoning, cite the evidence, and remain editable so users trust the system."
  },
  {
    kicker: "06 / Product Loop",
    title: "Plan, improve, apply, practice, learn, repeat.",
    text: "Every module feeds back into the central readiness model, creating a retention loop that rewards consistent preparation."
  },
  {
    kicker: "07 / Dashboard",
    title: "The dashboard answers: what should I do today?",
    text: "Metrics support action rather than competing with it. The highest-leverage next step gets visual priority."
  },
  {
    kicker: "08 / Resume",
    title: "Resume analysis becomes role-specific and visual.",
    text: "ATS score, keyword coverage, section quality, and job-description match all collapse into a precise improvement plan."
  },
  {
    kicker: "09 / Interview",
    title: "Mock interviews measure confidence, clarity, and structure.",
    text: "The product creates a focused environment with timed practice, answer notes, and a feedback dashboard."
  },
  {
    kicker: "10 / Tracker",
    title: "Application tracking feels like Linear for careers.",
    text: "Kanban stages, reminders, notes, deadlines, contacts, and AI priority labels keep the search operational."
  },
  {
    kicker: "11 / Roadmap",
    title: "Skill growth becomes a mature progression system.",
    text: "Roadmaps use skill nodes, project validation, streaks, and XP while staying professional and recruiter-friendly."
  },
  {
    kicker: "12 / Analytics",
    title: "Learning data becomes a weekly performance review.",
    text: "Focus reports, weak topics, application conversion, and interview trends help users adjust before momentum drops."
  },
  {
    kicker: "13 / Mentorship",
    title: "Mentors are discovered by goal-fit, not generic popularity.",
    text: "CareerOS matches users with mentors based on target role, portfolio gaps, interview needs, and preparation timeline."
  },
  {
    kicker: "14 / Gamification",
    title: "Motivation stays premium, not childish.",
    text: "The reward system highlights consistency, skill completion, and evidence-based milestones."
  },
  {
    kicker: "15 / Mobile UX",
    title: "Mobile is optimized for daily career actions.",
    text: "Quick application updates, practice prompts, alerts, and compact analytics are designed for thumb-first usage."
  },
  {
    kicker: "16 / Accessibility",
    title: "High craft includes inclusive interaction design.",
    text: "Keyboard support, chart summaries, focus states, contrast, and reduced-motion behavior are part of the design system."
  },
  {
    kicker: "17 / Visual System",
    title: "Dark blue cinematic UI with restrained glow.",
    text: "The palette uses deep navy, electric blue, cyan, indigo, violet, mint, and rose. No yellow is used."
  },
  {
    kicker: "18 / Component Logic",
    title: "Every reusable surface has a behavioral role.",
    text: "Cards, charts, tabs, modals, badges, tables, and empty states are designed to scale across product modules."
  },
  {
    kicker: "19 / Prototype",
    title: "The end-to-end flow proves activation and retention.",
    text: "Onboarding generates the workspace, resume analysis creates value, tracker and interview tools keep users returning."
  },
  {
    kicker: "20 / Portfolio Impact",
    title: "The case study demonstrates senior product thinking.",
    text: "Research, strategy, IA, interaction design, visual craft, motion, and responsive systems are presented as one coherent product."
  },
  {
    kicker: "21 / Recruiter Signal",
    title: "This project is built to show taste, systems thinking, and execution.",
    text: "It avoids generic student-project aesthetics and presents CareerOS as a plausible startup-grade AI product."
  },
  {
    kicker: "22 / Final Frame",
    title: "CareerOS turns preparation into momentum.",
    text: "The product gives candidates a calm, intelligent, measurable path from uncertainty to interview readiness."
  }
];

const modules = [
  {
    icon: LayoutDashboard,
    title: "Personalized Dashboard",
    detail: "Readiness score, next-best action, interviews, streaks, skill heatmaps, and focus cards."
  },
  {
    icon: FileScan,
    title: "Resume Analyzer",
    detail: "ATS scoring, job-match intelligence, keyword gaps, rewrite suggestions, and version history."
  },
  {
    icon: Mic2,
    title: "AI Mock Interview",
    detail: "Role setup, timed practice, communication feedback, confidence scoring, and weak-topic coaching."
  },
  {
    icon: BriefcaseBusiness,
    title: "Application Tracker",
    detail: "Kanban stages, smart reminders, notes, deadlines, contacts, and application health scoring."
  },
  {
    icon: Route,
    title: "Skill Roadmap",
    detail: "Skill tree, milestones, XP, project validation, completion percentages, and streak rewards."
  },
  {
    icon: BarChart3,
    title: "Analytics",
    detail: "Weekly summaries, focus reports, learning consistency, application funnel, and weak-topic trends."
  },
  {
    icon: Users,
    title: "Mentor Discovery",
    detail: "Goal-fit matching, availability, credibility signals, prep notes, and session outcomes."
  },
  {
    icon: CalendarDays,
    title: "Study Planner",
    detail: "Adaptive weekly plan, calendar sync, deep-work blocks, deadline-aware preparation."
  }
];

const personas = [
  ["Aarav", "Computer Science Student", "Needs clarity across DSA, projects, resume updates, and internship applications."],
  ["Maya", "UI/UX Design Aspirant", "Needs portfolio critique, case-study structure, mentor feedback, and accountability."],
  ["Rohan", "Career Switcher", "Needs realistic timelines, structured learning, confidence practice, and skill-gap visibility."]
];

const designTokens = [
  ["Abyss 950", "#030712"],
  ["Abyss 850", "#08182D"],
  ["Signal Blue", "#5EA7FF"],
  ["Ion Cyan", "#54E0FF"],
  ["Deep Indigo", "#7C8CFF"],
  ["Violet", "#A78BFA"],
  ["Mint", "#4DEBC8"],
  ["Rose", "#FB7185"]
];

const prototypeSteps = [
  "Create workspace",
  "Define goal",
  "Upload resume",
  "Analyze job fit",
  "Improve bullets",
  "Save roles",
  "Track pipeline",
  "Practice interview",
  "Review analytics",
  "Plan next week"
];

const evidenceCards = [
  ["Fragmented workflow", "Candidates split planning across docs, sheets, job boards, AI chats, calendars, and screenshots."],
  ["Invisible progress", "Users keep working, but cannot tell whether resume quality, interview confidence, or pipeline health improved."],
  ["Generic AI feedback", "Most AI career tools rewrite text but do not connect feedback to role, timeline, applications, and practice."],
  ["No weekly operating loop", "The product opportunity is not one more tracker. It is a measurable loop that tells users what to do next."]
];

const workflowBefore = ["Resume doc", "Job board tabs", "Spreadsheet tracker", "Calendar reminders", "Random AI chat", "Interview notes"];
const workflowAfter = ["Goal model", "Resume evidence", "Role-fit score", "Pipeline actions", "Practice feedback", "Weekly plan"];

const readinessRoles = [
  {
    role: "Product Designer Intern",
    score: 82,
    risk: "Portfolio evidence",
    action: "Add one measurable UX outcome to the case study before applying to design-system roles.",
    signals: [["Resume", 78], ["Portfolio", 66], ["Interview", 74], ["Applications", 88]]
  },
  {
    role: "Frontend Engineer Intern",
    score: 76,
    risk: "Testing proof",
    action: "Ship a short test strategy section and link one deployed React project in the resume.",
    signals: [["Resume", 72], ["Projects", 81], ["DSA", 64], ["Applications", 84]]
  },
  {
    role: "UX Research Assistant",
    score: 88,
    risk: "Study synthesis",
    action: "Convert raw survey notes into a decision matrix with quotes, themes, and product impact.",
    signals: [["Research", 91], ["Writing", 86], ["Portfolio", 79], ["Mentorship", 92]]
  }
];

const decisionArtifacts = [
  ["North-star task", "What should I do this week to become more hireable for this role?"],
  ["Information architecture", "Goal, evidence, applications, practice, skills, mentors, and analytics become one model."],
  ["AI trust rule", "Every recommendation must cite the signal that caused it and stay editable by the user."],
  ["Mobile priority", "Mobile is for quick status changes and practice prompts, not dense career planning."]
];

const searchTargets = [
  {
    label: "Hero",
    type: "Section",
    description: "Return to the cinematic opening experience.",
    id: "top",
    terms: ["home", "hero", "start", "career os", "careeros"]
  },
  {
    label: "Experience",
    type: "Section",
    description: "Premium product inspiration and craft references.",
    id: "experience",
    terms: ["experience", "linear", "stripe", "apple", "vercel", "notion"]
  },
  {
    label: "Cinematic Slides",
    type: "Presentation",
    description: "22 scroll-driven UX case-study slides.",
    id: "slides",
    terms: ["slides", "presentation", "story", "case study slides", "cinematic"]
  },
  {
    label: "Product Modules",
    type: "Product",
    description: "Explore the interactive CareerOS product simulator.",
    id: "product",
    terms: ["product", "modules", "dashboard", "career system", "workspace"]
  },
  ...modules.map((module, index) => ({
    label: module.title,
    type: "Module",
    description: module.detail,
    id: "product",
    moduleIndex: index,
    terms: [module.title, module.detail]
  })),
  {
    label: "UX Research",
    type: "Research",
    description: "Survey insights, behavioral patterns, and personas.",
    id: "research",
    terms: ["research", "personas", "survey", "pain points", "journey"]
  },
  {
    label: "Design System",
    type: "System",
    description: "Dark-blue tokens, typography, components, and accessibility.",
    id: "system",
    terms: ["design system", "colors", "tokens", "typography", "components", "accessibility"]
  },
  {
    label: "Mobile UX",
    type: "Responsive",
    description: "Mobile dashboard, tracker, interview, and navigation screens.",
    id: "mobile",
    terms: ["mobile", "responsive", "phone", "tablet", "app"]
  },
  {
    label: "Final Case Study",
    type: "Portfolio",
    description: "Recruiter-facing FAANG-level portfolio structure.",
    id: "case-study",
    terms: ["case study", "portfolio", "impact", "reflection", "faang"]
  }
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const anchoredHeaderOffset = 156;

function normalizeAnchorId(hash) {
  return String(hash).replace(/^#/, "").split("?")[0].split("&")[0];
}

function scrollToSection(id, behavior = "smooth") {
  const target = document.getElementById(normalizeAnchorId(id));
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - anchoredHeaderOffset;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-aurora-cyan">
      <Sparkles size={14} />
      {children}
    </div>
  );
}

function MagneticButton({ children, variant = "primary", className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-extrabold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-aurora-blue/30",
        variant === "primary"
          ? "border border-aurora-blue/50 bg-gradient-to-r from-aurora-blue via-aurora-cyan to-aurora-indigo text-abyss-950 shadow-glow"
          : "border border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.1]",
        className
      )}
      {...props}
    >
      {children}
      <ArrowRight className="transition group-hover:translate-x-1" size={16} />
    </motion.button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Experience", "Slides", "Product", "Research", "System", "Mobile", "Case Study"];

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(1180px,calc(100%-24px))] -translate-x-1/2 rounded-2xl border border-white/10 bg-abyss-950/72 px-3 py-3 shadow-glass backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-3 font-black tracking-tight">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-aurora-blue/40 bg-gradient-to-br from-aurora-blue to-aurora-indigo text-abyss-950 shadow-glow">
            C
          </span>
          <span>CareerOS</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#case-study"
            className="hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-extrabold text-white transition hover:bg-white/[0.1] sm:block"
          >
            View Case Study
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06] lg:hidden"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="grid gap-1 pt-3">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-bold text-slate-300 hover:bg-white/[0.06] hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function TopCommandSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchTargets.slice(0, 6);

    return searchTargets
      .map((item) => {
        const haystack = [item.label, item.type, item.description, ...(item.terms || [])].join(" ").toLowerCase();
        const startsWith = item.label.toLowerCase().startsWith(normalized) ? 10 : 0;
        const includes = haystack.includes(normalized) ? 5 : 0;
        const words = normalized
          .split(/\s+/)
          .filter(Boolean)
          .reduce((score, word) => score + (haystack.includes(word) ? 1 : 0), 0);
        return { ...item, score: startsWith + includes + words };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 7);
  }, [query]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const isCommandSearch = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isCommandSearch) {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > 760);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!searchRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function openResult(result) {
    if (!document.getElementById(result.id)) return;

    scrollToSection(result.id);
    window.history.replaceState(null, "", `#${result.id}`);

    if (typeof result.moduleIndex === "number") {
      window.dispatchEvent(new CustomEvent("careeros:open-module", { detail: result.moduleIndex }));
    }

    setQuery(result.label);
    setOpen(false);
  }

  function submitSearch(event) {
    event.preventDefault();
    if (results[0]) openResult(results[0]);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: scrolledPastHero && !open ? 0 : 1, y: scrolledPastHero && !open ? -12 : 0 }}
      transition={{ delay: 0.35 }}
      className={cn(
        "fixed inset-x-0 top-[5.85rem] z-[48] hidden px-3 transition sm:block",
        scrolledPastHero && !open ? "pointer-events-none" : "pointer-events-auto"
      )}
    >
      <form
        ref={searchRef}
        onSubmit={submitSearch}
        className="relative mx-auto w-[min(780px,100%)] rounded-2xl border border-aurora-blue/20 bg-abyss-950/88 p-2 shadow-glass backdrop-blur-2xl"
        role="search"
      >
        <div className="flex min-h-12 items-center gap-3 rounded-xl bg-white/[0.055] px-4">
          <Search size={19} className="shrink-0 text-aurora-cyan" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search sections, resume, dashboard, mobile..."
            className="min-w-0 flex-1 bg-transparent text-sm font-bold text-white outline-none placeholder:text-slate-500"
            aria-label="Search CareerOS sections and modules"
            autoComplete="off"
          />
          <span className="hidden rounded-lg border border-white/10 px-2 py-1 font-mono text-xs text-slate-500 sm:block">
            Ctrl K
          </span>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              className="absolute left-0 right-0 top-full overflow-hidden rounded-2xl border border-white/10 bg-abyss-900/96 p-2 shadow-cinematic backdrop-blur-2xl"
            >
              {results.length ? (
                <div className="grid gap-1">
                  {results.map((result) => (
                    <button
                      key={`${result.type}-${result.label}`}
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => openResult(result)}
                      className="flex items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-aurora-blue/10 focus:bg-aurora-blue/10 focus:outline-none"
                    >
                      <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-aurora-cyan/20 bg-aurora-cyan/10 text-aurora-cyan">
                        <Search size={15} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-black text-white">{result.label}</span>
                          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] font-black uppercase tracking-[0.12em] text-aurora-cyan">
                            {result.type}
                          </span>
                        </span>
                        <span className="mt-1 block text-sm leading-5 text-slate-400">{result.description}</span>
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-5 text-sm font-bold text-slate-400">
                  No matching CareerOS section found. Try dashboard, resume, mobile, research, or design system.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}

function CinematicBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-abyss-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
      <motion.div
        className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-aurora-blue/20 blur-3xl max-sm:hidden"
        animate={{ x: [0, 80, 20, 0], y: [0, 60, 120, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10rem] top-[16rem] h-[30rem] w-[30rem] rounded-full bg-aurora-indigo/20 blur-3xl max-sm:hidden"
        animate={{ x: [0, -80, -20, 0], y: [0, 80, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-abyss-950 via-abyss-950/80 to-transparent" />
    </div>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto max-w-5xl perspective-1000"
    >
      <div className="absolute -inset-8 rounded-[2.5rem] bg-aurora-blue/10 blur-3xl max-sm:hidden" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-abyss-900/86 shadow-cinematic backdrop-blur-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-aurora-cyan" />
          <span className="h-3 w-3 rounded-full bg-aurora-mint" />
          <div className="ml-auto hidden rounded-full border border-white/10 bg-black/20 px-4 py-2 font-mono text-xs text-slate-400 sm:block">
            career readiness command center
          </div>
        </div>
        <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[220px_1fr]">
          <aside className="hidden border-r border-white/10 p-5 lg:block">
            <div className="mb-8 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-aurora-blue text-abyss-950 font-black">C</span>
              <div>
                <p className="m-0 text-sm font-black">CareerOS</p>
                <p className="m-0 text-xs text-slate-500">Student workspace</p>
              </div>
            </div>
            {["Home", "Resume", "Interviews", "Applications", "Roadmap", "Analytics", "Mentors"].map((item, index) => (
              <div
                key={item}
                className={cn(
                  "mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold",
                  index === 0 ? "bg-aurora-blue/12 text-white" : "text-slate-500"
                )}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {item}
              </div>
            ))}
          </aside>
          <div className="p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-aurora-cyan">Friday readiness</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">82% ready</h2>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-aurora-blue/30 bg-aurora-blue/10 px-4 py-3 text-sm font-black text-aurora-cyan">
                <Command size={16} />
                Ask Career AI
              </button>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                ["ATS Score", "91", "Resume fit is high"],
                ["Applications", "18", "4 follow-ups due"],
                ["Interview IQ", "76", "Practice behavioral"]
              ].map(([label, value, desc]) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-5"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                  <div className="font-mono text-4xl font-black">{value}</div>
                  <p className="mb-0 mt-3 text-sm text-slate-400">{desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
              <div className="rounded-3xl border border-aurora-blue/20 bg-gradient-to-br from-aurora-blue/12 to-white/[0.035] p-5 shadow-glass">
                <div className="mb-4 inline-flex rounded-full border border-aurora-cyan/20 bg-aurora-cyan/10 px-3 py-1 text-xs font-black text-aurora-cyan">
                  Next best action
                </div>
                <h3 className="text-2xl font-black">Update project impact bullets before applying today.</h3>
                <p className="text-slate-400">
                  Seven saved frontend roles request accessibility, testing, and performance metrics. CareerOS found those
                  missing from your top project bullets.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["Rewrite bullets", "Add keywords", "Apply to 3 roles"].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-bold">
                      <Check className="mb-2 text-aurora-mint" size={16} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Focus analytics</p>
                <div className="mt-5 flex h-40 items-end gap-3">
                  {[42, 68, 54, 88, 72, 52, 80].map((height, index) => (
                    <motion.span
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.45 + index * 0.06, duration: 0.7 }}
                      key={height + index}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-aurora-indigo to-aurora-cyan"
                    />
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-400">
                  <span>DSA</span>
                  <span>Resume</span>
                  <span>Interview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.18], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.16], [1, 0.35]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-4 pb-20 pt-48 sm:px-6 sm:pt-52 lg:px-8">
      <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-aurora-blue/20 bg-aurora-blue/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-aurora-cyan"
          >
            <Fingerprint size={15} />
            AI Career Operating System
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-balance text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            CareerOS turns fragmented job prep into one measurable operating loop.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl"
          >
            A case-study prototype for ambitious students and career switchers: it connects resume evidence, role-fit
            scoring, applications, interview practice, skills, and mentorship into one weekly decision system.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a href="#product">
              <MagneticButton>Try Readiness Lab</MagneticButton>
            </a>
            <a href="#research">
              <MagneticButton variant="secondary">View Design Rationale</MagneticButton>
            </a>
          </motion.div>
        </div>
        <div className="mt-16">
          <HeroDashboard />
        </div>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  return (
    <section id="experience" className="border-y border-white/10 bg-white/[0.025] px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-sm text-slate-500">
        <span className="font-mono uppercase tracking-[0.18em]">Craft language inspired by</span>
        {["Linear", "Stripe", "Vercel", "Apple", "Notion", "Arc Browser", "Duolingo Analytics"].map((item) => (
          <span key={item} className="font-black text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProblemFraming() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel>Why This Should Exist</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              The problem is not applying. It is knowing what improves hireability next.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            CareerOS is designed around a product thesis: job seekers do not need a prettier checklist. They need a
            system that connects fragmented evidence into priority, confidence, and weekly action.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {evidenceCards.map(([title, detail], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="font-mono text-sm font-black text-aurora-cyan">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowComparison() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Before / After</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">From scattered effort to a weekly operating loop.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-slate-500">Current workflow</p>
            <h3 className="mt-4 text-3xl font-black">High effort, low visibility</h3>
            <div className="mt-6 grid gap-3">
              {workflowBefore.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 font-bold text-slate-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden w-16 place-items-center lg:grid">
            <ArrowRight className="text-aurora-cyan" size={34} />
          </div>
          <div className="rounded-[2rem] border border-aurora-cyan/25 bg-aurora-blue/10 p-5 shadow-glow sm:p-7">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-aurora-cyan">CareerOS workflow</p>
            <h3 className="mt-4 text-3xl font-black">Connected signals, clear priority</h3>
            <div className="mt-6 grid gap-3">
              {workflowAfter.map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-aurora-cyan/20 bg-abyss-950/50 p-4 font-bold">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-aurora-cyan/10 font-mono text-xs text-aurora-cyan">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadinessLab() {
  const [roleIndex, setRoleIndex] = useState(0);
  const activeRole = readinessRoles[roleIndex];

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>Interactive Prototype</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Readiness Lab shows the product logic, not just screens.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Change the target role and the system recalculates readiness, identifies the weakest signal, and produces the
            next-best action a real user could take this week.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-abyss-900/80 shadow-cinematic">
          <div className="grid border-b border-white/10 bg-white/[0.035] p-3 sm:grid-cols-3">
            {readinessRoles.map((item, index) => (
              <button
                key={item.role}
                type="button"
                onClick={() => setRoleIndex(index)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-left text-sm font-black transition",
                  roleIndex === index ? "bg-aurora-cyan text-abyss-950" : "text-slate-300 hover:bg-white/[0.06]"
                )}
              >
                {item.role}
              </button>
            ))}
          </div>
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r sm:p-8">
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-slate-500">Role-fit readiness</p>
              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end">
                <div className="grid h-44 w-44 shrink-0 place-items-center rounded-full bg-[conic-gradient(#54E0FF_var(--score),rgba(255,255,255,.08)_0)] p-3" style={{ "--score": `${activeRole.score}%` }}>
                  <div className="grid h-full w-full place-items-center rounded-full bg-abyss-900">
                    <span className="font-mono text-5xl font-black">{activeRole.score}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black">{activeRole.role}</h3>
                  <p className="mt-4 text-slate-400">Weakest signal: <span className="font-black text-aurora-rose">{activeRole.risk}</span></p>
                </div>
              </div>
              <div className="mt-8 rounded-3xl border border-aurora-cyan/20 bg-aurora-cyan/10 p-5">
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-aurora-cyan">Next-best action</p>
                <p className="mt-3 text-xl font-black leading-8">{activeRole.action}</p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid gap-4">
                {activeRole.signals.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="font-black">{label}</span>
                      <span className="font-mono text-sm font-black text-aurora-cyan">{value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        key={`${activeRole.role}-${label}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-aurora-blue via-aurora-cyan to-aurora-mint"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Explain score", "Create plan", "Save evidence"].map((item) => (
                  <button key={item} type="button" className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-black text-slate-200 transition hover:bg-white/[0.09]">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideDeck() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      let anchorTimers = [];
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${slideContent.length * 420}`,
        pin: ".slide-pin",
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(slideContent.length - 1, Math.floor(self.progress * slideContent.length));
          setActive(index);
        }
      });

      if (window.location.hash && normalizeAnchorId(window.location.hash) !== "slides") {
        anchorTimers = [120, 420, 900].map((delay) =>
          window.setTimeout(() => scrollToSection(normalizeAnchorId(window.location.hash), "auto"), delay)
        );
      }

      return () => {
        anchorTimers.forEach((timer) => window.clearTimeout(timer));
        trigger.kill();
      };
    });

    return () => mm.revert();
  }, []);

  const current = slideContent[active];

  return (
    <section id="slides" ref={sectionRef} className="relative">
      <div className="slide-pin min-h-screen px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionLabel>20+ Cinematic Presentation Slides</SectionLabel>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(12px)" }}
                transition={{ duration: 0.42 }}
              >
                <p className="mb-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-aurora-cyan">
                  {current.kicker}
                </p>
                <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
                  {current.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{current.text}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-9 flex items-center gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-aurora-blue via-aurora-cyan to-aurora-indigo"
                  animate={{ width: `${((active + 1) / slideContent.length) * 100}%` }}
                />
              </div>
              <span className="font-mono text-sm font-black text-slate-400">
                {String(active + 1).padStart(2, "0")} / {slideContent.length}
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-aurora-blue/10 blur-3xl max-sm:hidden" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-abyss-900/72 p-4 shadow-cinematic backdrop-blur-2xl">
              <div className="grid gap-3 sm:grid-cols-2">
                {slideContent.slice(Math.max(0, active - 2), active + 4).map((slide, index) => (
                  <motion.div
                    key={slide.kicker}
                    layout
                    className={cn(
                      "min-h-44 rounded-2xl border p-5",
                      slide.kicker === current.kicker
                        ? "border-aurora-cyan/40 bg-aurora-blue/12 shadow-glow"
                        : "border-white/10 bg-white/[0.04]"
                    )}
                  >
                    <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-aurora-cyan">
                      {slide.kicker}
                    </p>
                    <h3 className="mt-4 text-xl font-black">{slide.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{slide.text}</p>
                    <span className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-xs font-black text-slate-400">
                      {String(Math.max(0, active - 2) + index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductModules() {
  const [selected, setSelected] = useState(0);
  const SelectedIcon = modules[selected].icon;

  useEffect(() => {
    const openModule = (event) => {
      const nextIndex = Number(event.detail);
      if (Number.isInteger(nextIndex) && nextIndex >= 0 && nextIndex < modules.length) {
        setSelected(nextIndex);
      }
    };

    window.addEventListener("careeros:open-module", openModule);
    return () => window.removeEventListener("careeros:open-module", openModule);
  }, []);

  return (
    <section id="product" className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Product Depth</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">A connected product model, not eight disconnected dashboard cards.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Every module sends evidence into the same readiness engine, so resume edits, interview practice, applications,
            skills, and mentorship all change the weekly priority plan.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="grid gap-2">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <button
                  key={module.title}
                  onClick={() => setSelected(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  className={cn(
                    "group flex min-h-[118px] items-start gap-4 rounded-2xl border p-4 text-left transition",
                    selected === index
                      ? "border-aurora-blue/40 bg-aurora-blue/12 shadow-glow"
                      : "border-white/10 bg-white/[0.035] hover:bg-white/[0.06]"
                  )}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-aurora-cyan">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block font-black text-white">{module.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-400">{module.detail}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={modules[selected].title}
              initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-abyss-900/72 p-5 shadow-cinematic lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto"
            >
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora-blue/14 text-aurora-cyan">
                    <SelectedIcon size={26} />
                  </span>
                  <div>
                    <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Module {String(selected + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-2xl font-black">{modules[selected].title}</h3>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-aurora-cyan/20 bg-aurora-cyan/10 px-3 py-2 text-xs font-black text-aurora-cyan">
                  AI-native surface
                </span>
              </div>
              <DynamicProductCanvas selected={selected} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function DynamicProductCanvas({ selected }) {
  const chart = [62, 84, 48, 92, 71, 78, 88, 66];
  const heat = Array.from({ length: 42 }, (_, index) => index);

  if (selected === 1) {
    return (
      <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-slate-500">ATS Score</p>
          <div className="mx-auto my-8 grid h-48 w-48 place-items-center rounded-full bg-[conic-gradient(#54E0FF_0_88%,rgba(255,255,255,.08)_88%)]">
            <div className="grid h-36 w-36 place-items-center rounded-full bg-abyss-900">
              <span className="font-mono text-5xl font-black">88</span>
            </div>
          </div>
          <p className="text-center text-sm leading-6 text-slate-400">Strong format, medium keyword coverage, high project clarity.</p>
        </div>
        <div className="grid gap-3">
          {["Add accessibility metrics to design system project", "Replace passive bullets with outcome verbs", "Include performance and testing keywords", "Create one resume version per target role"].map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-aurora-mint/12 text-aurora-mint">
                <Check size={17} />
              </span>
              <span className="font-bold text-slate-200">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (selected === 2) {
    return (
      <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-aurora-blue/10 px-3 py-2 text-xs font-black text-aurora-cyan">Live mock interview</span>
            <span className="font-mono text-2xl font-black">04:42</span>
          </div>
          <h3 className="mt-8 text-3xl font-black">Tell me about a project where you improved a measurable user outcome.</h3>
          <div className="mt-8 flex h-24 items-center justify-center gap-3">
            {[44, 88, 62, 108, 74, 94, 52].map((height, index) => (
              <motion.span
                key={index}
                animate={{ height: [height, height + 28, height] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: index * 0.08 }}
                className="w-3 rounded-full bg-gradient-to-t from-aurora-indigo to-aurora-cyan"
              />
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {[
            ["Clarity", "84%"],
            ["Structure", "76%"],
            ["Confidence", "71%"],
            ["Specificity", "89%"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex justify-between font-bold">
                <span>{label}</span>
                <span className="font-mono text-aurora-cyan">{value}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-aurora-blue to-aurora-mint" style={{ width: value }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (selected === 3) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {["Saved", "Applied", "Interview"].map((stage, columnIndex) => (
          <div key={stage} className="min-h-96 rounded-3xl border border-white/10 bg-white/[0.035] p-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-black">{stage}</h4>
              <span className="font-mono text-sm text-slate-500">{columnIndex + 2}</span>
            </div>
            {["Stripe", "Vercel", "Linear", "Apple"].slice(columnIndex, columnIndex + 2).map((company) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={company}
                className="mb-3 rounded-2xl border border-white/10 bg-abyss-900/80 p-4"
              >
                <strong>{company}</strong>
                <p className="mb-3 mt-1 text-sm text-slate-400">Frontend / Product Design Internship</p>
                <span className="rounded-full bg-aurora-blue/10 px-3 py-1 text-xs font-black text-aurora-cyan">Next action due</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (selected === 4) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Foundations", "UX Systems", "React", "Testing", "Portfolio", "Interviews", "Analytics", "Mentorship", "Offer Prep"].map((node, index) => (
          <motion.div
            key={node}
            whileHover={{ scale: 1.03 }}
            className={cn(
              "grid min-h-28 place-items-center rounded-3xl border p-4 text-center font-black",
              index < 3
                ? "border-aurora-mint/30 bg-aurora-mint/10 text-aurora-mint"
                : index === 3
                  ? "border-aurora-cyan/40 bg-aurora-blue/10 text-aurora-cyan shadow-glow"
                  : "border-white/10 bg-white/[0.035] text-slate-400"
            )}
          >
            {node}
          </motion.div>
        ))}
      </div>
    );
  }

  if (selected === 5) {
    return (
      <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-slate-500">Weekly focus report</p>
          <div className="mt-6 flex h-72 items-end gap-3">
            {chart.map((height, index) => (
              <motion.span
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                key={index}
                className="flex-1 rounded-t-2xl bg-gradient-to-t from-aurora-indigo via-aurora-blue to-aurora-cyan"
              />
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <h3 className="text-2xl font-black">AI insight</h3>
          <p className="mt-4 text-slate-400">
            Interview confidence is lagging behind application volume. Schedule two behavioral sessions before applying
            to final-round roles.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2">
            {heat.slice(0, 24).map((item) => (
              <span
                key={item}
                className="h-8 rounded-lg"
                style={{
                  background:
                    item % 5 === 0
                      ? "rgba(84,224,255,.35)"
                      : item % 3 === 0
                        ? "rgba(94,167,255,.25)"
                        : "rgba(255,255,255,.06)"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (selected === 6) {
    return (
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-slate-500">Goal-fit mentor match</p>
          <h3 className="mt-5 text-3xl font-black">Maya Iyer</h3>
          <p className="mt-3 leading-7 text-slate-400">Senior product designer, portfolio systems, interview storytelling.</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["Match", "94%"],
              ["Avail.", "Thu"],
              ["Focus", "UX"],
              ["Signal", "High"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
                <strong className="mt-2 block font-mono text-2xl text-aurora-cyan">{value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {["Review case-study narrative", "Tighten portfolio metrics", "Practice recruiter walkthrough", "Create follow-up action plan"].map((item, index) => (
            <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-aurora-cyan/10 font-mono text-xs font-black text-aurora-cyan">
                {index + 1}
              </span>
              <span className="font-bold text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (selected === 7) {
    return (
      <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-slate-500">Adaptive weekly plan</p>
          <div className="mt-6 grid gap-3">
            {[
              ["Mon", "Resume role-fit edits", "45 min"],
              ["Tue", "Frontend mock interview", "30 min"],
              ["Wed", "Apply to saved roles", "50 min"],
              ["Fri", "Weekly analytics review", "20 min"]
            ].map(([day, task, time]) => (
              <div key={day} className="grid grid-cols-[3.5rem_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-abyss-950/40 p-4">
                <span className="font-mono text-sm font-black text-aurora-cyan">{day}</span>
                <strong>{task}</strong>
                <span className="text-sm font-bold text-slate-500">{time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-aurora-mint/20 bg-aurora-mint/10 p-5">
          <h3 className="text-2xl font-black">Deadline-aware adjustment</h3>
          <p className="mt-4 leading-7 text-slate-300">
            The planner moves interview practice earlier because two saved roles close this week and confidence is the
            weakest readiness signal.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-aurora-mint">Plan health</p>
            <strong className="mt-2 block font-mono text-4xl">Strong</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
      <div className="rounded-3xl border border-aurora-blue/20 bg-gradient-to-br from-aurora-blue/12 to-white/[0.03] p-6">
        <h3 className="text-3xl font-black">Your next best action</h3>
        <p className="mt-4 leading-7 text-slate-300">
          Revise project bullets, apply to three saved roles, and schedule one behavioral mock interview before Friday.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["Resume", "Apply", "Practice"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 font-black">
              <Zap className="mb-4 text-aurora-cyan" size={22} />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        {[
          ["Readiness", "82%"],
          ["Streak", "12 days"],
          ["Pipeline health", "Strong"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-bold text-slate-500">{label}</p>
            <strong className="mt-2 block font-mono text-3xl">{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionLabel>UX Research</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Deep user insight, not decorative personas.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              CareerOS is built around emotional and behavioral friction: uncertainty, fragmented tools, invisible
              progress, inconsistent practice, and weak feedback loops.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["72%", "Unsure what to prioritize weekly"],
              ["67%", "Track applications manually"],
              ["61%", "Need role-specific resume feedback"],
              ["81%", "Want weekly progress summaries"]
            ].map(([stat, label]) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"
              >
                <div className="font-mono text-5xl font-black text-aurora-cyan">{stat}</div>
                <p className="mb-0 mt-4 font-bold leading-7 text-slate-300">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {personas.map(([name, role, need]) => (
            <motion.article
              whileHover={{ y: -5 }}
              key={name}
              className="rounded-3xl border border-white/10 bg-abyss-900/72 p-6 shadow-glass"
            >
              <span className="text-sm font-black uppercase tracking-[0.16em] text-aurora-cyan">{role}</span>
              <h3 className="mt-5 text-3xl font-black">{name}</h3>
              <p className="mt-4 leading-7 text-slate-400">{need}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
          <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r sm:p-8">
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-aurora-cyan">Journey map insight</p>
              <h3 className="mt-4 text-3xl font-black">The highest anxiety moment is not rejection. It is unclear prioritization.</h3>
              <p className="mt-4 leading-7 text-slate-400">
                That insight changed the product from a passive tracker into an active operating loop with a visible weekly recommendation.
              </p>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
              {["Collect evidence", "Score role-fit", "Pick priority", "Review weekly"].map((stage, index) => (
                <div key={stage} className="rounded-2xl border border-white/10 bg-abyss-950/35 p-4">
                  <span className="font-mono text-xs font-black text-slate-500">0{index + 1}</span>
                  <h4 className="mt-4 font-black">{stage}</h4>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-aurora-blue to-aurora-cyan" style={{ width: `${55 + index * 13}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionArtifacts() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Design Decisions</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">The case study now has interview-ready rationale.</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {decisionArtifacts.map(([title, detail], index) => (
            <motion.article
              key={title}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-aurora-blue/10 font-mono text-sm font-black text-aurora-cyan">
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignSystemSection() {
  return (
    <section id="system" className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Design System</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">A premium dark-blue system with no yellow in the palette.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The interface uses deep navy surfaces, blue/cyan intelligence cues, indigo/violet depth, mint success, and
            rose risk. Typography is direct, dense, and enterprise-grade.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_.85fr_1.15fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-2xl font-black">Typography</h3>
            <div className="mt-6 text-5xl font-black tracking-tight">Career readiness</div>
            <div className="mt-5 text-2xl font-extrabold">Weekly priority plan</div>
            <p className="mt-4 leading-7 text-slate-400">Use Inter for product clarity and JetBrains Mono for scores, metrics, and system labels.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-2xl font-black">Color Tokens</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {designTokens.map(([name, color]) => (
                <div key={name} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <span className="block h-12 rounded-xl" style={{ background: color }} />
                  <p className="mb-0 mt-3 text-xs font-black text-slate-400">{name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-2xl font-black">Component States</h3>
            <div className="mt-6 grid gap-3">
              {[
                ["Default", "border-white/10 bg-white/[0.04]"],
                ["Hover", "border-aurora-blue/30 bg-aurora-blue/10"],
                ["Focused", "border-aurora-cyan/50 bg-aurora-cyan/10"],
                ["Success", "border-aurora-mint/30 bg-aurora-mint/10"],
                ["Risk", "border-aurora-rose/30 bg-aurora-rose/10"]
              ].map(([label, cls]) => (
                <div key={label} className={cn("rounded-2xl border p-4 font-bold", cls)}>
                  {label} state
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileSection() {
  const phones = [
    ["Dashboard", "Next action", "Revise resume bullets before applying to saved roles."],
    ["Tracker", "Stage update", "Move Apple UX Internship to interview and set follow-up."],
    ["Interview", "Voice practice", "Answer with context, tradeoff, action, and outcome."]
  ];

  return (
    <section id="mobile" className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Responsive Mobile UX</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Mobile screens built for quick career actions.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The mobile product does not simply shrink desktop. It prioritizes daily decisions, application movement,
            reminders, and AI practice.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {phones.map(([title, action, detail], index) => (
            <motion.div
              whileHover={{ y: -8, rotate: index === 1 ? 0 : index === 0 ? -1.5 : 1.5 }}
              key={title}
              className="mx-auto w-full max-w-[340px] rounded-[2.4rem] border border-white/14 bg-black p-3 shadow-cinematic"
            >
              <div className="min-h-[620px] rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(94,167,255,.22),transparent_16rem),#08101f] p-5">
                <div className="mb-7 flex items-center justify-between">
                  <strong>{title}</strong>
                  <span className="font-mono text-sm text-aurora-cyan">82%</span>
                </div>
                <div className="rounded-3xl border border-aurora-blue/20 bg-aurora-blue/10 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-aurora-cyan">{action}</p>
                  <h3 className="mt-4 text-2xl font-black">{detail}</h3>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <span className="font-mono text-3xl font-black">12</span>
                    <p className="mb-0 mt-2 text-xs font-bold text-slate-500">day streak</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <span className="font-mono text-3xl font-black">4</span>
                    <p className="mb-0 mt-2 text-xs font-bold text-slate-500">tasks due</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3">
                  {["Resume review", "Mock interview", "Follow up"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-bold text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-around rounded-2xl border border-white/10 bg-black/30 p-3 text-slate-500">
                  <LayoutDashboard size={19} />
                  <BriefcaseBusiness size={19} />
                  <Mic2 size={19} />
                  <BarChart3 size={19} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrototypeFlow() {
  return (
    <section className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <SectionLabel>Prototype Architecture</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">A complete activation-to-retention flow.</h2>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-abyss-900/80 p-5 shadow-cinematic">
          <div className="absolute left-0 top-1/2 hidden h-px w-full bg-gradient-to-r from-transparent via-aurora-blue/40 to-transparent lg:block" />
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {prototypeSteps.map((step, index) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-aurora-blue/20 bg-aurora-blue/10 font-mono text-xs font-black text-aurora-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-black">{step}</h3>
                <p className="mb-0 mt-2 text-sm leading-6 text-slate-400">
                  {index < 2
                    ? "Personalizes the workspace."
                    : index < 5
                      ? "Creates immediate product value."
                      : index < 8
                        ? "Keeps the search operational."
                        : "Completes the improvement loop."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  const caseItems = [
    "Problem Statement",
    "Research",
    "Insights",
    "Personas",
    "Journey Map",
    "Information Architecture",
    "Wireframes",
    "Design System",
    "High-Fidelity UI",
    "Motion Design",
    "Responsive UI",
    "Accessibility",
    "Prototype",
    "Impact",
    "Reflection"
  ];

  return (
    <section id="case-study" className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.4rem] border border-aurora-blue/20 bg-[radial-gradient(circle_at_80%_20%,rgba(84,224,255,.16),transparent_28rem),rgba(8,24,45,.84)] p-6 shadow-cinematic sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Final Case Study</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                Designed to signal FAANG-level thinking at a glance.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                This website presents CareerOS as a serious AI product and a complete UI/UX case study: research,
                product strategy, interaction design, visual system, responsive execution, and cinematic storytelling.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#top">
                  <MagneticButton>Replay Experience</MagneticButton>
                </a>
                <a href="./case-study.html">
                  <MagneticButton variant="secondary">Open Written Case Study</MagneticButton>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {caseItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.025 }}
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 font-bold text-slate-200"
                >
                  <ChevronRight size={17} className="text-aurora-cyan" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsBand() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {[
          ["42", "career signals collapsed into one readiness model"],
          ["8", "modules feeding the same weekly action loop"],
          ["3", "role-specific readiness scenarios in the prototype"],
          ["0", "dead-end recommendations without supporting evidence"]
        ].map(([value, label]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="font-mono text-5xl font-black text-aurora-cyan">{value}</div>
            <p className="mb-0 mt-3 text-sm font-bold leading-6 text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gsap-float").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%"
            }
          }
        );
      });
    });

    const settleAnchoredHash = () => {
      ScrollTrigger.refresh();

      if (window.location.hash) {
        scrollToSection(normalizeAnchorId(window.location.hash), "auto");
      }
    };

    let hashTimers = [];
    const queueAnchoredHashSettle = () => {
      hashTimers.forEach((timer) => window.clearTimeout(timer));
      hashTimers = [80, 260, 700].map((delay) => window.setTimeout(settleAnchoredHash, delay));
    };

    const refreshFrame = window.requestAnimationFrame(() => {
      queueAnchoredHashSettle();
    });

    window.addEventListener("hashchange", queueAnchoredHashSettle);

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      hashTimers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", queueAnchoredHashSettle);
      ctx.revert();
    };
  }, []);

  const architectureCards = useMemo(
    () => [
      [BrainCircuit, "AI Recommendation Engine", "Explains why each task matters using resume, role, calendar, and pipeline context."],
      [Network, "Career Knowledge Graph", "Connects skills, roles, projects, mentors, applications, and interview feedback."],
      [Gauge, "Readiness Model", "Combines effort, quality, consistency, and conversion signals into one career score."],
      [ShieldCheck, "Trust and Accessibility", "Editable AI output, visible focus states, chart summaries, and reduced-motion support."]
    ],
    []
  );

  return (
    <>
      <CinematicBackdrop />
      <motion.div className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-aurora-blue via-aurora-cyan to-aurora-indigo" style={{ scaleX }} />
      <Header />
      <TopCommandSearch />
      <main>
        <Hero />
        <TrustBar />
        <MetricsBand />
        <ProblemFraming />
        <WorkflowComparison />
        <ReadinessLab />
        <SlideDeck />
        <section className="px-4 py-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>System Architecture</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">The UX is deep because the product model is deep.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                CareerOS feels premium because every surface is connected to a clear intelligence layer, not just styled as a dashboard.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-4">
              {architectureCards.map(([Icon, title, detail]) => (
                <motion.article
                  whileHover={{ y: -6 }}
                  key={title}
                  className="gsap-float rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-glass"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora-blue/10 text-aurora-cyan">
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mb-0 mt-3 text-sm leading-7 text-slate-400">{detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <ProductModules />
        <ResearchSection />
        <DecisionArtifacts />
        <DesignSystemSection />
        <MobileSection />
        <PrototypeFlow />
        <CaseStudySection />
      </main>
      <footer className="px-4 pb-28 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 pt-8 text-slate-500 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3 font-black text-white">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-aurora-blue text-abyss-950">C</span>
              CareerOS
            </div>
            <p className="mb-0 mt-3 max-w-lg text-sm leading-6">
              A cinematic AI career operating system portfolio project built with React, Tailwind CSS, Framer Motion, and GSAP.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <Activity size={17} className="text-aurora-cyan" />
            Built for top-level UI/UX presentation
          </div>
        </div>
      </footer>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = window.__careerOSRoot || import.meta.hot?.data.root || createRoot(rootElement);

window.__careerOSRoot = root;
if (import.meta.hot) {
  import.meta.hot.data.root = root;
}

root.render(<App />);
