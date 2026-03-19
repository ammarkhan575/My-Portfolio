import AnchorLink from "react-anchor-link-smooth-scroll";

const DOTS = ["home", "skills", "projects", "contact"];

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles =
    "scale-125 border-accent bg-accent shadow-[0_0_0_6px_rgba(15,118,110,0.15)]";

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-line/90 bg-white/70 px-3 py-4 shadow-soft backdrop-blur-md md:flex md:flex-col md:gap-4">
      {DOTS.map((dot) => (
        <AnchorLink
          key={dot}
          className={`h-3 w-3 rounded-full border transition duration-300 ${
            selectedPage === dot
              ? selectedStyles
              : "border-slate/30 bg-slate/30 hover:border-accent-soft hover:bg-accent-soft"
          }`}
          href={`#${dot}`}
          onClick={() => setSelectedPage(dot)}
          aria-label={`Jump to ${dot} section`}
          title={dot.charAt(0).toUpperCase() + dot.slice(1)}
        />
      ))}
    </div>
  );
};

export default DotGroup;