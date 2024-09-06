import {
  ThemeProvider,
  createTheme,
  IconButton,
  Container,
  Box,
  Typography,
  CssBaseline,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import iconButtonMoon from "./assets/icon-moon.svg";
import iconButtonsun from "./assets/icon-sun.svg";

export default function Layout({ onClickTheme, image }) {
  const { palette } = useTheme();

  
  return (
    <Box
      sx={{
        backgroundColor: palette.background.default,
        minHeight: "100vh",
        margin: 0,
        transition: "1s ease",
      }}
    >
      <Box
        sx={{
          backgroundImage: image
            ? "url(/images/bg-desktop-dark.jpg)"
            : "url(/images/bg-desktop-light.jpg)",
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "1s ease",
        }}
      />
      <Container maxWidth="sm" sx={{ mt: "-300px" }}>
        <Grid container>
          <Grid size={12} sx={{ color: palette.common.white }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pt={4}
              pb={2}
            >
              <Typography
                variant="h3"
                component="h1"
                textTransform="uppercase"
                fontWeight="bold"
                letterSpacing={16}
                fontSize="40px"
              >
                Todo
              </Typography>

              <IconButton onClick={onClickTheme}>
                <img src={iconButtonMoon} alt="moonicon" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
