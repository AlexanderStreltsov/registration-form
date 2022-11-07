import React, { Fragment } from "react";
import GlobalStyle from "../../theme/global-styles";
import PageWrapper from "../page-wrapper";
import Form from "../form";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <PageWrapper>
        <Form />
      </PageWrapper>
    </Fragment>
  );
};
export default App;
