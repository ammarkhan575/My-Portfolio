import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/profile.png";
import ParticlesContainer from "../components/ParticlesContainer";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id="home" className="relative overflow-hidden py-8 md:py-16">
            <ParticlesContainer />

            <div className="relative z-10 grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    variants={{
                        hidden: { opacity: 0, y: 25 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="panel p-7 sm:p-9 md:p-10"
                >
                    <span className="section-kicker">Software Engineer</span>

                    <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                        Building dependable
                        <span className="block text-accent">full-stack products</span>
                    </h1>

                    <p className="section-copy mt-6">
                        I am Mohd Ammar, a full-stack engineer focused on building reliable
                        products across domains and technologies. I ship production-grade
                        features with strong system design, performance, and developer
                        experience in mind.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <AnchorLink
                            className="rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-accent"
                            onClick={() => {
                                setSelectedPage("contact");
                            }}
                            href="#contact"
                        >
                            Start a Project
                        </AnchorLink>

                        <AnchorLink
                            className="rounded-full border border-line bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate transition duration-300 hover:border-accent hover:text-accent"
                            onClick={() => {
                                setSelectedPage("projects");
                            }}
                            href="#projects"
                        >
                            View Projects
                        </AnchorLink>
                    </div>

                    <div className="mt-8 border-t border-line pt-2">
                        <SocialMediaIcons />
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="relative"
                >
                    <div className="relative mx-auto w-full max-w-[430px] animate-floatSlow">
                        <div className="absolute -inset-4 rounded-[2rem] bg-accent-stripe blur-xl" />

                        <div className="panel relative overflow-hidden rounded-[2rem] border border-white/75 p-4 sm:p-5">
                            <img
                                src={profile}
                                alt="Mohd Ammar"
                                className="h-[430px] w-full rounded-[1.6rem] object-cover object-top sm:h-[500px]"
                            />
                        </div>

                        {isAboveMediumScreens && (
                            <div className="absolute -left-9 bottom-8 rounded-2xl border border-line bg-white px-4 py-3 shadow-soft">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                                    Experience
                                </p>
                                <p className="mt-1 font-display text-lg font-bold text-ink">3+ Years</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;