import React, { useState, useEffect } from "react";
import {
  BsFillPersonFill,
  BsCodeSlash,
  BsFileTextFill,
  BsFillEnvelopeFill,
  BsList,
  BsX,
} from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // set isOpen depending on the screen size
  useEffect(() => {
    setIsOpen(window.innerWidth >= 768);
  }, []);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between flex-wrap px-[4vw] py-[2vh] md:px-16 md:py-10 relative">
      <div className="flex items-center flex-shrink-0 mr-6">
        <svg
          height="50"
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                className="stroke-primary fill-none"
                id="Shape"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
              ></polygon>
              <path d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"></path>
            </g>
            <g transform="translate(11.000000, 5.000000)">
              <path
                className="fill-primary"
                d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>

      <div className="block md:hidden z-50">
        <button onClick={toggleMenu} className="text-5xl">
          {isOpen ? <BsX /> : <BsList />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-secondBackground flex flex-col items-center justify-center space-y-6 md:relative md:flex md:flex-row md:space-x-4 md:space-y-0 md:inset-auto md:bg-transparent transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center text-2xl">
          <BsFillPersonFill className="fill-primary" />
          <Link
            to="About"
            smooth={true}
            duration={500}
            className="hover:no-underline hover:text-primary p-2 transition-colors hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
        <div className="flex items-center text-2xl">
          <BsCodeSlash className="fill-primary" />
          <Link
            to="Projects"
            smooth={true}
            duration={750}
            className="hover:no-underline hover:text-primary p-2 transition-colors hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </div>
        <div className="flex items-center text-2xl">
          <BsFileTextFill className="fill-primary" />
          <Link
            to="Experience"
            smooth={true}
            duration={1000}
            className="hover:no-underline hover:text-primary p-2 transition-colors hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
        </div>
        <div className="flex items-center text-2xl">
          <BsFillEnvelopeFill className="fill-primary" />
          <Link
            to="Contact"
            smooth={true}
            duration={1250}
            className="hover:no-underline hover:text-primary p-2 transition-colors hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
