import React, { useEffect, useRef } from "react";

const MorphingTextParticles = () => {
  const canvasRef = useRef(null);

  const particles = useRef([]);
  const animationFrameId = useRef(null);

  const text = "HELLO";
  const particleCount = 800;
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Offscreen canvas to draw text and sample pixels
    const offscreen = document.createElement("canvas");
    offscreen.width = canvasWidth;
    offscreen.height = canvasHeight;
    const offCtx = offscreen.getContext("2d");

    // Draw text on offscreen canvas
    offCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    offCtx.fillStyle = "white";
    offCtx.font = "bold 180px Arial";
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillText(text, canvasWidth / 2, canvasHeight / 2);

    // Sample pixels where alpha > threshold to get target points
    const imageData = offCtx.getImageData(0, 0, canvasWidth, canvasHeight);
    const data = imageData.data;

    const points = [];
    for (let y = 0; y < canvasHeight; y += 6) { // spacing between points
      for (let x = 0; x < canvasWidth; x += 6) {
        const index = (y * canvasWidth + x) * 4;
        const alpha = data[index + 3];
        if (alpha > 128) {
          points.push({ x, y });
        }
      }
    }

    // Create particles with random initial position and target
    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
      const target = points[i % points.length];
      particles.current.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        tx: target.x,
        ty: target.y,
        vx: 0,
        vy: 0,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = "#fdba74"; // orange-300

      particles.current.forEach((p) => {
        // Move particle towards target with easing
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        p.vx += dx * 0.1;
        p.vy += dy * 0.1;
        p.vx *= 0.8;
        p.vy *= 0.8;
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  });

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", background: "#000", width: "100vw", height: "100vh" }}
    />
  );
};

export default MorphingTextParticles;
