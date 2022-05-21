import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import styled from "styled-components";
import { BoldLink, FormContainer, Input, MutedLink, SubmitButton } from "../components/AccountBox/common";
import Signup from "./Signup";
import Button from "../components/Button/Button";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(94, 210, 170);
  background: linear-gradient(58deg, rgba(94, 210, 170, 1) 13%, rgba(48, 140, 108, 1) 46%, rgba(103, 174, 145, 1) 70%, rgba(132, 205, 180, 1) 100%);
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 35px;
  font-weight: 650;
  line-height: 4;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: black;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <AccountContainer>
      <BoxContainer>
        <TopContainer>
          <BackDrop />{" "}
          <HeaderContainer>
            <HeaderText>Welcome</HeaderText>
            <HeaderText>Back</HeaderText>
            <SmallText>Please Sign Up</SmallText>
            <div className="container my-1 ">
              <Link to="/signup">← Go to Signup</Link>

              <h2>Login</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                  <label htmlFor="email">Email address:</label>
                  <input placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleChange} />
                </div>
                <div className="flex-row space-between my-2">
                  <label htmlFor="pwd">Password:</label>
                  <input placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
                </div>
                {error ? (
                  <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                  </div>
                ) : null}
                <div className="flex-row flex-end">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
              <MutedLink href="#">
                {" "}
                Don't have an accoun?{" "}
                <BoldLink href="/signup" onClick={Signup}>
                  Signup
                </BoldLink>
              </MutedLink>
            </div>
          </HeaderContainer>
        </TopContainer>
      </BoxContainer>
    </AccountContainer>
  );
}

export default Login;
