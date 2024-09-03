function Button({ link, text }) {
  return (
    <a
      href={link}
      className="bg-transparent hover:bg-primary text-primary hover:no-underline py-5 px-10 border border-primary hover:border-transparent rounded max-w-max hover:text-background"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default Button;
