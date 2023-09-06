import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280px;
  width: 100%;
  border-radius: 12px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  img {
    width: 100%;
    height: 70%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 40%;

    padding: 0 15px;
  }
`;

export const Button = styled.button`
  height: 45%;
  width: 25%;

  color: #fff;
  background-color: #e22329;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
`;

