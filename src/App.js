import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <Container>
      {!isAuthenticated ? (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => loginWithRedirect()}>
          Login
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={() => logout()}>
          Logout
        </Button>
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  button {
    margin: 5px;
    width: 150px;
  }
`;
