import React, { useState } from "react";
import Button from "./components/Button";
import styled from "styled-components";

const Title = styled.h1`
  color: palevioletred;
`;

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Title>{counter}</Title>
      <Button buttonTitle="Click Me" onClick={() => setCounter((c) => c + 1)} />
    </div>
  );
};

export default App;
