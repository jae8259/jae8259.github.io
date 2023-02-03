import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { BaseLayout, Main } from "./style";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <BaseLayout>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </BaseLayout>
  );
};
