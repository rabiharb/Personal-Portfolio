// ------------------------------------------------------------------------- Elements
const body = document.querySelector("body");
const themeBtn = document.querySelector("#themeBtn");
const contactTag = document.querySelector("#contactTag");
const contactSubmit = document.querySelector("#contactSubmit");
const myValues = document.querySelectorAll(".value");

const mountImage = document.querySelector(".mount-img");
const emailInput = document.querySelector("#messageArea");
const themeIcon = document.querySelector("#themeIcon");

// ------------------------------------------------------------------------- Events

body.addEventListener("load", setTheme());
themeBtn.addEventListener("click", function () {
  toggleTheme(this);
});
contactTag.addEventListener("click", elementInViewPort);
contactSubmit.addEventListener("click", function () {
  setHref(this);
});
myValues.forEach((value) => {
  value.addEventListener("mouseover", () => {
    animateDelay(value);
  });
});
// ----------------------------------------------------------------------- Functionality

function animateDelay(element) {
  const skillIcons = element.children;
  if (skillIcons.length < 2) {
    return;
  } else if (skillIcons.length == 2) {
    skillIcons[1].classList.add("bad-animate");
  } else {
    for (let i = 0; i < skillIcons.length; i++) {
      skillIcons[i].style.animationDelay = (i * 50).toString() + "ms";
      skillIcons[i].classList.add("okay-animate");
    }
  }
}

function elementInViewPort() {
  setTimeout(() => {
    emailInput.focus();
  }, 1000);
}
function setHref(element) {
  element.setAttribute(
    "href",
    "mailto:rabiharb_cs@outlook.com?subject=Work Notice&body=" +
      emailInput.value
  );
}

function lightTheme() {
  document.documentElement.style.setProperty("--text-color", "#292b2c");
  document.documentElement.style.setProperty("--body-color", "#fff");
  document.documentElement.style.setProperty("--back-light", "#e4f9f5");
  document.documentElement.style.setProperty("--back-dark", "#11999e");
  document.documentElement.style.setProperty("--back-darker", "#40514e");
  document.documentElement.style.setProperty("--back-medium", "#30e3ca");

  localStorage.currentTheme = "light";
}

function darkTheme() {
  document.documentElement.style.setProperty("--text-color", "#ccc");
  document.documentElement.style.setProperty("--body-color", "#292b2c");
  document.documentElement.style.setProperty("--back-light", "#11999e");
  document.documentElement.style.setProperty("--back-dark", "#e4f9f5");
  document.documentElement.style.setProperty("--back-darker", "#30e3ca");
  document.documentElement.style.setProperty("--back-medium", "#40514e");

  localStorage.currentTheme = "dark";
}

function toggleTheme(element) {
  element.classList.add("animate-btn");
  mountImage.classList.add("surface");
  mountImage.classList.remove("drown");
  setTimeout(() => {
    mountImage.classList.remove("surface");
    mountImage.classList.add("drown");
    element.classList.remove("animate-btn");
  }, 800);
  if (
    document.documentElement.style.getPropertyValue("--text-color") == "#ccc"
  ) {
    lightTheme();
    setTimeout(() => {
      themeIcon.className = "fas fa-sun";
    }, 400);
  } else {
    darkTheme();
    setTimeout(() => {
      themeIcon.className = "fas fa-moon";
    }, 400);
  }
}

function setTheme() {
  if (localStorage.currentTheme) {
    if (localStorage.currentTheme == "dark") {
      darkTheme();
      themeIcon.className = "fas fa-moon";
    } else if (localStorage.currentTheme == "light") {
      lightTheme();
      themeIcon.className = "fas fa-sun";
    }
  }
  themeBtn.style.transform = "translateY(0)";
  setTimeout(() => {
    mountImage.classList.remove("surface");
    mountImage.classList.add("drown");
  }, 500);
}
