import { BsFillHouseFill } from "react-icons/bs";

function About() {
  return (
    <div>
      <div className="flex flex-row place-items-center m-3 text-[clamp(20px,6vw,50px)]">
        <BsFillHouseFill className="fill-primary" />
        <h1 className="p-2 ">About</h1>
      </div>
      <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
      <p>image will be here</p>
    </div>
  );
}

export default About;
