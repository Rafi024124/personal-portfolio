import React, { useEffect, useState } from "react";

const GlitchTyping = () => {
  const finalText = "Welcome to my world!";
  const [displayedText, setDisplayedText] = useState("");
  const [scrambled, setScrambled] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const chars = "█▓▒░<>/\\|_-=+*&@#%$!?abcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    if (currentIndex < finalText.length) {
      let scrambleInterval = setInterval(() => {
        const randomText = finalText
          .split("")
          .map((char, i) => {
            if (i < currentIndex) return finalText[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setScrambled(randomText);
      }, 30);

      const settleTimeout = setTimeout(() => {
        clearInterval(scrambleInterval);
        setDisplayedText((prev) => prev + finalText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        setScrambled(""); // Clear the scrambled output
      }, 200);

      return () => {
        clearInterval(scrambleInterval);
        clearTimeout(settleTimeout);
      };
    } else {
      setScrambled(""); // Final cleanup when done
    }
  }, [currentIndex]);

  return (
    <h1
      className="glitch-typed px-4 max-w-full text-center text-2xl
        text-[clamp(1.5rem, 5vw, 2.5rem)] leading-tight
        break-words
        "
      style={{
        // Prevent horizontal overflow by wrapping text and scaling font
        overflowWrap: "break-word",
        wordBreak: "break-word",
      }}
    >
      {scrambled || displayedText}
    </h1>
  );
};

export default GlitchTyping;
