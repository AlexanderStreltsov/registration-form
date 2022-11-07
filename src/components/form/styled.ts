import styled from "styled-components";
import { Paper, Button } from "@mui/material";

export const StyledFormWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  padding: 40px 30px;
  gap: 30px;
  border-radius: 8px !important;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  margin-top: 15px !important;
  text-transform: none !important;
  font-size: 18px !important;
`;
