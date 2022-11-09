import styled from "styled-components";
import { Paper, Button, TextField, Alert } from "@mui/material";
import { device } from "../../theme/device";

export const StyledFormWrapper = styled(Paper)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media ${device.mobileS} {
    min-height: 100vh;
    max-width: 450px;
    padding: 50px 20px 40px;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    border-bottom-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
  }

  @media ${device.mobileL} {
    min-height: auto;
    padding: 50px 60px 60px;
    border-radius: 8px !important;
  }

  @media ${device.tablet} {
    padding: 50px 60px 60px;
    width: 450px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 27px;
  width: 100%;
`;

export const StyledTextField = styled(TextField)`
  .MuiFormHelperText-root {
    position: absolute;
    top: 45px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 25px !important;
  text-transform: none !important;
  font-size: 16px !important;
`;

export const StyledProgressWrapper = styled.div`
  width: 100%;
  height: 4px;
`;

export const StyledAlert = styled(Alert)`
  align-items: center;
`;
