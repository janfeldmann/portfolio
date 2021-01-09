import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 2;
  left: 10vw;
  right: 50vw;
  /* background: #130037; */

  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
    padding: 20px 20px;

    &:first-child {
      padding-left: 0;
    }
  }
`;

const Navigation = (props) => {
  return (
    <StyledNav className="nav">
      <ul>
        <li>Skills</li>
        <li>Vita</li>
        <li>Kontakt</li>
      </ul>
    </StyledNav>
  );
};

Navigation.propTypes = {};

export default Navigation;
