import { useEffect, useRef } from "react";
import Matrix from "react-matrix-effect";

const MatrixBackground = () => {
  const matrixRef = useRef(null);

  useEffect(() => {
    // Only try to render once DOM is available
    if (matrixRef.current) {
      // Safe render
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0" ref={matrixRef}>
      <Matrix
        backgroundColor="transparent"
        characters="01"
        color="#0ff"
        fontSize={14}
      />
    </div>
  );
};

export default MatrixBackground;
