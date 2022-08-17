import React from "react";
import logo from "../img/headerlogo.png";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <nav>
        <header>
          <ul>
            <li>
              <img src={logo} alt="Rick and Morty" />
            </li>
            <li>Characters</li>
            <li>Play the Game</li>
            <li>Contact</li>
          </ul>
        </header>
      </nav>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: 10%;
  background-color: gray;
  margin: 0;
  padding: 0%;

  header {
    display: flex;
  }
  ul {
    display: flex;
    flex: 1 1 40rem;
    list-style: none;
    justify-content: space-around;
    align-items: center;
  }
  li {
    font-size: 1rem;
  }

  img {
    width: 10rem;
  }
`;
export default Header;
