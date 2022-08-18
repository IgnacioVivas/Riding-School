import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Classes from "./mainTitle.module.scss";

function MainTitle() {
  const currentRoute = useLocation();

  useEffect(() => {
    switch (currentRoute.pathname) {
      case "/about":
        document.getElementById("title").innerText = "about us";
        break;
      case "/lessons":
        document.getElementById("title").innerText = "lessons";
        break;
      case "/gallery":
        document.getElementById("title").innerText = "gallery";
        break;
      case "/contact":
        document.getElementById("title").innerText = "contact";
        break;

      default:
        break;
    }
  }, [currentRoute.pathname]);

  return (
    <>
      {currentRoute.pathname === "/" ? (
        <div className={Classes.contTitle}>
          <h1>
            saddle up! <br /> start riding!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Maiores quis veritatis minima suscipit totam quibusdam soluta saepe
            ad <br /> aliquam nulla fuga quia earum sequi cumque ipsa delectus,
            quae, quidem tempora!
          </p>
          <button>start today</button>
        </div>
      ) : (
        <>
          <div className={Classes.contTitleOtherSections}>
            <h1 id="title"></h1>
          </div>
        </>
      )}
    </>
  );
}

export default MainTitle;
