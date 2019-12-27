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
  return <div>Build Gallery</div>;
};

export default Gallery;
