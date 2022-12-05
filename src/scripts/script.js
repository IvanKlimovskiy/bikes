const burgerMenu = document.querySelector(".header__burger-menu");
const buttonCloseNavigationMenu = document.querySelector(".nav-menu__close-button");
const switcher = document.querySelectorAll("input[type=checkbox]");
const mainPage = document.querySelector(".page");
const menuBurger = document.querySelector(".header__burger-menu");
const navigationMenu = document.querySelector(".nav-menu");
const navigationMenuLinks = document.querySelectorAll(".nav-menu__link");
const titlesWelcomPage = document.querySelectorAll(".welcome-page__title");
const subtitleWelcomPage = document.querySelector(".welcome-page__subtitle");
const bikeNameWelcomPage = document.querySelector(".welcome-page__bike-name");
const cyclistQuote = document.querySelector(".cyclist-quote__quote");
const cyclistQuoteName = document.querySelector(".cyclist-quote__name");
const cyclistQuoteProfession = document.querySelector(".cyclist-quote__profession");
const titlseBikesDescription = document.querySelectorAll(".bikes-description__title");
const textsBikesDescription = document.querySelectorAll(".bikes-description__text");
const buttonSliderPrev = document.querySelectorAll(".itc-slider__btn_prev");
const buttonSliderNext = document.querySelectorAll(".itc-slider__btn_next");
const titleBikesGallery = document.querySelector(".bikes-gallery__title");
const indicatorsSlider = document.querySelectorAll(".itc-slider__indicator_position_top");
const indicatorActive = document.querySelector(".itc-slider__indicator_active");
const namesBikeCard = document.querySelectorAll(".bikes-gallery__name");
const titlesBlockWorkouts = document.querySelectorAll(".workouts__title");
const textBlockWorkouts = document.querySelector(".workouts__text");
const linksBlockWorkouts = document.querySelectorAll(".workouts__link");
const footer = document.querySelector(".footer");
const titleFooter = document.querySelector(".footer__title");
const formFooter = document.querySelector(".footer__form");
const inputEmailFooter = document.querySelector(".footer__input-email");
const copyrightFooter = document.querySelector(".footer__copyright");
const iconSwitcherDark = document.querySelectorAll(".switcher__dark");
const iconSwitcherLight = document.querySelectorAll(".switcher__light");

