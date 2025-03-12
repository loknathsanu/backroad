import React from "react";
import logo from "../images/logo.svg";
import { PageLink, soicalMedia } from "./Data";
function Nabar() {
  return (
    <nav className="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul class="nav-links" id="nav-links">
          {PageLink.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} class="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul class="nav-icons">
          {soicalMedia.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a href={href} target="_blank" class="nav-icon">
                  <i class={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nabar;
