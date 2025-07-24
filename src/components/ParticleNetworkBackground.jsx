import React, { useEffect, useRef, useState } from "react";

const CountdownWithGlowingParticles = () => {
  const canvasRef = useRef(null);
  const [countdown, setCountdown] = useState(3);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowParticles(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (!showParticles) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform before scaling
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    const particles = [];
    const particleCount = 120;

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = 2 + Math.random() * 2;
        this.color = "#fed7aa"; // orange-200
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(254, 215, 170, 0.9)`; // orange-200 with opacity
        ctx.shadowColor = `rgba(254, 215, 170, 0.9)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        // Increase opacity and thickness here:
        ctx.strokeStyle = `rgba(254, 215, 170, ${(1 - distance / 120) * 0.6})`; // more opaque
        ctx.lineWidth = 1.2; // thicker line
        ctx.stroke();
      }
    }
  }
};

    const animate = () => {
      ctx.fillStyle = "#000"; // solid black background
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connectParticles();

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showParticles]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 w-full h-full z-10 transition-opacity duration-700 ${
          showParticles ? "opacity-100" : "opacity-0"
        }`}
      />
      {countdown > 0 && (
        <div
          className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black text-[#fed7aa] font-extrabold tracking-widest"
          style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }} // responsive font size
        >
          {countdown}
        </div>
      )}
    </>
  );
};

export default CountdownWithGlowingParticles;
