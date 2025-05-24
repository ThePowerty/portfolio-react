import React from "react";
import "./Detail.css"

export const Detail = ({title, description, repo, btn}) => {
  const handleButtonClick = () => {
    var fullUrl;
    if (btn!=="Open") {
      fullUrl = `https://github.com/thepowerty/${repo}`;
    } else {
      fullUrl = repo
    }
    window.open(fullUrl, "_blank");
  };

  return (
    <div className="detail">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="detail-button">
        <button onClick={handleButtonClick}>{btn}</button>
      </div>
    </div>
  );
};
