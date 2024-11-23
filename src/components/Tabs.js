import "../css/Tabs.css";
import { useState } from "react";

export const Tabs = ({ page }) => {
  const [activeTab, setActiveTab] = useState(1);

  const changeActiveTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div id="tabs-container">
      <span id="contact-links-container">
        <a
          href="https://yelp.com/biz/the-lord-of-the-strings-los-angeles-2?utm_medium=badge_star_rating_reviews&amp;utm_source=biz_review_badge"
          target="_blank"
          rel="noreferer noreferrer"
          className="contact-links"
        >
          <img
            src="./yelp.jpg"
            alt="Check out The Lord of the Strings on Yelp"
            className="contact-link-logos"
          ></img>
        </a>

        <a
          href="https://www.youtube.com/@gabe_teaches_guitar"
          target="_blank"
          rel="noreferer noreferrer"
          className="contact-links"
        >
          <img
            src="./Youtube.png"
            alt="Subscribe to me on YouTube"
            className="contact-link-logos"
          ></img>
        </a>

        <a
          href="https://www.instagram.com/gabe_teaches_guitar"
          target="_blank"
          rel="noreferer noreferrer"
          className="contact-links"
        >
          <img
            src="./Instagram.png"
            alt="Follow me on Instagram"
            className="contact-link-logos"
          ></img>
        </a>

        <a
          href="https://www.facebook.com/gabeteachesguitar"
          target="_blank"
          rel="noreferer noreferrer"
          className="contact-links"
        >
          <img
            src="./facelogo.jpg"
            alt="Follow me on Facebook"
            className="contact-link-logos"
          ></img>
        </a>
      </span>
      <div className="tabs-row">
        {page.tabs.map((tab, i) => {
          return (
            <div
              key={tab + i}
              className={activeTab === i + 1 ? "tabs active-tab" : "tabs"}
              onClick={() => changeActiveTab(i + 1)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <div className="tabs-content">
        {page.content.map((media, i) => {
          if (activeTab === i + 1) {
            return (
              <div
                key={i}
                id="active-tab-content"
                className={"display-content active-content"}
              >
                {media}
              </div>
            );
          } else return null;
        })}
      </div>
    </div>
  );
};
