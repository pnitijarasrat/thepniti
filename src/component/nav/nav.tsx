import useScreenSize from "../hook/useScreenSize";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function NavBar() {
  const { width } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-full py-8 backdrop-blur-3xl">
      <nav className="text-zinc-400 page-container flex flex-row justify-end sm:justify-start mx-auto">
        {width > 748 ? (
          <ul className="flex flex-row gap-8">
            <li>home</li>
            <li>about</li>
            <li>skills</li>
            <li>works</li>
            <li>contact</li>
          </ul>
        ) : (
          <>
            {!isOpen ? (
              <RxHamburgerMenu
                size={25}
                className="text-zinc-400"
                onClick={handleToggleNav}
              />
            ) : (
              <ul className="flex flex-col gap-8">
                <li>home</li>
                <li>about</li>
                <li>skills</li>
                <li>works</li>
                <li>contact</li>
                <li onClick={handleToggleNav}>close</li>
              </ul>
            )}
          </>
        )}
      </nav>
    </div>
  );
}