Array.from(switcher).forEach((el) => {
  el.addEventListener("change", (e) => {
    if (e.target.checked) {
      mainPage.classList.add("page_theme_dark");
      menuBurger.classList.add("header__burger-menu_theme_dark");
      buttonCloseNavigationMenu.classList.add("nav-menu__close-button_theme_dark");
      Array.from(navigationMenuLinks).forEach((el) => {
        el.classList.add("nav-menu__link_theme_dark");
      });
      Array.from(titlesWelcomPage).forEach((el) => {
        el.classList.add("welcome-page__title_theme_dark");
      });
      navigationMenu.classList.add("nav-menu_theme_dark");
      subtitleWelcomPage.classList.add("welcome-page__subtitle_theme_dark");
      bikeNameWelcomPage.classList.add("welcome-page__bike-name_theme_dark");
      cyclistQuote.classList.add("cyclist-quote__quote_theme_dark");
      cyclistQuoteName.classList.add("cyclist-quote__name_theme_dark");
      cyclistQuoteProfession.classList.add(
        "cyclist-quote__profession_theme_dark"
      );
      Array.from(titlseBikesDescription).forEach((el) => {
        el.classList.add("bikes-description__title_theme_dark");
      });
      Array.from(textsBikesDescription).forEach((el) => {
        el.classList.add("bikes-description__text_theme_dark");
      });
      Array.from(buttonSliderPrev).forEach((el) => {
        el.classList.add("itc-slider__btn_prev_theme_dark");
      });
      Array.from(buttonSliderNext).forEach((el) => {
        el.classList.add("itc-slider__btn_next_theme_dark");
      });
      titleBikesGallery.classList.add("bikes-gallery__title_theme_dark");
      Array.from(indicatorsSlider).forEach((el) => {
        el.classList.add("itc-slider__indicator_position_top_theme_dark");
      });
      Array.from(namesBikeCard).forEach((el) => {
        el.classList.add("bikes-gallery__name_theme_dark");
      });
      Array.from(titlesBlockWorkouts).forEach((el) => {
        el.classList.add("workouts__title_theme_dark");
      });
      textBlockWorkouts.classList.add("workouts__text_theme_dark");
      Array.from(linksBlockWorkouts).forEach((el) => {
        el.classList.add("workouts__link_theme_dark");
      });
      footer.classList.add("footer_theme_dark");
      titleFooter.classList.add("footer__title_theme_dark");
      formFooter.classList.add("footer__form_theme_dark");
      inputEmailFooter.classList.add("footer__input-email_theme_dark");
      copyrightFooter.classList.add("footer__copyright_theme_dark");
      Array.from(iconSwitcherLight).forEach((el) => {
        el.src = './images/light-dark.svg';
      });
      Array.from(iconSwitcherDark).forEach((el) => {
        el.src = './images/dark-dark.svg';
      });
    } else {
      mainPage.classList.remove("page_theme_dark");
      menuBurger.classList.remove("header__burger-menu_theme_dark");
      buttonCloseNavigationMenu.classList.remove("nav-menu__close-button_theme_dark");
      Array.from(navigationMenuLinks).forEach((el) => {
        el.classList.remove("nav-menu__link_theme_dark");
      });
      Array.from(titlesWelcomPage).forEach((el) => {
        el.classList.remove("welcome-page__title_theme_dark");
      });
      navigationMenu.classList.remove("nav-menu_theme_dark");
      subtitleWelcomPage.classList.remove("welcome-page__subtitle_theme_dark");
      bikeNameWelcomPage.classList.remove("welcome-page__bike-name_theme_dark");
      cyclistQuote.classList.remove("cyclist-quote__quote_theme_dark");
      cyclistQuoteName.classList.remove("cyclist-quote__name_theme_dark");
      cyclistQuoteProfession.classList.remove(
        "cyclist-quote__profession_theme_dark"
      );
      Array.from(titlseBikesDescription).forEach((el) => {
        el.classList.remove("bikes-description__title_theme_dark");
      });
      Array.from(textsBikesDescription).forEach((el) => {
        el.classList.remove("bikes-description__text_theme_dark");
      });
      Array.from(buttonSliderPrev).forEach((el) => {
        el.classList.remove("itc-slider__btn_prev_theme_dark");
      });
      Array.from(buttonSliderNext).forEach((el) => {
        el.classList.remove("itc-slider__btn_next_theme_dark");
      });
      titleBikesGallery.classList.remove("bikes-gallery__title_theme_dark");
      Array.from(indicatorsSlider).forEach((el) => {
        el.classList.remove("itc-slider__indicator_position_top_theme_dark");
      });
      Array.from(namesBikeCard).forEach((el) => {
        el.classList.remove("bikes-gallery__name_theme_dark");
      });
      Array.from(titlesBlockWorkouts).forEach((el) => {
        el.classList.remove("workouts__title_theme_dark");
      });
      textBlockWorkouts.classList.remove("workouts__text_theme_dark");
      Array.from(linksBlockWorkouts).forEach((el) => {
        el.classList.remove("workouts__link_theme_dark");
      });
      footer.classList.remove("footer_theme_dark");
      titleFooter.classList.remove("footer__title_theme_dark");
      formFooter.classList.remove("footer__form_theme_dark");
      inputEmailFooter.classList.remove("footer__input-email_theme_dark");
      copyrightFooter.classList.remove("footer__copyright_theme_dark");
      Array.from(iconSwitcherLight).forEach((el) => {
        el.src = './images/light.svg';
      });
      Array.from(iconSwitcherDark).forEach((el) => {
        el.src = './images/dark.svg';
      });
    }
  });
})

burgerMenu.addEventListener("click", () => {
  navigationMenu.style.right = "0";
});

buttonCloseNavigationMenu.addEventListener("click", () => {
  navigationMenu.style.right = "-100%";
});
