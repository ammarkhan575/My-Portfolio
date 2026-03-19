import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const NAV_ITEMS = ["Home", "Skills", "Projects", "Contact"];

const Link = ({ page, selectedPage, setSelectedPage, onClick }) => {
    const lowerCasePage = page.toLowerCase();
    const isActive = selectedPage === lowerCasePage;

    return (
        <AnchorLink
            className={`group relative px-1 py-1 text-sm font-semibold tracking-wide transition duration-300 ${
                isActive ? "text-accent" : "text-slate hover:text-ink"
            }`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage);
                onClick?.();
            }}
        >
            {page}
            <span
                className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
            />
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        if (isAboveSmallScreens) {
            setIsMenuToggled(false);
        }
    }, [isAboveSmallScreens]);

    const navStyle = isTopOfPage
        ? "bg-transparent"
        : "border-b border-line/90 bg-white/85 shadow-soft backdrop-blur-lg";

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${navStyle}`}>
            <div className="section-shell flex items-center justify-between py-4">
                <AnchorLink
                    href="#home"
                    onClick={() => setSelectedPage("home")}
                    className="font-display text-2xl font-bold tracking-tight text-ink"
                >
                    Mohd<span className="text-accent">Ammar</span>
                </AnchorLink>

                {isAboveSmallScreens ? (
                    <div className="flex items-center gap-8 rounded-full border border-line/80 bg-white/70 px-6 py-2 backdrop-blur-md">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item}
                                page={item}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        ))}

                        <AnchorLink
                            href="#contact"
                            onClick={() => setSelectedPage("contact")}
                            className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-accent"
                        >
                            Hire Me
                        </AnchorLink>
                    </div>
                ) : (
                    <button
                        type="button"
                        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-line bg-white/80"
                        onClick={() => setIsMenuToggled((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="h-0.5 w-5 rounded-full bg-ink" />
                        <span className="h-0.5 w-5 rounded-full bg-ink" />
                        <span className="h-0.5 w-5 rounded-full bg-ink" />
                    </button>
                )}
            </div>

            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed inset-0 z-50 bg-ink/25 backdrop-blur-sm" onClick={() => setIsMenuToggled(false)}>
                    <div
                        className="absolute right-0 top-0 h-full w-[78%] max-w-[320px] border-l border-line bg-white p-7"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-10 flex items-center justify-between">
                            <p className="font-display text-2xl font-semibold text-ink">Menu</p>
                            <button
                                type="button"
                                onClick={() => setIsMenuToggled(false)}
                                className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-slate"
                            >
                                Close
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item}
                                    page={item}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                    onClick={() => setIsMenuToggled(false)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;