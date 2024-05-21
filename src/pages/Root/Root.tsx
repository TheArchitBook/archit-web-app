import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, CssBaseline, Container } from "@mui/material";
import { useEffect } from "react";
import Sidenav from "@components/Sidenav/Sidenav";
import { ROUTES } from "@constants/shared";

const PATHS_TO_REDIRECT = ["/", ""];

export const Root = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (PATHS_TO_REDIRECT.includes(pathname)) {
      console.log("Redirecting to /home");
      navigate(ROUTES.HOME);
    }
  }, [navigate, pathname]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Sidenav />
      <Container
        sx={{
          marginX: { xs: 0, sm: 0, md: 0, lg: 0, xl: "auto" },
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};

export default Root;
