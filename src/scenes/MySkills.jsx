import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import SkillsLogo from "../components/SkillsLogo";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery('min-width: 1060px');

    return (
        <section id='skills' className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:gap-16 mt-32 md:justify-between">
                <motion.div
                    className="md:w-1/3 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, }}
                    transiton={{ delay: 0.2, duration: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <p className="font-playfair font-semibold text-7xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">Passionate about leveraging my diverse skill set to create innovative solutions and deliver exceptional results.</p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                            {/* <img src={skills} alt="skills" className="z-10" /> */}
                            <SkillsLogo/>
                        </div>)
                        :
                        (
                            <SkillsLogo/>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default MySkills;
