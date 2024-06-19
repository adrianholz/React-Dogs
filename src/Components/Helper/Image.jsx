import React, { useState } from "react";
import "./Image.scss";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className="wrapper">
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} className="imageChild" alt={alt} {...props} />
    </div>
  );
};

export default Image;
