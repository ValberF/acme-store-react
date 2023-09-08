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
import { login } from "../../redux/user/slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userRegister, setUserRegister] = useState({} as User);
  const [userLogin, setUserLogin] = useState({} as User);
  const dispatch = useDispatch();
  const router = useRouter();

  const loginUser = () => {
    let users = JSON.parse(localStorage.getItem("_users") || "[]");
    let user =
      users.find((element: User) => element.email === userLogin.email) &&
      users.find((element: User) => element.password === userLogin.password);

    if (user) {
      dispatch(login(user));
      localStorage.setItem("_access", JSON.stringify(true));
      router.push("/");
    } else {
      alert("Email ou senha incorretos!");
    }
  };

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

  const handleLoginEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userLogin, email: event.target.value });
  };

  const handleLoginPassoword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userLogin, password: event.target.value });
  };

  const handleRegisterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, name: event.target.value });
  };

  const handleRegisterEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, email: event.target.value });
  };

  const handleRegisterPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, phone: event.target.value });
  };

  const handleRegisterPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserRegister({ ...userRegister, password: event.target.value });
  };

  return (
    <>
      <AuthContent>
        <LoginSection>
          <h1>Login</h1>
          <InputContainer>
            <Input
              type="email"
              value={userLogin.email}
              onChange={handleLoginEmail}
              placeholder="E-mail"
            />
            <Input
              type="password"
              value={userLogin.password}
              onChange={handleLoginPassoword}
              placeholder="Senha"
            />
          </InputContainer>
          <Button onClick={loginUser}>Confimar</Button>
        </LoginSection>
        <RegisterSection>
          <h1>Cadastre-se</h1>
          <InputContainer>
            <Input
              type="text"
              value={userRegister.name}
              onChange={handleRegisterName}
              placeholder="Nome"
            />
            <Input
              type="email"
              value={userRegister.email}
              onChange={handleRegisterEmail}
              placeholder="E-mail"
            />
            <Input
              type="text"
              value={userRegister.phone}
              onChange={handleRegisterPhone}
              placeholder="Telefone"
            />
            <Input
              type="password"
              value={userRegister.password}
              onChange={handleRegisterPassword}
              placeholder="Senha"
            />
          </InputContainer>
          <Button onClick={registerUser}>Confimar</Button>
        </RegisterSection>
      </AuthContent>
    </>
  );
}
