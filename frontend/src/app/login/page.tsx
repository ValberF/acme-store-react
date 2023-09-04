"use client";
import {
  AuthContent,
  Button,
  Input,
  InputContainer,
  LoginSection,
  RegisterSection,
} from "./styles";

export default function Login() {
  return (
    <>
      <AuthContent>
        <LoginSection>
          <h1>Login</h1>
          <InputContainer>
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
          </InputContainer>
          <Button>Confimar</Button>
        </LoginSection>
        <RegisterSection>
          <h1>Cadastre-se</h1>
          <InputContainer>
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="E-mail" />
            <Input type="text" placeholder="Telefone" />
            <Input type="password" placeholder="Senha" />
          </InputContainer>
          <Button>Confimar</Button>
        </RegisterSection>
      </AuthContent>
    </>
  );
}
