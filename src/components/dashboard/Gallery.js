import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import ImagePage from "./ImagePage";

const Image = styled.img`
  width: 30%;
  margin: 1%;
`;

const Gallery = props => {
  const [items, setItems] = useState([]);
  const [clicked, setClicked] = useState({});

  const onClickHandler = e => {
    setClicked(e.target);
  };

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then(res => {
        // console.log(res.data);
        //access returned object, setItems to returned images

        setItems(res.data);
        // console.log(items);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {items.map(item => {
        return (
          <Link to={`/account/image/${item.id}`} key={item.url}>
            <Image
              id={item.id}
              onClick={onClickHandler}
              src={item.download_url}
              alt={item.author}
            />
          </Link>
        );
      })}

      <Route
        // path={`/account/image/:clickedId`}
        path={`/account/image/${clicked.id}`}
        render={() => <ImagePage picURL={clicked.src} />}
      />
      {/* make better gallery */}
    </div>
  );
};

export default Gallery;
