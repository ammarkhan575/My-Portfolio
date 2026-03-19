import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ammarkhan575",
        icon: FaLinkedinIn,
    },
    {
        name: "GitHub",
        href: "https://github.com/ammarkhan575",
        icon: FaGithub,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/ammarkhan575",
        icon: FaFacebookF,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/mohdammar5757",
        icon: FaInstagram,
    },
    {
        name: "Twitter",
        href: "https://www.x.com/mohdammar575",
        icon: FaTwitter,
    },
];

const SocialMediaIcons = () => {
    return (
        <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-slate transition duration-300 hover:border-accent hover:bg-accent hover:text-white"
                    title={name}
                    aria-label={name}
                >
                    <Icon size={16} />
                </a>
            ))}
        </div>
    );
};

export default SocialMediaIcons;