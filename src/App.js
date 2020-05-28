import React from "react";
import george_iphone from "./assets/GeorgeiPhone-500.png";
import dev from "./dev";
import Info from "./Info";
import "./App.scss";

function App() {
  const { name, job, description } = dev;

  // const alertGeorge = () => {
  //   // ES6 Syntax
  //   alert("Yo bunk!"); // built in JS function
  // };

  // // function alertGeorge() { // same as above

  // // }

  const lightTheme = {
    "--color-primary": "#0071e3",
    "--color-solid": "#ffffff",
    "--color-surface": "#000000",
    "--color-secondary": "#ececec",
  };

  const darkTheme = {
    "--color-primary": "#0071e3",
    "--color-solid": "#000000",
    "--color-surface": "#ffffff",
    "--color-secondary": "#1e1e1e",
  };

  const [currentTheme, setTheme] = React.useState("dark");

  const changeTheme = () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(currentTheme);
  };

  const applyTheme = (nextTheme) => {
    const theme = nextTheme === "dark" ? lightTheme : darkTheme;
    Object.keys(theme).forEach((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  };

  return (
    <div className="george">
      <div className="col-50">
        <Info name={name} job={job} description={description} />
      </div>

      <div className="col-50">
        {/* <img src={george_iphone} className="george__iphoneImage" alt="A picture of me in a mockup" /> */}
        <img src={george_iphone} className="george__iphoneImage" alt="Selfie in a mockup" />
      </div>
      <span role="button" className="george__theme" onClick={changeTheme}>
        {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
}

export default App;
