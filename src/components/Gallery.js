import React, { useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [items, setItems] = useState([]);
  // axios.get('url')
  //     .then(res => {
  //         console.log(res);
  //         //access returned object, setItems to returned images wrapped in tags
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })
  return <div>Build Gallery
    {/* grid of images on bottom, carousel with focused image on top */}
    {/* Carousel steps:
        get array of images from user object
        set state of focused image, default is zeroth 
        right button advances through array, left decreases
        clicking an image sets it as focused
    
    */}
  </div>;
};

export default Gallery;
