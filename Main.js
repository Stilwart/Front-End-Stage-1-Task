import React from "react";
import ReactDom from "react-dom";

//My Components
import Profile from "./components/Profile";

function Main() {
  return (
    <div className="container">
      <section className="main">
        <Profile />
      </section>
    </div>
  );
}

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Main />);
