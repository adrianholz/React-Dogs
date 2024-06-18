import React from "react";
import "./FeedPhotosItem.scss";

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className="photo">
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
