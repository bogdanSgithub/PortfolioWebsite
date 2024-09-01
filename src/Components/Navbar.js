import {
  BsFillHouseFill,
  BsCodeSlash,
  BsFileTextFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 text-white mr-6 w-full flex-grow lg:flex lg:items-center lg:w-auto">
        <svg
          class="fill-primary h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
      </div>
      <div className="flex flex-row">
        <BsFillHouseFill className="fill-primary" />
        <a href="#About">About</a>
      </div>
      <div className="flex flex-row">
        <BsCodeSlash className="fill-primary" />
        <a href="#Projects">Projects</a>
      </div>
      <div className="flex flex-row">
        <BsFileTextFill className="fill-primary" />
        <a href="#Experience">Experience</a>
      </div>
      <div className="flex flex-row">
        <BsFillTelephoneFill className="fill-primary" />
        <a href="#Contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
