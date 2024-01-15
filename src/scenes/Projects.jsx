import {motion} from 'framer-motion';
import LineGradient from "../components/LineGradient";
import project1 from '../assets/project-1.jpeg'; 
import project2 from '../assets/project-2.jpeg'; 
import project3 from '../assets/project-3.jpeg'; 
import project4 from '../assets/project-4.jpeg'; 
import project5 from '../assets/project-5.jpeg'; 
import project6 from '../assets/project-6.jpeg'; 
import project7 from '../assets/project-7.jpeg'; 
import project8 from '../assets/project-8.png';

const container = {
    hidden:{},
    visible:{
        transition:{
            staggerChildren: 0.2
        }
    }
}

const projectVariant = {
    hidden:{
        opacity:0,
        scale: 0.8
    },
    visible:{
        opacity:1,
        scale:1
    }
}

const Project = ({title,subtitle,image}) =>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-70 transition duration-500 hover:bg-white z-30 flex flex-col justify-center items-center text-center text-deep-blue font-bold`;
    const projectTitle = title.split(" ").join("").toLowerCase();
    return(
        <motion.div
            variants={projectVariant}
            className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{projectTitle}</p>
                <p className="mt-7">{subtitle}</p>
            </div>
            <img src={image} alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, }}
                transiton={{ delay: 0.2, duration: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}>
                <div>
                    <p className="font-playfair font-semibold text-7xl mb-5">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <LineGradient width="" />
                <p className="mt-10 mb-7">These are my projects which i built during my learning phase and i want to add further real life projects which can help people in certain ways.</p>
            </motion.div>
            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, }}
                    transiton={{ delay: 0.2, duration: 0.2 }}
                    variants={container}>
                    {/* ROW 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] mx-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Project 1" subtitle="this is my project " image={project1}/>
                    <Project title="Project 2" subtitle="this is my project " image={project2}/>
                    {/* ROW 2 */}
                    <Project title="Project 3" subtitle="this is my project " image={project3}/>
                    <Project title="Project 4" subtitle="this is my project " image={project4}/>
                    <Project title="Project 5" subtitle="this is my project " image={project5}/>
                    {/* ROW 3 */}
                    <Project title="Project 6" subtitle="this is my project " image={project6}/>
                    <Project title="Project 7" subtitle="this is my project " image={project7}/>
                    <Project title="Project 8" subtitle="this is my project " image={project8}/>

                </motion.div>
            </div>
        </section>
    )
}

export default Projects;