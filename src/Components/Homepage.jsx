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
          <p>
            我擅長使用 React
            打造互動式網站，重視畫面細節與程式架構，喜歡將技術轉化為實際解決方案。
          </p>
        </section>
        <section className="myPicture"></section>
      </section>
      <section id="aboutMe" className="aboutMe">
        <p>
          我是一位從硬體維修背景轉職的前端工程師，過去的工作經歷讓我對問題排解與邏輯思維特別擅長，也養成了面對挑戰不輕言放棄的個性。
          在轉職過程中，我學會了 React、JavaScript、SCSS
          等前端技術，並完成了多個實戰作品，像是天氣查詢網站、圖片搜尋工具與個人形象頁等，這些作品都包含了
          API 串接、RWD 設計與 Git Flow 流程管理等要素。
          我熱愛開發過程中「將想法具象化」的感覺，尤其是能寫出好看又好用的畫面。希望未來能加入一個重視技術成長的團隊，持續累積實力，為產品與使用者創造真正的價值。
        </p>
      </section>
      <section id="Skill" className="Skill">
        <h2>Front-End</h2>
        <div className="images">
          <img src="./public/react.svg" alt="React" title="React" />
          <img src="./public/javascript.svg" alt="javascript" />
          <img src="./public/sass.svg" alt="sass" />
          <img src="./public/html5.svg" alt="html5" />
          <img src="./public/css.svg" alt="css" />
          <img src="./public/git.svg" alt="git" />
          <img src="./public/github.svg" alt="github" />
        </div>
      </section>
      <section id="Project" className="Project">
        <div className="Component">
          <div className="project">project-1</div>
          <p>introduce</p>
        </div>
        <div className="Component">
          <div className="project">project-2</div>
          <p>introduce</p>
        </div>
        <div className="Component">
          <div className="project">project-3</div>
          <p>introduce</p>
        </div>
        <div className="Component">
          <div className="project">project-4</div>
          <p>introduce</p>
        </div>
      </section>
      <footer id="Footer">Footer</footer>
    </div>
  );
};

export default Homepage;
