import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SkillsLogo from "../components/SkillsLogo";

const STACK = [
    "React",
    "NestJS",
    "TypeScript",
    "Go",
    "AWS",
    "Redis",
    "PostgreSQL",
    "System Design",
];

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="py-16 md:py-24">
            <div className="grid gap-7 md:grid-cols-[1fr_1fr] md:items-center md:gap-10">
                <motion.div
                    className="panel p-7 sm:p-8 md:p-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -35 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <span className="section-kicker">Skills</span>

                    <h2 className="section-title mt-5">
                        Strong engineering across
                        <span className="block text-accent">frontend, backend, and cloud</span>
                    </h2>

                    <p className="section-copy mt-6">
                        I focus on practical architecture, clean APIs, and product velocity. My
                        stack is centered around modern TypeScript services, scalable data models,
                        and robust frontend experiences.
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {STACK.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-xl border border-line bg-white px-3 py-2 text-sm font-semibold text-slate"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="panel p-6 sm:p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    variants={{
                        hidden: { opacity: 0, x: 35 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div
                        className={`mx-auto w-fit rounded-[2rem] border border-line bg-white px-3 py-4 sm:px-6 sm:py-7 ${
                            isAboveMediumScreens ? "shadow-soft" : ""
                        }`}
                    >
                        <SkillsLogo />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MySkills;
