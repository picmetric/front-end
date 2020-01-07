import React from "react";
import styled from "styled-components";

//components
import Analytics from "./Analytics";

const Image = styled.img`
  margin: 5%;
  width: 75%;
  z-index: 5;
`;
const ImagePage = props => {
  return <Image alt="meaningful text" src={`${props.picURL}`} />;
};

export default ImagePage;
