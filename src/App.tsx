import * as React from "react";
import Neumorphism from "./NeumorphismLib/Neumorphism";
import styled from "styled-components";

const App = () => {
  const [inverted, setinverted] = React.useState(false);
  return (
    <Container>
      <Neumorphism
        borderRadius={14}
        height={200}
        width={200}
        inverted={inverted}
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Neumorphism
          inverted={inverted}
          borderRadius={14}
          height={80}
          width={80}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p style={{ fontWeight: "bold", color: "white", fontSize: 23 }}>O</p>
        </Neumorphism>
      </Neumorphism>
      <Neumorphism
        width={80}
        borderRadius={10}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 style={{ color: "white", fontWeight: "bold" }}>Hi</h1>
      </Neumorphism>
      <Neumorphism
        width={300}
        height={90}
        borderRadius={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Neumorphism width={250} height={30} borderRadius={12}></Neumorphism>
      </Neumorphism>

      <button onClick={() => setinverted(!inverted)}>Invert me!</button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: orange;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default App;
