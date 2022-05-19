import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Value from "./pages/Value";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="price" element={<Value />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

const popup = document.querySelector("#popup");
const button = document.querySelector("#button");
const body = document.body;

button.addEventListener("click", buttonBurger);
[...popup.querySelectorAll("a")].forEach((element) => {
  element.addEventListener("click", buttonBurgerExit);
});

function buttonBurger(e) {
  e.preventDefault();
  button.classList.toggle("open");
  popup.classList.toggle("popup");
  body.classList.toggle("scroll");
}

function buttonBurgerExit() {
  button.classList.remove("open");
  popup.classList.remove("popup");
  body.classList.remove("scroll");
}

const onScrollHeader = () => {
  // объявляем основную функцию onScrollHeader

  const header = document.querySelector(".header"); // находим header и записываем в константу
  const defaultOffset = 250;

  let prevScroll = window.pageYOffset; // узнаем на сколько была прокручена страница ранее
  let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)

  window.addEventListener("scroll", () => {
    // при прокрутке страницы

    currentScroll = window.pageYOffset; // узнаем на сколько прокрутили страницу

    const headerHidden = () => header.classList.contains("header-scroll"); // узнаем скрыт header или нет

    if (
      currentScroll > prevScroll &&
      !headerHidden() &&
      currentScroll > defaultOffset
    ) {
      // если прокручиваем страницу вниз и header не скрыт
      header.classList.add("header-scroll"); // то скрываем header
    }
    if (currentScroll < prevScroll && headerHidden()) {
      // если прокручиваем страницу вверх и header скрыт
      header.classList.remove("header-scroll"); // то отображаем header
    }

    prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент
  });
};

onScrollHeader(); // вызываем основную функцию onScrollHeader
