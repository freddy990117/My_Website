import Rect, { useState, useEffect, useLayoutEffect, useRef } from "react";

// 建立了 branch develop 來開發
const Homepage = () => {
  // Hamburger 使用的 State
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650); // 預先設定 Mobile 的寬度是 650 px
  const [menuOpen, setMenuOpen] = useState(false); // 設定 Menu 是否開啟 （預設為開啟）

  const scrollToSectionById = (id) => {
    let element = document.getElementById(id);

    // 特別處理 Project 的情況
    if (id === "Project") {
      element = document.getElementById("FirstProject");
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // 點選表單後，將狀態更改為 false
  const handleOpen = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    // 新增監聽事件，用於監聽「視窗大小」
    window.addEventListener("resize", handleResize);

    return () => {
      // 移除監聽事件，提升效能
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // 滾出畫面也可以收回
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="Home" className="Home">
      {/* 手機大小 */}
      {isMobile ? (
        <>
          {menuOpen && (
            <div className="overlay" onClick={() => setMenuOpen(false)} />
          )}

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
            <nav className={`mobile-menu ${menuOpen ? "show" : ""}`}>
              <a
                href="#Picture"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpen();
                  scrollToSectionById("Picture");
                }}
              >
                Home
              </a>
              <a
                href="#aboutMe"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpen();
                  scrollToSectionById("aboutMe");
                }}
              >
                About Me
              </a>
              <a
                href="#Skill"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpen();
                  scrollToSectionById("Skill");
                }}
              >
                Skill
              </a>
              <a
                href="#Project"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpen();
                  scrollToSectionById("FirstProject");
                }}
              >
                Project
              </a>
              <a
                href="#Footer"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpen();
                  scrollToSectionById("Footer");
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </>
      ) : (
        // 一般大小
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSectionById("Picture");
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSectionById("aboutMe");
                  }}
                >
                  About me
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSectionById("Skill");
                  }}
                >
                  Skill
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSectionById("FirstProject");
                  }}
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSectionById("Footer");
                  }}
                >
                  Context
                </button>
              </li>
            </ul>
          </nav>
        </header>
      )}
      <section id="Picture" className="Picture">
        <section className="introduce">
          <h1 className="fade-in-text">嗨,我是 Freddy🧑‍💻</h1>
          <h2 className="fade-in-text">
            我是位擅長使用 React + Chart.js 的前端開發者
          </h2>
          <p className="fade-in-text">
            我擅長使用 React
            打造互動式網站，重視畫面細節與程式架構，我喜歡將技術轉化為實際解決方案。
            <br />
            <br />
            我具備 API 串接、CRUD、Firebase 開發、模組化元件拆分及 Git Flow
            的實作經驗。
          </p>
        </section>
        <section className="myPicture">
          <img src="./images/image.png" alt="My-self-Picture" loading="eager" />
        </section>
      </section>
      <section id="aboutMe" className="aboutMe hidden">
        <p>
          我是一位從 HelpDesk
          轉職的前端工程師，在過去工作中培養將複雜問題拆解與驗證的能力，並將解決方案轉化為文件與
          SOP
          與團隊分享，這種系統化思維延伸至前端開發，幫助我完成了多個實戰作品，像是健身儀表板表、Todo-List、天氣查詢網站與圖片搜尋網站等，這些作品都包含了
          CRUD、API 串接、RWD 設計與 Git Flow 流程管理等要素。
          <br />
          <br />
          我喜歡開發過程中「將想法具象化」的感覺，尤其是能寫出好看又好用的畫面。希望未來能加入一個重視技術成長的團隊，持續累積實力，為產品與使用者創造真正的價值。
        </p>
      </section>
      <section id="Skill" className="Skill hidden">
        <h2>Front-End</h2>
        <div className="images">
          <img src="./icons/react.svg" alt="React" title="React" />
          <img
            src="./icons/typescript.svg"
            alt="typescript"
            title="typescript"
          />
          <img src="/assets/icons/javascript.svg" alt="javascript" />
          <img src="./icons/sass.svg" alt="sass" />
          <img src="./icons/bootstrap.svg" alt="bootstrap" title="bootstrap" />
          <img src="./icons/html5.svg" alt="html5" />
          <img src="./icons/css.svg" alt="css" />
          <img src="./icons/git.svg" alt="git" />
          <img src="./icons/github.svg" alt="github" />
        </div>
      </section>
      <section id="Project" className="Project">
        {/* Input & Display */}
        <div className="Component hidden" id="FirstProject">
          <div className="project">
            <img
              // 預設顯示 640 的圖片 （因為圖片只佔了不到畫面的一半，設定 640 即可）＊如果要設定為 1280 最好要佔大部分＊
              src="./images/640/Input-display.640.webp"
              // 實際顯示的圖片像素全部交給 srcSet 瀏覽器去計算 （給瀏覽器自行去運算 DPR）
              srcSet="./images/360/Input_Display_Intro-360.webp 360w,
                      ./images/640/Input-display.640.webp 640w,
                      ./images/1280/Input_Display_Intro.webp 1280w"
              // 如果顯示畫面小於 650px 時，顯示的寬度是 80 viewports，將圖片固定在 640 px，實際顯示圖片會交給 setSrc 管理
              // 因為我想達到「手機時顯示 360」的這個效果，所以我使用 80vw
              sizes="(max-width: 650px) 80vw,640px"
              alt="Input & display"
              loading="lazy"
            />
            <div className="useSkill">
              <h1>
                <a
                  href="https://github.com/freddy990117/Input-Display"
                  target="_blank"
                >
                  Input & Display
                </a>
                <span className="tooltip-text">點我進入 Github </span>
              </h1>
              <p>TypeScript & Bootstrap</p>
            </div>
          </div>
          <div className="introduce">
            <h1>
              <a
                href="https://freddy990117.github.io/Input-Display/"
                target="_blank"
              >
                Input & Display
              </a>
              <span className="tooltip-text">點我進入線上版</span>
            </h1>
            <p>
              這是一個透過表單讓使用者輸入資料，並以 Accordion
              方式動態呈現結果的小型互動式網站。
              <br />
              <br />
              此專案主要練習 TypeScript 的類型管理、Bootstrap 元件應用、DOM
              操作與資料結構設計，讓前端 UI 與表單驗證更具結構化。
              <br />
              <br />
              輸入表單中包含姓名、Email、Phone、Job、留言與多選服務項目，送出後會即時在右側生成獨立的
              Accordion 卡片，便於閱讀多位使用者的資訊。若沒有資料則顯示「No
              customer demand」提示。
            </p>
          </div>
        </div>
        {/* Todo-List */}
        <div className="Component hidden">
          <div className="project">
            <img
              src="./images/640/Todo-List.640.webp"
              srcSet="./images/360/Todo_Intro-360.webp 360w,
                      ./images/640/Todo-List.640.webp 640w,
                      ./images/1280/Todo_Intro.webp 1280w"
              sizes="(max-width:650px) 80vw,640px"
              alt="Todo-List"
              loading="lazy"
            />
            <div className="useSkill">
              <h1>
                <a
                  href="https://github.com/freddy990117/Todo_List"
                  target="_blank"
                >
                  Todo-List
                </a>
                <span className="tooltip-text">點我進入 Github </span>
              </h1>
              <p>React & SCSS & Jest</p>
            </div>
          </div>
          <div className="introduce">
            <h1>
              <a
                href="https://github.com/freddy990117/Todo_List"
                target="_blank"
              >
                Todo-List
              </a>
            </h1>
            <p>
              這是一個專注於練習 React CRUD 操作與狀態管理的 Todo List，提升我對
              React 資料流、元件拆分、狀態更新的掌握度。
              <br />
              <br />
              除了基本新增、刪除、修改與完成標記外，也加入錯誤處理、刪除動畫與
              UI 優化，提高整體互動感。 <br />
              <br />
              專案中特別加入 Jest
              測試，針對核心功能（新增/刪除/編輯）撰寫單元與元件測試，測試覆蓋率達
              98.5%。 (未來將改用 React + TypeScript 來撰寫)
            </p>
          </div>
        </div>
        {/* Fitness Dashboard */}
        <div className="Component hidden">
          <div className="project">
            <img
              src="./images/640/Fitness-Dashboard.640.webp"
              srcSet="./images/360/Dashboard_intro-360.webp 360w,
                      ./images/640/Fitness-Dashboard.640.webp 640w,
                      ./images/1280/Dashboard_intro.webp 1280w"
              sizes="(max-width:650px) 80vw,640px"
              alt="Fitness Dashboard"
              loading="lazy"
            />
            <div className="useSkill">
              <h1>
                <a
                  href="https://github.com/freddy990117/Fitness-Dashboard"
                  target="_blank"
                >
                  Fitness Dashboard
                </a>
                <span className="tooltip-text">點我進入 Github</span>
              </h1>
              <p>React & SCSS & Firestore</p>
            </div>
          </div>
          <div className="introduce">
            <h1>
              <a href="" target="_blank">
                Fitness Dashboard
              </a>
            </h1>
            <p>
              這是一個整合「體重紀錄」、「訓練項目」以及「蛋白質攝取」的健身管理平台，協助使用者掌握每日訓練狀況並追蹤飲食營養。
              <br />
              <br />
              透過視覺化數據呈現，使用者能輕鬆了解自己的體重趨勢、訓練頻率與攝取量是否達標，提升健身效率。
              <br />
              <br />
              此專案以模組化設計為核心，拆分多個可重複使用的 UI
              元件（Sidebar、Card、Chart）。使用 Firebase
              提供會員登入、雲端資料儲存與 CRUD 處理，並利用 Chart.js
              呈現體重變化折線圖。{" "}
            </p>
          </div>
        </div>
        {/* Taiwan Weather */}
        <div className="Component hidden">
          <div className="project">
            <img
              src="./images/640/Taiwan-Weather.640.webp"
              srcSet="./images/360/Taiwan_Weather_Intro-360.webp 360w,
                      ./images/640/Taiwan-Weather.640.webp 640w,
                      ./images/1280/Taiwan_Weather_Intro-360.webp 1280w"
              sizes="(max-width:650px) 80vw,640px"
              alt="Taiwan Weather"
              loading="lazy"
            />
            <div className="useSkill">
              <h1>
                <a
                  href="https://github.com/freddy990117/Taiwan-Weather"
                  target="_blank"
                >
                  Taiwan Weather
                </a>
                <span className="tooltip-text">點我進入 Github </span>
              </h1>
              <p>React & SCSS</p>
            </div>
          </div>
          <div className="introduce">
            <h1>
              <a
                href="https://github.com/freddy990117/Taiwan-Weather"
                target="_blank"
              >
                Taiwan Weather
              </a>
            </h1>
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
        {/* Weather App */}
        <div className="Component hidden">
          <div className="project">
            <img
              src="./images/Weather-App.640.webp"
              srcSet="./images/360/Weather_App-360.webp 360w,
                      ./images/640/Weather-App.640.webp 640w,
                      ./images/1280/Weather_App.webp 1280w"
              sizes="(max-width:650px) 80vw,640px"
              alt="Weather App"
              loading="lazy"
            />
            <div className="useSkill">
              <h1>
                <a
                  href="https://github.com/freddy990117/Weather-APP"
                  target="_blank"
                >
                  Weather App
                </a>
                <span className="tooltip-text">點我進入 Github </span>
              </h1>
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
        {/* Pexel Picture Search */}
        <div className="Component hidden">
          <div className="project">
            <img
              src="./images/640/Pexel-Search.640.webp"
              srcSet="./images/360/Pexel_Picture_Intro-360.webp 360w,
                      ./images/640/Pexel-Search.640.webp 640w,
                      ./images/1280/Pexel_Picture_Intro.webp 1280w"
              sizes="(max-width:650px) 80vw,640px"
              alt="Pexel Picture"
              loading="lazy"
            />
            <div className="useSkill">
              <h1>
                <a
                  href="https://github.com/freddy990117/Pexel-Picture-Project"
                  target="_blank"
                >
                  Pexel Picture Search
                </a>
                <span className="tooltip-text">點我進入 Github </span>
              </h1>
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
      </section>
      <footer id="Footer" className="context">
        <h2>Create by Freedy &copy; in 2025</h2>
        <div className="context-logo">
          <a
            href="https://github.com/freddy990117?tab=repositories"
            target="_blank"
          >
            <img className="logo" src="./icons/github.svg" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/lee-jay-chang-24735a266/"
            target="_blank"
          >
            <img
              className="logo-linkedin"
              src="./icons/Linkedin.svg"
              alt="linkedin"
            />
          </a>
          <a href="mailto:freddy990117@gmail.com?subject=你好，我想合作&body=請在此留下你的訊息">
            <img className="logo" src="./icons/gmail.svg" alt="gmail" />
          </a>
          <a href="https://www.instagram.com/___leejay___/" target="_blank">
            <img className="logo" src="./icons/instagram.svg" alt="instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
