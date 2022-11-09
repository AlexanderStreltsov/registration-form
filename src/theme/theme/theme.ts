import { createTheme } from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";

const Theme = createTheme(
  {
    typography: {
      h1: {
        fontSize: 26,
        letterSpacing: 0.5,
      },
      body2: {
        fontSize: 12,
        lineHeight: 1.3,
        letterSpacing: "normal",
      },
    },
  },
  ruRU
);

export default Theme;
