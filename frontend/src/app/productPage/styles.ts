import styled from "styled-components";

export const ProductsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3%;
  row-gap: 40px;
  padding: 70px 60px;
`;

export const InputSearch = styled.input`
  outline: none;
  font-size: 21px;

  width: 30%;

  border-radius: 6px;
  border: 1px solid #a2a2a2;
  padding: 8px;
  margin-left: 60px;
  margin-top: 30px;
`;
