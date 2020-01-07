import React from "react";
import { Link } from "react-router-dom";
import { logout } from "./auth/utils/logout";
import styled from "styled-components";

const Header = props => {
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

      <Link className="header-link" to="/account">
        Account
      </Link>

      <button className="logoutBtn" onClick={logout}>
        <Link to="/login" className="header-link">
          Logout
        </Link>
      </button>

      <Link className="header-link" to="/signup">
        Signup
      </Link>
    </HeaderSection>
  );
};

export default Header;
