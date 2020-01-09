import React, { useState } from "react";

import { axiosWithAuth } from "./utils/axiosWithAuth";

import styled from 'styled-components';

const FormSlot = styled.div`

  display: flex;
  justify-content: center;
`;
const StyledForm = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInput = styled.input`
  margin: 10%;
  border: 1px black solid;
`;

const Button = styled.button`
  width: 35%;
  margin: 5%;
  height: 15%;
  color: black;
  background: white;
  border: 1px solid black;
  &:hover{
    color: white;
    background: black
    width: 45%;
    height: 20%;
  }
`;


function LoginForm({ history }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [isFetching, setIsFetching] = useState(false);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post("/api/auth/login", credentials)
      .then(res => {
        console.log(res);
        history.push("/account");
      })
      .catch(err => console.log(err));
  };

  return (
    <FormSlot>
      <StyledForm onSubmit={login}>
        <StyledInput
          type="text"
          name="username"
          placeholder="username..."
          value={credentials.username}
          onChange={handleChange}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="password..."
          value={credentials.password}
          onChange={handleChange}
        />
        <Button>Log in</Button>
        {isFetching && "logging in"}
      </StyledForm>
    </FormSlot>
  );
}

export default LoginForm;
