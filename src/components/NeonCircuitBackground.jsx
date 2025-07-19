import React from "react";
import Particles from "react-tsparticles";

const NeonCircuitBackground = () => {
  return (
    <Particles
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          color: { value: ["#0ff", "#9f7cff"] }, // neon cyan & purple
          links: {
            enable: true,
            distance: 130,
            color: "#0ff",
            opacity: 0.5,
            width: 1,
            blink: true,
            shadow: { enable: true, color: "#0ff", blur: 4 },
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: "bounce",
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
          opacity: {
            value: 0.7,
            anim: { enable: true, speed: 2, opacity_min: 0.2, sync: false },
          },
          shape: { type: "circle" },
          size: {
            value: 3,
            random: { enable: true, minimumValue: 1 },
            anim: { enable: true, speed: 4, size_min: 1, sync: false },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default NeonCircuitBackground;
