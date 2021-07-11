import React from "react";
import Header from "../../Components/Header/Header-component";
import { Container } from "./HomeLayout-styles";

const HomeLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default HomeLayout;
