import React from "react";

const Images = ({ images, loading }) => {
  if (loading) {
    return <h3 className="display-6 text-center">Loading....</h3>;
  }
  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          className="img-thumbnail"
          src={image.thumbnailUrl}
          alt={image.title}
        />
      ))}
    </div>
  );
};

export default Images;
