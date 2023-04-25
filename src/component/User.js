import React from "react";

const User = ({ title, summary }) => {
  return (
    <div className="post">
      <div className="texts">
        <h2>{title}</h2>
        <p className="summary">
          {summary.slice(0, 320) + (summary.length > 320 ? "..." : "")}
        </p>
      </div>
    </div>
  );
};

export default User;
