import React from "react";
import about from "../images/about.png";
import Title from "./Title";

function Section() {
  return (
    <section class="section" id="about">
      <Title heading="About" text="us" />

      <div class="section-center about-center">
        <div class="about-img">
          <img src={about} class="about-photo" alt="awesome beach" />
        </div>
        <article class="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" class="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default Section;
