import { useState, useEffect, useRef } from "react";

function useIsInCenter(ref) {
  const [isInCenter, setIsInCenter] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const viewportHeight = window.innerHeight;
        const viewportCenterY = viewportHeight / 2;
        const elementCenterY =
          entry.boundingClientRect.top + entry.boundingClientRect.height / 2;

        const tolerance = 10; // Adjust tolerance as needed

        const isInVerticalRange =
          Math.abs(viewportCenterY - elementCenterY) <= tolerance;
        setIsInCenter(isInVerticalRange);
      },
      {
        threshold: [0.5], // Adjust threshold as needed
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInCenter;
}

export default useIsInCenter;
