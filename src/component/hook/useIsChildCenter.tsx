import { useState, useEffect, RefObject } from "react";

function useIsChildInCenter(
  parentRef: RefObject<HTMLElement>,
  childSelector: string,
): boolean {
  const [isInCenter, setIsInCenter] = useState(false);

  useEffect(() => {
    const parentElement = parentRef.current;
    if (!parentElement) return;

    const childElement = parentElement.querySelector(
      childSelector,
    ) as HTMLElement;
    if (!childElement) return;

    const checkIfInCenter = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenterY = viewportHeight / 2;
      const elementCenterY =
        childElement.getBoundingClientRect().top +
        childElement.getBoundingClientRect().height / 2;

      const tolerance = childElement.getBoundingClientRect().height / 2; // Adjust tolerance as needed

      const isInVerticalRange =
        Math.abs(viewportCenterY - elementCenterY) <= tolerance;
      setIsInCenter(isInVerticalRange);
    };

    const observer = new IntersectionObserver(
      () => {
        checkIfInCenter();
      },
      {
        threshold: [0.5], // Adjust threshold as needed
      },
    );

    observer.observe(childElement);

    window.addEventListener("scroll", checkIfInCenter);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkIfInCenter);
    };
  }, [parentRef, childSelector]);

  return isInCenter;
}

export default useIsChildInCenter;
