import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">
        <FontAwesomeIcon icon={faEarthAmericas} className="earth-icon" />
        WanderNotes
      </h1>
    </header>
  );
}
