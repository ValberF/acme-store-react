"use client";
import { User } from "@/models/UserProps.model";
import { useState } from "react";
import {
  AuthContent,
  Button,
  Input,
  InputContainer,
  LoginSection,
  RegisterSection,
} from "./styles";

export default function Login() {
  const [userRegister, setUserRegister] = useState({} as User);

  const registerUser = () => {
    let users = [] as User[];
    users = JSON.parse(localStorage.getItem("_users") || "[]");

    if (users) {
      users.push(userRegister);
      localStorage.setItem("_users", JSON.stringify(users));
    } else {
      localStorage.setItem("_users", JSON.stringify([userRegister]));
    }
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, name: event.target.value });
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, email: event.target.value });
  };

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, phone: event.target.value });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, password: event.target.value });
  };

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
            <Input
              type="text"
              value={userRegister.name}
              onChange={handleName}
              placeholder="Nome"
            />
            <Input
              type="email"
              value={userRegister.email}
              onChange={handleEmail}
              placeholder="E-mail"
            />
            <Input
              type="text"
              value={userRegister.phone}
              onChange={handlePhone}
              placeholder="Telefone"
            />
            <Input
              type="password"
              value={userRegister.password}
              onChange={handlePassword}
              placeholder="Senha"
            />
          </InputContainer>
          <Button onClick={registerUser}>Confimar</Button>
        </RegisterSection>
      </AuthContent>
    </>
  );
}
