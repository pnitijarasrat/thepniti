import { useEffect } from "react";

export default function Cursor() {
  const cursor = document.querySelector(".cursor");

  const moveCursor = (e: MouseEvent) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    if (cursor !== null) {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="bg-red w-[10px] h-[10px] cursor" />;
}
