import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import project5 from "../assets/project-5.jpeg";
import project6 from "../assets/project-6.jpeg";
import project7 from "../assets/project-7.jpeg";
import project8 from "../assets/project-8.png";

const PROJECTS = [
    {
        title: "Squareboat Website",
        subtitle:
            "Migrated from Laravel to NestJS with AWS S3/Lambda integration for automated media processing and multi-resolution optimization.",
        image: project1,
    },
    {
        title: "Compile-X",
        subtitle:
            "Built an online code compiler for 40+ languages using Judge0 and Monaco Editor with real-time execution feedback.",
        image: project2,
    },
    {
        title: "Job Portal",
        subtitle:
            "Delivered a multi-role recruitment platform with Redis-backed security, RTK Query data flows, and automated alerts.",
        image: project3,
    },
    {
        title: "Referral System",
        subtitle:
            "Automated referral payouts and ledger generation for an education platform to reduce manual finance overhead.",
        image: project4,
    },
    {
        title: "HRMS Platform",
        subtitle:
            "Migrated work log drafts from local storage to backend persistence for seamless cross-device continuity.",
        image: project5,
    },
    {
        title: "Performance Optimization",
        subtitle:
            "Resolved N+1 query bottlenecks and improved critical API latency with optimized query and indexing strategy.",
        image: project6,
    },
    {
        title: "Automated EL System",
        subtitle:
            "Removed manual HR intervention by automating earned leave calculations and reducing operational errors.",
        image: project7,
    },
    {
        title: "Email Queue System",
        subtitle:
            "Implemented Redis-backed async email delivery reducing synchronous API response time from seconds to milliseconds.",
        image: project8,
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

const Project = ({ title, subtitle, image }) => {
    return (
        <motion.article
            variants={projectVariant}
            className="panel group overflow-hidden border border-white/90"
        >
            <div className="relative h-52 overflow-hidden">
                <img
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    src={image}
                    alt={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            </div>

            <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{subtitle}</p>
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
                            <strong className="block font-display text-2xl text-white">ms</strong>
                            Queue Latency
                        </span>
                    </div>
                </motion.article>

                {PROJECTS.map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        subtitle={project.subtitle}
                        image={project.image}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;