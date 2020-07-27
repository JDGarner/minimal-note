import React, { useState, useContext } from "react";
import { PrimaryButton } from "../components/Button";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
import { signOut } from "../auth/firebase/authentication";
import { ScreenContainer } from "../components/StyledComponents";
import { Link } from "@reach/router";
import Header from "../components/Header";

const Title = styled.h1`
  color: palevioletred;
`;

const Home = () => {
  const [counter, setCounter] = useState(0);
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <ScreenContainer>
          <Header>Hello {user.firstName}</Header>
          <Title>{counter}</Title>

          <PrimaryButton onClick={() => setCounter((c) => c + 1)}>Click me</PrimaryButton>
          <PrimaryButton onClick={() => signOut()}>Sign Out</PrimaryButton>
        </ScreenContainer>
      ) : (
        <ScreenContainer>
          <Header>Welcome</Header>
          <Link className="btn btn-link" to="/signIn">
            Sign in
          </Link>
          <Link className="btn btn-link" to="/signUp">
            Sign up
          </Link>
        </ScreenContainer>
      )}
    </div>
  );
};

export default Home;
