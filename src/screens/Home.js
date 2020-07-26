import React, { useState, useContext } from "react";
import { PrimaryButton } from "../components/Button";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
import { signOut } from "../auth/firebase/authentication";

const Title = styled.h1`
  color: palevioletred;
`;

const Home = () => {
  const [counter, setCounter] = useState(0);
  const { user } = useContext(UserContext);

  return (
    <div>
      <Title>Hello {user.firstName}</Title>
      <Title>{counter}</Title>
      <PrimaryButton onClick={() => setCounter((c) => c + 1)}>Click me</PrimaryButton>
      <PrimaryButton onClick={() => signOut()}>Sign Out</PrimaryButton>
    </div>
  );
};

export default Home;
