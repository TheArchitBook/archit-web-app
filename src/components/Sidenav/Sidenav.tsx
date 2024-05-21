import { Stack, Typography } from "@mui/material";
import SidenavDrawer from "./SidenavDrawer/SidenavDrawer";

const PADDING_TOP = "52px";

export default function Sidenav() {
  return (
    <SidenavDrawer>
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        paddingTop={PADDING_TOP}
      >
        <Typography>Link</Typography>
      </Stack>
    </SidenavDrawer>
  );
}
