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
        <section className="introduce">
          <h1>嗨,我是 Freddy</h1>
          <h2>我是一位擁有硬體維修背景、目前積極轉職為前端工程師的開發者。</h2>
        </section>
        <section className="myPicture"></section>
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
