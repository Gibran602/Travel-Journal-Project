import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LocationCards(props) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={props.item.imageUrl}
          className="card--image"
          alt="location image from some country visited"
        />
      </div>
      <div className="card--content">
        <p className="country--name">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="location-icon"
            alt="location icon"
          />
          {props.item.location}
          <span className="map-link">
            <a href={props.item.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
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
