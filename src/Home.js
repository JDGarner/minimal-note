import React, { useState, useContext } from "react";
import Button from "./components/Button";
import styled from "styled-components";
import { UserContext } from "./providers/UserProvider";
import { signOut } from "./auth/firebase/authentication";

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
      <Button onClick={() => setCounter((c) => c + 1)}>Click me</Button>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default Home;
