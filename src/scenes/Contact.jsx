import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contact from "../assets/contact-image.jpeg";

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (event) => {
        const isValid = await trigger();
        if (!isValid) {
            event.preventDefault();
    }
    };

    return (
        <section id="contact" className="py-16 md:py-24">
            <motion.div
                className="mx-auto max-w-3xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -24 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <span className="section-kicker">Contact</span>
                <h2 className="section-title mt-5">Let us build something meaningful</h2>
                <p className="section-copy mt-5">
                    Share your goals, timeline, and product idea. I will get back with a clear
                    approach and next steps.
                </p>
            </motion.div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-stretch">
                <motion.div
                    className="panel overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    variants={{
                        hidden: { opacity: 0, y: 22 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img
                        src={contact}
                        alt="Contact"
                        className="h-full min-h-[330px] w-full object-cover"
                    />
                </motion.div>

                <motion.div
                    className="panel p-6 sm:p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/ammarkhan575@gmail.com"
                        method="POST"
                        className="space-y-4"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input
                            type="hidden"
                            name="_subject"
                            value="New portfolio contact request"
                        />

                        <div>
                            <input
                                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink outline-none transition duration-300 placeholder:text-muted focus:border-accent"
                                type="text"
                                placeholder="Your name"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.name.type === "required" && "Name is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 characters."}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink outline-none transition duration-300 placeholder:text-muted focus:border-accent"
                                type="text"
                                placeholder="Email address"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.email.type === "required" && "Email is required."}
                                    {errors.email.type === "pattern" && "Please enter a valid email address."}
                                </p>
                            )}
                        </div>

                        <div>
                            <textarea
                                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink outline-none transition duration-300 placeholder:text-muted focus:border-accent"
                                name="message"
                                placeholder="Tell me about your project"
                                rows="6"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.message.type === "required" && "Message is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max length is 2000 characters."}
                                </p>
                            )}
                        </div>

                        <button
                            className="w-full rounded-xl bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-accent"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;