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
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
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
