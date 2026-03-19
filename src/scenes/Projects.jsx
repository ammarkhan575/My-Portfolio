import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "Squareboat Website Migration",
        summary:
            "Migrated from Laravel to NestJS with AWS S3/Lambda integration for automated media processing and multi-resolution optimization.",
        focus: "Platform Migration",
        stack: ["NestJS", "Laravel", "AWS S3", "AWS Lambda", "MySQL"],
    },
    {
        title: "Compile-X",
        summary:
            "Built an online code compiler for 40+ languages using Judge0 and Monaco Editor with real-time execution feedback.",
        focus: "Developer Tooling",
        stack: ["React", "Monaco Editor", "Judge0 API", "Tailwind CSS"],
    },
    {
        title: "Job Portal",
        summary:
            "Delivered a multi-role recruitment platform with Redis-backed security, RTK Query data flows, and automated alerts.",
        focus: "Product Platform",
        stack: ["React", "NestJS", "MySQL", "Redis", "RTK Query"],
    },
    {
        title: "Referral System",
        summary:
            "Automated referral payouts and ledger generation for an education platform to reduce manual finance overhead.",
        focus: "Business Automation",
        stack: ["NestJS", "MySQL", "Ledger Logic", "Admin Workflows"],
    },
    {
        title: "HRMS Platform",
        summary:
            "Migrated work log drafts from local storage to backend persistence for seamless cross-device continuity.",
        focus: "Product Enhancement",
        stack: ["React", "NestJS", "State Management", "API Design"],
    },
    {
        title: "Performance Optimization",
        summary:
            "Resolved N+1 query bottlenecks and improved critical API latency with optimized query and indexing strategy.",
        focus: "Scalability",
        stack: ["SQL", "Query Optimization", "Indexing", "Backend APIs"],
    },
    {
        title: "Automated EL System",
        summary:
            "Removed manual HR intervention by automating earned leave calculations and reducing operational errors.",
        focus: "Workflow Automation",
        stack: ["NestJS", "Business Rules", "Data Validation"],
    },
    {
        title: "Email Queue System",
        summary:
            "Implemented Redis-backed async email delivery reducing synchronous API response time from seconds to milliseconds.",
        focus: "Queue Architecture",
        stack: ["Redis", "Queues", "Async Processing", "Node.js"],
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const Project = ({ title, summary, focus, stack }) => {
    return (
        <motion.article
            variants={projectVariant}
            className="panel group relative overflow-hidden border border-line/90 bg-white/90 p-6 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-soft"
        >
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent-soft/15 blur-2xl" />

            <div className="relative z-10">
                <p className="inline-flex rounded-full border border-line bg-mist px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                    Case Study
                </p>

                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink">
                    {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">{summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-semibold text-slate"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                        Focus <span className="text-slate">{focus}</span>
                    </p>
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
                        Production
                    </span>
                </div>
            </div>
        </motion.article>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-24">
            <motion.div
                className="mx-auto max-w-3xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <span className="section-kicker">Projects</span>
                <h2 className="section-title mt-5">Selected product and platform work</h2>
                <p className="section-copy mt-5">
                    These projects highlight production systems, migrations, and high-impact
                    backend optimizations delivered across frontend, API, and infrastructure.
                </p>
            </motion.div>

            <motion.div
                className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
            >
                <motion.article
                    variants={projectVariant}
                    className="panel flex flex-col justify-between border border-accent/25 bg-gradient-to-br from-accent/95 to-ink p-6 text-white"
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-soft">
                            Delivery Snapshot
                        </p>
                        <h3 className="mt-3 font-display text-3xl font-bold">8+ Projects</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/85">
                            End-to-end execution from architecture and implementation to performance
                            hardening and release.
                        </p>
                    </div>

                    <div className="mt-7 flex gap-5 text-sm text-white/90">
                        <span>
                            <strong className="block font-display text-2xl text-white">40+</strong>
                            Languages
                        </span>
                        <span>
                            <strong className="block font-display text-2xl text-white">8+</strong>
                            Deliveries
                        </span>
                    </div>
                </motion.article>

                {PROJECTS.map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        summary={project.summary}
                        focus={project.focus}
                        stack={project.stack}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;