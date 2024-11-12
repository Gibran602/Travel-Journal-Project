import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LocationCards(props) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={props.item.imageUrl} className="card--image" />
      </div>
      <div className="card--content">
        <p className="country--name">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="location-icon"
            alt={props.item.title}
          />
          {props.item.location}
        </p>
        <h3 className="location--title">{props.item.title}</h3>
        <p className="location--dates">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="location--description">{props.item.description}</p>
      </div>
    </div>
  );
}
