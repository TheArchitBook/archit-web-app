import { PropsWithChildren, useState } from "react";
import { Drawer, IconButton, IconButtonProps, styled } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { WARM_GRAY_2 } from "@theme/colors/gray";

export const drawerWidth = 240;
const ICON_SIZE = "50px";
const ICON_PADDING = "8px";

const StyledIconButton = styled(IconButton)<IconButtonProps>(() => ({
  color: "primary",
  borderRadius: 0,
  height: "100vh",
  width: ICON_SIZE,
  padding: ICON_PADDING,
  backgroundColor: "transparent",
  borderRight: `1px solid ${WARM_GRAY_2}`,
}));

const SidenavDrawer = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block", xl: "block" },
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRadius: 0,
          },
        }}
      >
        {children}
      </Drawer>
      <StyledIconButton
        aria-controls="side-nav-mobile"
        onClick={() => setMobileOpen(true)}
        sx={{ display: { xs: "block", sm: "block", md: "none", xl: "none" } }}
      >
        <NavigateNextIcon />
      </StyledIconButton>
      <Drawer
        open={mobileOpen}
        variant="temporary"
        id="side-nav-mobile"
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none", xl: "none" },
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRadius: 0,
          },
        }}
      >
        {children}
      </Drawer>
    </>
  );
};

export default SidenavDrawer;
