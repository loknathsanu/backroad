import React from "react";

function Title({ heading, text }) {
  return (
    <div class="section-title">
      <h2>
        {heading} <span>{text}</span>
      </h2>
    </div>
  );
}

export default Title;
