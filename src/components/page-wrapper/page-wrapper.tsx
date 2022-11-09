import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { device } from "../../theme/device";

const StyledPageWrapper = styled.main`
  width: 100vw;
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

  @media ${device.mobileS} {
    height: auto;
  }

  @media ${device.tablet} {
    height: 100vh;
  }
`;

const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <StyledPageWrapper>{children}</StyledPageWrapper>
);

export default PageWrapper;
