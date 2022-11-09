import React, { Fragment } from "react";
import GlobalStyle from "../../theme/global-styles";
import PageWrapper from "../page-wrapper";
import RegistrationForm from "../registration-form";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <PageWrapper>
        <RegistrationForm />
      </PageWrapper>
    </Fragment>
  );
};
export default App;
