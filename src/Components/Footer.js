import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full mx-auto flex flex-col md:flex-row justify-between items-center p-12">
      <div className="flex items-center space-x-1 mb-2 md:mb-0">
        <span>Developed with</span>
        <span className="text-red-500">❤️</span>
        <span>by Bogdan Feher</span>
      </div>
      <div className="flex space-x-4 text-4xl">
        <a
          href="https://github.com/bogdanSgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bogdan-feher-b7567b203/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
