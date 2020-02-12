import * as React from "react";
import Neumorphism from "./Neumorphism";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Neumorphism
        borderRadius={14}
        height={200}
        width={200}
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Neumorphism
          borderRadius={14}
          height={50}
          width={50}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p style={{ fontWeight: "bold", color: "white", fontSize: 23 }}>O</p>
        </Neumorphism>
      </Neumorphism>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
