import styled from "styled-components";

export const AuthContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 70vh;
  padding: 40px;
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const RegisterSection = styled(LoginSection)`
  border-left: 1px solid #e1e1e1;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
  width: 50%;
  gap: 25px;
`;

export const Input = styled.input`
  outline: none;
  font-size: 21px;

  width: 100%;

  border-radius: 6px;
  border: 1px solid #a2a2a2;
  padding: 8px;
`;

export const Button = styled.button`
  height: 8%;
  width: 25%;
  font-size: 21px;

  margin-top: 30px;

  color: #fff;
  background-color: #e22329;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
`;