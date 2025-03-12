import React from "react";
import Title from "./Title";
import { servicesIteam } from "./Data";

function Services() {
  return (
    <section class="section services" id="services">
      <Title heading="our" text="services" />
      <div class="section-center services-center">
        {servicesIteam.map((service, id) => {
          return (
            <article key={id} class="service">
              <span class="service-icon">
                <i class={service.icon}></i>
              </span>
              <div class="service-info">
                <h4 class="service-title">{service.title}</h4>
                <p class="service-text">{service.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
