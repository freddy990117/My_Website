import React from "react";

const Homepage = () => {
  // 建立了 branch develop 來開發
  return (
    <div id="Home" className="Home">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#aboutMe">About me</a>
            </li>
            <li>
              <a href="#Skill">Skill</a>
            </li>
            <li>
              <a href="#Project">Project</a>
            </li>
            <li>
              <a href="#Footer">Context</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="Picture" className="Picture">
        Picture
      </section>
      <section id="aboutMe" className="aboutMe">
        About-me
      </section>
      <section id="Skill" className="Skill">
        Skill
      </section>
      <section id="Project" className="Project">
        Project
      </section>
      <footer id="Footer">Footer</footer>
    </div>
  );
};

export default Homepage;
