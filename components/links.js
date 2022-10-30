import React from "react";
import slack from "url:/img/slack.png";
import icon from "url:/img/Icon.png";

function Links() {
  return (
    <>
      <div className="link_section">
        <a
          href="https://twitter.com/officialAigbe?s=09"
          target="_blank"
          id="twitter__link"
        >
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" target="_blank" id="btn__zuri">
          Zuri Team
        </a>
        <a href="http://books.zuri.team" id="books" target="_blank">
          Zuri Book
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          id="book__python"
        >
          Python Book
        </a>
        <a href=" https://background.zuri.team" id="pitch">
          Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design">
          Design Books
        </a>
        <div class="socials">
          <img src={slack} alt="slack logo" />
          <img src={icon} alt="git logo" />
        </div>
      </div>
    </>
  );
}

export default Links;
