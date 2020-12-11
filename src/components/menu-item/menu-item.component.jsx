import React from "react";
import {withRouter} from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({title, subtitle, imageUrl, size, id, match, history}) => {

console.log(match)
console.log(history)
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        history.push(`page/${id}`)
        {/* history.push(`${location.match.url}/${id}`) */}
      }}
    >
      <div
        className="menu-item__background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
