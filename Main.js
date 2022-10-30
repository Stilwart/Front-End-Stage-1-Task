import React from "react";
import ReactDom from "react-dom";

//My Components
import Profile from "./components/Profile";
import Links from "./components/links";
import Footer from "./components/footer";

function Main() {
  return (
    <div className="container">
      <section className="main">
        <Profile />
        <Links />
        <Footer />
      </section>
    </div>
  );
}

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Main />);
