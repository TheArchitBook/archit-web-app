import { Button, Stack, Typography } from "@mui/material";
import SidenavDrawer from "./SidenavDrawer/SidenavDrawer";
import { ColorModeContext } from "@components/DarkModeWrapper/DarkModeWrapper";
import { useContext } from "react";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

const PADDING_TOP = "52px";

export default function Sidenav() {
  const colorMode = useContext(ColorModeContext);

  return (
    <SidenavDrawer>
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        paddingTop={PADDING_TOP}
      >
        <ToggleOffOutlinedIcon onClick={colorMode.toggleColorMode} />
        <Typography>Link</Typography>
        <Button variant="contained">Button</Button>
      </Stack>
    </SidenavDrawer>
  );
}
