import React, { useCallback } from "react";

import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "none",
            },
            onhover: {
              enable: false,
              mode: "none",
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: ["#0f766e", "#f59e0b"],
          },
          links: {
            enable: false,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.45,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 28,
          },
          opacity: {
            value: { min: 0.08, max: 0.22 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;