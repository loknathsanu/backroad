import React from "react";
import { featured } from "./Data";
import Title from "./Title";

function Setionk() {
  return (
    <section class="section" id="tours">
      <Title heading="featured" text="tours" />
      <div class="section-center featured-center">
        {featured.map((tour) => {
          const { id, image, date, info, text, map, day, price } = tour;
          return (
            <div key={id} class="tour-card">
              <div class="tour-img-container">
                <img src={image} class="tour-img" alt="" />
                <p class="tour-date">{date}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{info}</h4>
                </div>
                <p>{text}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>{" "}
                    {map}
                  </p>
                  <p>{day}</p>
                  <p>{price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Setionk;
