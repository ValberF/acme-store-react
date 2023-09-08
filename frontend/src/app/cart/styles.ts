import styled from "styled-components";

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  padding: 70px 140px;

  img {
    border-radius: 12px;
  }

  #total-price {
    font-size: 24px;
  }
`;

export const ProductContent = styled.section`
  display: flex;
  gap: 30px;
`;

export const ProductData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 50%;

  span {
    font-size: 24px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;  
  gap: 20px;

  width: 50%;
  margin-top: 40px;

  span {
    font-size: 24px;
  }
  
  svg {
    cursor: pointer;
  }
`;

export const Checkout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;

  span {
    font-size: 24px;
  }
  
  svg {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 30%;
  align-self: center;

  color: #fff;
  background-color: #e22329;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  font-size: 25px;
`;