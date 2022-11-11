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
    max-width: 450px;
    padding: 50px 20px 60px;
  }

  @media ${device.mobileL} {
    padding: 50px 60px 60px;
  }

  @media ${device.tablet} {
    border-radius: 8px !important;
    padding: 50px 60px 60px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%) !important;
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
