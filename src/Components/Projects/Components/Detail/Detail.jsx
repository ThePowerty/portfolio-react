import React from "react";
import "./Detail.css"

export const Detail = ({title, description, repo}) => {
  const handleButtonClick = () => {
    const fullUrl = `https://github.com/thepowerty/${repo}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <div className="detail">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="detail-button">
        <button onClick={handleButtonClick}>View code</button>
      </div>
    </div>
  );
};
