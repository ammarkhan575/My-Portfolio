import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Squareboat Solutions Pvt Ltd",
    duration: "Oct 2024 - Present",
    location: "Gurgaon, India",
    highlights: [
      "Built and shipped a referral system with automated ledger generation to streamline payout workflows.",
      "Migrated backend modules from Laravel to NestJS for better maintainability and scalability.",
      "Improved database performance by fixing N+1 patterns and optimizing high-traffic queries.",
      "Worked with AWS services (S3, Lambda, RDS, EC2), Redis, and Linux-based deployment workflows.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Squareboat Solutions Pvt Ltd",
    duration: "Mar 2024 - Oct 2024",
    location: "Gurgaon, India",
    highlights: [
      "Developed responsive product interfaces using React, Next.js, and Tailwind CSS.",
      "Implemented Redis-backed async queues for email delivery and reduced API response latency.",
      "Contributed to backend feature delivery using NestJS and relational database design.",
      "Fixed production bugs across multiple client projects and improved platform stability.",
    ],
  },
];

const ExperienceCard = ({ item, index }) => {
  return (
    <motion.article
      className="panel relative overflow-hidden p-7 sm:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent-soft/20 blur-2xl" />

      <div className="relative z-10 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-display text-2xl font-semibold text-ink">{item.role}</p>
          <p className="mt-1 text-base font-semibold text-accent">{item.company}</p>
        </div>

        <div className="rounded-xl border border-line bg-white px-3 py-2 text-right text-xs font-semibold uppercase tracking-[0.1em] text-slate">
          <p>{item.duration}</p>
          <p className="mt-1 text-[10px] tracking-[0.12em] text-slate/80">{item.location}</p>
        </div>
      </div>

      <ul className="relative z-10 mt-5 space-y-3">
        {item.highlights.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate md:text-base">
            <span className="soft-dot mt-2 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-kicker">Experience</span>
        <h2 className="section-title mt-5">Professional work that shipped to production</h2>
        <p className="section-copy mt-5">
          Hands-on delivery across backend architecture, queue systems, database optimization,
          and full-stack product features in fast-paced client environments.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6">
        {EXPERIENCES.map((item, index) => (
          <ExperienceCard key={`${item.role}-${item.duration}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;