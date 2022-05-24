import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container, NavCon, Logo, Menu } from "../styles/styles";

function Navbar() {
  return (
    <Nav>
      <Container>
        <NavCon>
          <div>
            <Logo to="/"> TpcbankkPro</Logo>
          </div>
          <Menu>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </Menu>
        </NavCon>
      </Container>
    </Nav>
  );
}

export default Navbar;
