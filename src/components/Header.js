import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const HeaderSection = styled.section`
    max-width: 100%;
    background: navy;
    display: flex;
    justify-content: space-around;
    padding: 2%;
  `;
  return (
    <HeaderSection className="header">
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/account">
        Account
      </Link>
      <Link className="header-link" to="/login">
        Login
      </Link>
      <Link className="header-link" to="/signup">
        Signup
      </Link>
    </HeaderSection>
  );
};

export default Header;
