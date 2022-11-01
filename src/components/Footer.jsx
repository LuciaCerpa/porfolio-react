import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMessage,   
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/102775738?s=400&u=79d1833d28afee0966f075c118a186d95e32462b&v=4"}
          alt="Founder"
        />

        <h2>Lucia Cerpa</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>      
          <a href="https://wa.link/e13y3s" target={"blank"}>
            <AiFillMessage/>
          </a>    
          <a href="https://www.linkedin.com/in/luciacerpap" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/LuciaCerpa" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
