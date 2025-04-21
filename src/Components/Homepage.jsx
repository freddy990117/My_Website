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
          <div className="project">
            <img src="./public/Taiwan_Weather_Intro.png" alt="Taiwan Weather" />
            <div className="useSkill">
              <h1>Taiwan Weather</h1>
              <p>React & SCSS</p>
            </div>
          </div>
          <div className="introduce">
            <h1>Taiwan Weather</h1>
            <p>
              這是一個針對台灣地區設計的天氣查詢網站，使用政府開放資料 API
              顯示各縣市的天氣預報、氣溫、降雨機率與紫外線指數等資訊。使用者可以選擇不同地區，查看接下來幾天的天氣變化，還能透過圖表清楚掌握趨勢。
              <br />
              <br />
              專案主要使用 React 搭配 Chart.js 製作天氣折線圖與紫外線柱狀圖。
              此專案的 API
              回傳資料結構複雜，因此特別花時間撰寫資料清洗與格式轉換邏輯，讓資料能正確地對應到各區域與時間。
            </p>
          </div>
        </div>
        <div className="Component">
          <div className="project">
            <img src="./public/Weather_App.png" alt="Weather App" />
            <div className="useSkill">
              <h1>Weather App</h1>
              <p>JavaScript & SCSS</p>
            </div>
          </div>
          <div className="introduce">
            <h1>Weather App</h1>
            <p>
              這是一個可以查詢全球城市天氣的網頁小工具，使用者輸入城市名稱後，系統會顯示當地的天氣狀況、溫度、濕度與風速等基本資訊，資料來自
              OpenWeather API。
              <br />
              <br />
              與其他專案不同的是，這個天氣查詢網站是我用原生 Vanilla JavaScript
              開發的，搭配 Fetch API 串接天氣資料，SCSS 負責畫面樣式與版面配置。
              <br />
              這讓我能夠回歸最基本的前端開發流程，練習 DOM
              操作、事件監聽、錯誤處理與模組化程式設計。
            </p>
          </div>
        </div>
        <div className="Component">
          <div className="project">
            <img src="./public/Pexel_Picture_Intro.png" alt="Pexel Picture" />
            <div className="useSkill">
              <h1>Pexel Picture Search</h1>
              <p>JavaScript & SCSS</p>
            </div>
          </div>
          <div className="introduce">
            <h1>Pexel Picture Search</h1>
            <p>
              這是一個即時搜尋圖片的網頁應用，讓使用者可以透過關鍵字搜尋 Pexels
              提供的高品質圖片，
              <br />
              <br />
              這個專案使用了 React 建構前端畫面，搭配 Axios 處理非同步 API
              請求，並透過 React Router
              進行頁面路由切換。整體設計強調簡潔、直覺的搜尋體驗，並處理了圖片載入時的
              loading 狀態，讓使用者在等待資料時也能有良好的操作感受。
            </p>
          </div>
        </div>
        <div className="Component">
          <div className="project">
            <img
              src="Personal_Page_Intro.jpg"
              alt="Personal Portfolio Website"
            />
            <div className="useSkill">
              <h1>Personal Portfolio Website</h1>
              <p>React & SCSS</p>
            </div>
          </div>
          <div className="introduce">
            <h1>Personal Portfolio Website</h1>
            <p>
              這是我設計並開發的個人作品網站，用來介紹自己的背景、技能與開發專案，目的是讓訪客快速了解我的專業能力與開發風格。網站內容包含首頁動畫、自我介紹、技能圖示區塊、專案介紹以及聯絡表單。
              <br />
              <br />
              在開發上，我採用 React 與 SCSS 打造整體版面與互動效果，並透過 RWD
              響應式設計讓網站能在電腦與手機上都能流暢瀏覽。
            </p>
          </div>
        </div>
      </section>
      <footer id="Footer" className="context">
        <h2>Create by Freedy &copy; in 2025</h2>
        <div className="context-logo">
          <a href="https://github.com/freddy990117?tab=repositories">
            <img className="logo" src="./public/github.svg" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/lee-jay-chang-24735a266/">
            <img
              className="logo-linkedin"
              src="./public/Linkedin.svg"
              alt="linkedin"
            />
          </a>
          <a href="mailto:freddy990117@gmail.com?subject=你好，我想合作&body=請在此留下你的訊息">
            <img className="logo" src="./public/gmail.svg" alt="gmail" />
          </a>
          <a href="https://www.instagram.com/___leejay___/">
            <img
              className="logo"
              src="./public/instagram.svg"
              alt="instagram"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
