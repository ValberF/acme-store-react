import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  a {
    margin-left: 14%;
  }
    
`;

export const NavContent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15%;

    a {
      margin: 0;
      font-size: 1.3rem;
      text-decoration: inherit;
      color: inherit;
    }
`;

export const CartContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
`;
