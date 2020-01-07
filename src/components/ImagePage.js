import React from "react";
import styled from "styled-components";

//components
import Analytics from "./Analytics"

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ImageCard = styled.div`
  width: 75%;
  background: beige;
  display: flex;
`;
const Image = styled.img`
  margin: 5%;
  width: 75%;
  z-index: 5;
`;
const ImagePage = props => {
  return (<ImageContainer>
    <ImageCard>
     <Image alt="meaningful text" src={`${props.picURL}`} />
      {/* Make sure to set the analytics to clicked */}
      <Analytics/>
    </ImageCard>
  </ImageContainer>);
};

export default ImagePage;
