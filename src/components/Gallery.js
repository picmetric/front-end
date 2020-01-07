import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom";


const Image = styled.img`
  width: 30%;
  margin: 1%;
  
  &:hover{
    width: 35%;
    margin: .5%
  }
`;

const GalleryContainer = styled.div`
  max-width: 100%;
`;

const Gallery = (props) => {

  const onClickHandler = (e) => {
    props.setClicked(e.target);
    // console.log( props.clicked)
  }
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   axios.get('https://picsum.photos/v2/list')
  //     .then(res => {
  //         console.log(res.data);
  //         //access returned object, setItems to returned images

  //         setItems(res.data);
  //         // console.log(items);
        

  //         //map over items, and make each one a link to it's own page, style for gridview
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })
  // }, []);
    console.log('this is props', props);
  return <GalleryContainer>
    {
      props.items.map( item => {
        return <Link  to={`/account/image/${item.id}`}>
          <Image id ={item.id} onClick={onClickHandler} src= {item.download_url} alt={item.author}/>
        </Link>
      })
    }
  </GalleryContainer>;

  
};



export default Gallery;
