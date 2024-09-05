import { Button, Container, Box } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Grid from "@mui/material/Grid2";

function AppCopy() {
  return (
    <Container
      sx={{
        border: 5,
        boxShadow: 20,
        backgroundColor: "lightgreen",
      }}
    >
      <h1>App</h1>
      <Box
        sx={{
          border: 3,
          p: 5,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
          mb: 5,
          boxShadow: 10,
        }}
      >
        Pero que hermoso es MUI
      </Box>

      <Button variant="contained"> Un botón</Button>
      <Button variant="contained" endIcon={<ArrowUpwardOutlinedIcon />}>
        Enviar
      </Button>

      <Grid container>
        <Grid size={{ xs: 12, md: 4 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            deleniti explicabo! Accusantium ea incidunt modi aspernatur eum
            optio impedit adipisci omnis praesentium, blanditiis non fuga
            reiciendis laboriosam quis earum dicta.
          </p>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quod
            molestiae vero architecto, consequatur dolore repellendus
            consectetur libero consequuntur nobis magni porro necessitatibus
            dicta, expedita doloribus ducimus odio, repellat adipisci?
          </p>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quod
            molestiae vero architecto, consequatur dolore repellendus
            consectetur libero consequuntur nobis magni porro necessitatibus
            dicta, expedita doloribus ducimus odio, repellat adipisci?
          </p>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quod
            molestiae vero architecto, consequatur dolore repellendus
            consectetur libero consequuntur nobis magni porro necessitatibus
            dicta, expedita doloribus ducimus odio, repellat adipisci?
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppCopy;
