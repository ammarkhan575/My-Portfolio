import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY > 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app relative overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-accent-soft/25 blur-3xl" />
        <div className="absolute right-[-8%] top-[18%] h-80 w-80 rounded-full bg-sun/20 blur-3xl" />
        <div className="absolute bottom-[-12%] left-[30%] h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <Navbar
        selectedPage={selectedPage}
        isTopOfPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
        isAboveMediumScreens={isAboveMediumScreens}
      />

      <main className="pb-16 pt-24 md:pt-28">
        <div className="section-shell relative">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>

        <div className="section-shell">
          <MySkills />
        </div>

        <div className="section-shell">
          <Projects />
        </div>

        <div className="section-shell">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
