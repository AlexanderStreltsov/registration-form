import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledPageWrapper = styled.main`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
`;

const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <StyledPageWrapper>{children}</StyledPageWrapper>
);

export default PageWrapper;
