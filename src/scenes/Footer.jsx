import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="border-t border-line/80 bg-white/70 py-10 backdrop-blur-md">
            <div className="section-shell flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
                <div>
                    <p className="font-display text-2xl font-bold text-ink">Mohd Ammar</p>
                    <p className="mt-1 text-sm text-muted">
                        Full-stack engineer crafting clean and scalable digital products.
                    </p>
                </div>

                <SocialMediaIcons />

                <p className="text-sm font-semibold text-slate">
                    © {new Date().getFullYear()} Mohd Ammar. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;