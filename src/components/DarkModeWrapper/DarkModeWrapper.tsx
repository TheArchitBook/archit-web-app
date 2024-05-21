import { PropsWithChildren, createContext, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { MuiButton } from "@theme/overrides/button";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const DarkModeWrapper = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => {
    let localTheme = createTheme({
      palette: {
        mode,
      },
    });
    localTheme = createTheme(localTheme, {
      components: {
        MuiButton,
      },
    });

    return localTheme;
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </ColorModeContext.Provider>
  );
};

export default DarkModeWrapper;
