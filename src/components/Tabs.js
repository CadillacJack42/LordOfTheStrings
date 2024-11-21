import "../css/Tabs.css";
import { useState } from "react";

export const Tabs = ({ page }) => {
  const [activeTab, setActiveTab] = useState(1);

  const changeActiveTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs-container">
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
