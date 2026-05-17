import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Reveal, SectionLabel } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { LogoWall } from "@/components/site/LogoWall";
import alinImg from "@/assets/founder-alin.jpg";
import luigiImg from "@/assets/founder-luigi.jpg";
import miguelImg from "@/assets/founder-miguel.jpg";
import billieLogo from "@/assets/logos/billie.svg";
import centerpointLogo from "@/assets/logos/centerpoint.png";
import indraLogo from "@/assets/logos/indra.png";
import moonfareLogo from "@/assets/logos/moonfare.svg";
import pwcLogo from "@/assets/logos/pwc.svg";
import sohonetLogo from "@/assets/logos/sohonet.png";
import teamnetLogo from "@/assets/logos/teamnet.jpg";
import ubisoftLogo from "@/assets/logos/ubisoft.png";
import { ArrowUpRight, Lightbulb, Code2, Compass, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Noveria Studio" },
      {
        name: "description",
        content:
          "Noveria Studio is a modern idea, product, and venture studio developing digital concepts, websites, apps, and future startup projects.",
      },
      { property: "og:title", content: "Noveria Studio. Ideas shaped into digital ventures" },
      {
        property: "og:description",
        content:
          "A studio for developing high-potential digital ideas into structured, investable products and ventures.",
      },
    ],
  }),
});

const services = [
  {
    icon: Lightbulb,
    title: "Idea Development",
    desc: "We identify and shape promising digital concepts from early-stage thinking into structured opportunities.",
  },
  {
    icon: Code2,
    title: "Web & App Projects",
    desc: "We design and develop clean, modern websites and applications with a strong focus on user experience and scalability.",
  },
  {
    icon: Compass,
    title: "Product Strategy",
    desc: "We define positioning, target users, value proposition, and execution paths for each idea.",
  },
  {
    icon: Rocket,
    title: "Venture Preparation",
    desc: "We prepare selected concepts to become investment-ready projects, future startups, or strategic partnerships.",
  },
];

const approach = [
  "Identify a strong opportunity",
  "Shape the concept",
  "Validate the positioning",
  "Build the digital foundation",
  "Prepare it for launch, investment, or partnership",
];

const experience = [
  { name: "Ubisoft", src: ubisoftLogo },
  { name: "PwC", src: pwcLogo },
  { name: "Indra", src: indraLogo },
  { name: "Billie", src: billieLogo },
  { name: "Moonfare", src: moonfareLogo },
  { name: "CenterPoint Energy", src: centerpointLogo },
  { name: "Sohonet", src: sohonetLogo },
  { name: "Teamnet", src: teamnetLogo },
];

const founders: {
  name: string;
  role: string;
  img: string;
  desc: string;
  linkedin?: string;
}[] = [
  {
    name: "Alin",
    role: "Technology & Software Engineering",
    img: alinImg,
    desc: "Leads the technological side of Noveria Studio alongside an app development team with more than 10 years of experience in Software Engineering. Focused on technical architecture, scalable systems, digital product development, and long-term technological execution.",
    linkedin: "https://www.linkedin.com/in/alinnitu/",
  },
  {
    name: "Luigi",
    role: "Operations, Visual Design & AI",
    img: luigiImg,
    desc: "Coordinates operations and visual direction across Noveria Studio projects. Currently pursuing a degree in Computer Engineering, with experience in AI and future specialization in cybersecurity. Focused on execution, structure, design systems, branding, and operational coordination.",
    linkedin: "https://www.linkedin.com/in/luigi-gabriel-dogaru-76281538a/",
  },
  {
    name: "Miguel",
    role: "Strategy, Innovation & Investor Relations",
    img: miguelImg,
    desc: "Focused on identifying opportunities, developing innovative ideas, and leading project direction alongside investors and strategic partners. Responsible for positioning concepts, long-term vision, business direction, and investor communication.",
  },
];

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Toaster theme="dark" position="top-center" />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-32">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>Idea · Product · Venture Studio</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Ideas shaped into{" "}
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                digital ventures
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              We develop digital ideas, products, websites, and applications with strategic
              positioning, clean execution, and long-term potential.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#about"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                Explore Noveria Studio
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-full border border-border bg-surface px-6 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <SectionLabel>About</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                About Noveria Studio
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <Reveal delay={80}>
              <p>
                Noveria Studio is a small studio focused on creating, refining, and developing digital
                ideas with real market potential.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                We work at the intersection of strategy, design, technology, and execution,
                turning early concepts into structured projects ready for growth, investment, or
                launch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Companies we've worked with
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Multidisciplinary team with experience across executive leadership, AI
                integration, automation, digital transformation, branding, and enterprise
                technology solutions.
              </p>
              <p>
                Our background includes work with multinational companies such as Indra,
                PwC, CenterPoint Energy, Teamnet International, Ubisoft, as well as fast-growing startups like
                Moonfare, Billie or Sohonet.
              </p>
              <p>
                Focused on building scalable digital products, improving operations, and
                turning ambitious ideas into structured business ventures.
              </p>
            </div>
          </Reveal>
          <div className="mt-14">
            <Reveal delay={120}>
              <LogoWall logos={experience} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              What We Do
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group h-full bg-surface p-8 transition-colors hover:bg-surface-elevated">
                  <s.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <SectionLabel>Process</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                Our Approach
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We do not build ideas randomly. We focus on clarity, differentiation, and
                execution.
              </p>
            </Reveal>
          </div>
          <ol className="md:col-span-8 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
            {approach.map((step, i) => (
              <Reveal key={step} delay={i * 70}>
                <li className="relative flex items-start gap-6 py-5">
                  <span className="relative z-10 mt-1 grid h-6 w-6 place-items-center rounded-full border border-border bg-background text-[10px] font-medium text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-foreground">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <SectionLabel>Team</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">The Team</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A small team with a shared focus on ideas, execution, and long-term value.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:bg-surface-elevated">
                  <div className="relative aspect-[4/5] overflow-hidden bg-background">
                    <img
                      src={f.img}
                      alt={`${f.name} — ${f.role}`}
                      width={768}
                      height={960}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-medium tracking-tight">{f.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {f.role}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                    {f.linkedin && (
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${f.name} on LinkedIn`}
                        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE PROJECTS */}
      <section id="future" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel>Roadmap</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                Future Projects
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Noveria Studio is currently shaping its first digital concepts across services,
                applications, and scalable product ideas. Our upcoming projects will be presented
                as they mature, with a focus on clarity, usefulness, and long-term potential.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-10 shadow-soft">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-gradient opacity-[0.08] blur-3xl" />
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  In Development
                </span>
                <h3 className="mt-4 text-2xl font-medium tracking-tight">Upcoming Concept</h3>
                <p className="mt-3 text-sm text-muted-foreground">Details coming soon.</p>
                <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Currently in shaping phase
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section id="investors" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 md:p-16">
              <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
              <div className="relative max-w-3xl">
                <SectionLabel>For Investors & Partners</SectionLabel>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                  Building a platform for high-potential digital ventures.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We are open to conversations with investors, operators, and strategic partners
                  who want to collaborate early on future ventures.
                </p>
                <a
                  href="#contact"
                  className="mt-10 inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                Let's talk.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Interested in investing, collaborating, or discussing future projects? Send us a
                message, we read every inquiry.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-[0.2em] text-foreground">NOVERIA STUDIO</span>
            <span className="text-xs">© 2026</span>
          </div>
          <span className="text-xs uppercase tracking-[0.25em]">
            Ideas. Products. Ventures.
          </span>
        </div>
      </footer>
    </div>
  );
}
