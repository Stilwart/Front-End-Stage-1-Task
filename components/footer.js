import React from "react";
import I4G from "url:/img/I4G.png";
import logo from "url:/img/logo.36d2d48a.png";

function Footer() {
  return (
    <>
      <section class="section-footer">
        <img src={logo} alt="Zuri Logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G logo" />
      </section>
    </>
  );
}

export default Footer;
