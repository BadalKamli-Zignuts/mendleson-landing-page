import React from "react";

// ServiceContent Component: Displays content for a specific service
const ServiceContent = ({
  title,
  image,
  content,
  reverseLayout,
  textStart,
  imageStart,
}) => {
  return (
    <div
      className={`lg:flex ${
        reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:justify-start `}
    >
      {/* Image Section */}
      <div
        className={`lg:order-last lg:flex lg:justify-${imageStart}`}
      >
        <img src={image} className="my-10 lg:mx-10" alt="" />
      </div>

      {/* Text Content Section */}
      <div className={`lg:w-full lg:flex lg:justify-center lg:items-center lg:text-${textStart} xl:w-1/2 `}>
        <div
          className={`text-lg rubik-thin leading-7 mb-6 lg:rubik-regular lg:w-4/5`}
        >
          {/* Title */}
          <h2
            className={`text-2xl rubik-medium mb-2 lg:text-4xl lg:rubik-medium lg:text-${textStart}`}
          >
            {title.toUpperCase()}
          </h2>
          {/* Content */}
          {content}
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
