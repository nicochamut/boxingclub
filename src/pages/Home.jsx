import React from "react";
import styled from "styled-components";
import background from "../Assets/background.jpg";
import logo from "../Assets/logo.png";

export const Home = () => {
  return (
    <StyledHome>
      <div className="head">
        <img src={logo} alt='tm' />
        <h1>
          <span>TM</span> BOXING
        </h1>
        <p>Equipo profesional de boxeo de la más alta calidad.</p>
        <h2>CATÁLOGO</h2>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  background: url(${background});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to right,rgba(36, 36, 36, 0.48),rgb(36, 36, 36));
    width: 100%;
    height: 30vh;

    img {
      position: absolute;
      top: 2rem;
      width: 6rem;
    }
    h1 {
       font-family: "Saira Stencil One", serif;
  font-weight: 400;
  font-style: normal;
      font-size: 5rem;
      text-align: center;
      color: white;
      font-weight: weight;
      line-height: 1;
      letter-spacing: 0.8rem;

      span {
        color: yellow;
      }
    }

    p {
      color: white;
      border-bottom: 1px solid yellow;
      margin-bottom: 1rem;
      padding-bottom: 0.7rem;
          // 

    }

    h2 {
      color: white;
      margin-top: -10px;
       font-family: "Montserrat", serif;
         
    }
  }
`;
