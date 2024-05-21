import { createTheme } from "@mui/material/styles";
import { typography } from "./config/typography";
import { palette } from "./config/palette";
import { MuiButton } from "./overrides/button";

let theme = createTheme({
  palette,
  typography,
});

theme = createTheme(theme, {
  components: {
    MuiButton,
  },
});

export default theme;
