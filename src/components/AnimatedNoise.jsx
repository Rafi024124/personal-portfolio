import { useEffect, useRef } from "react";

const AnimatedNoise = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const drawNoise = () => {
      const imageData = ctx.createImageData(width, height);
      const buffer32 = new Uint32Array(imageData.data.buffer);
      for (let i = 0; i < buffer32.length; i++) {
        // Random grayscale with some opacity (alpha)
        const value = (Math.random() * 255) | 0;
        buffer32[i] =
          (value << 24) | // alpha channel (inverted for little-endian, so value first)
          (value << 16) | // red
          (value << 8) |  // green
          value;          // blue
      }
      ctx.putImageData(imageData, 0, 0);
      animationFrameId.current = requestAnimationFrame(drawNoise);
    };

    drawNoise();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        opacity: 0.05,
        zIndex: 9999,
        mixBlendMode: "overlay",
      }}
    />
  );
};

export default AnimatedNoise;
