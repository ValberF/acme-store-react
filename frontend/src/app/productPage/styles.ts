import styled from "styled-components";

export const ProductContent = styled.div`
  display: flex;
  gap: 100px;

  padding: 70px 60px;

  img {
    border-radius: 12px;
  }
`;

export const ProductImage = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 30px;

  span {
      display: flex;
      justify-content: center;

      font-size: 16px;
      background-color: #ecf54c;
      border-radius: 10px;
      padding: 4px;
      width: 70%;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      cursor: pointer;
    } 
`;

export const ProductData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;

  width: 50%;

  p {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 70%;
  align-self: center;

  color: #fff;
  background-color: #e22329;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
`;