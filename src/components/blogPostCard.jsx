import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImageType } from "@utils/types";

const BlogPostCard = ({ title, description, image, buttonTextMore,
       buttonTextLess, textLink, subtitle, link}) => {
  const [showText, setShowText] = useState(false);
  const post = {
    title: title,
    text: description,
    image: image,
    subtitle: subtitle,
    link: link,
    buttonTextMore: buttonTextMore,
    textLink: textLink,
    buttonTextLess: buttonTextLess
  };

  const handleButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <div
      data-sal="slide-up"
      data-sal-delay="150"
      data-sal-duration="800"
      className="rn-service-one color-shape-7"
    >
      <div className="inner">
        <div className="icon">
          {post && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              // className="solutions"
              src={post.image.src}
              alt={post.image?.alt || post.title}
            />
          )}
        </div>
        <div className="content">
          <h4 className="title">{post.title}</h4>
          <h6> {post.subtitle} </h6>
          {showText && <p className="description">{description}</p>}
          <div style={{ display: "flex", alignItems: "center" }}>
          <a href={post.link} target="_blank">
  {post.textLink}
</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={{
                backgroundColor: "#e0e0e0", // Example background color
                color: "#333", // Example text color
                padding: "5px 10px", // Example padding
                borderRadius: "4px", // Example border radius
                cursor: "pointer", // Example cursor style
                position: "relative", // Example position
                marginTop: "30px", // Example margin
              }}
              onClick={handleButtonClick}
            >
              {showText ? `${buttonTextLess}` : `${buttonTextMore}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
