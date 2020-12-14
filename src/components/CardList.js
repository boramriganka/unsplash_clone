import "../css/CardList.css";
import React from "react";
import Card from "./Card";

const CardList = props => {
// creates images array

  const images = props.images.map(image => {
    return <Card key={image.id} image={image}/>;
  });

  return <div className="image-list"> {images} </div>;
};

export default CardList;
