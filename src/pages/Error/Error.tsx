import { Box, Button, Container, Typography } from "@mui/material";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { BLACK } from "@theme/colors/black";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage = "";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = error.statusText;
    }

    if (error.status === 401) {
      errorMessage = t("error_page.forbidden_message");
    }
  }

  return (
    <Container
      maxWidth="xs"
      sx={{ textAlign: "center", verticalAlign: "center", py: "10%" }}
    >
      <Box sx={{ my: 3 }}>
        <Typography color={BLACK} variant="h5" gutterBottom>
          {t("error_page.general")}
        </Typography>
        {
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            <>{errorMessage}</>
          </Typography>
        }
        <Button
          sx={{ mt: 4 }}
          size="small"
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          {t("error_page.button_message")}
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
