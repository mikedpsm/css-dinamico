const body = document.querySelector("body");
const themeButton = document.querySelector(".light");

const initialTheme = localStorage.getItem("theme");

themeButton.textContent = initialTheme === "light" ? "🌞" : "🌙";

body.style.setProperty(
  "--color-background",
  initialTheme === "light" ? "#FFF" : "#000"
);

body.style.setProperty(
  "--color-text",
  initialTheme === "light" ? "#000" : "#FFF"
);

themeButton.addEventListener("click", () => {
  themeButton.textContent = themeButton.textContent === "🌞" ? "🌙" : "🌞";

  localStorage.setItem("theme", initialTheme === "light" ? "dark" : "light");

  const alterBgTheme =
    body.style.getPropertyValue("--color-background") === "#000"
      ? "#FFF"
      : "#000";
  body.style.setProperty("--color-background", alterBgTheme);

  const alterTxtTheme =
    body.style.getPropertyValue("--color-text") === "#FFF" ? "#000" : "#FFF";
  body.style.setProperty("--color-text", alterTxtTheme);
});
