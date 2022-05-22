import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Value from "./pages/Value";
import { AnimatePresence } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="price" element={<Value />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

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
