import { Button, Container, containerClasses, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { lightBlue, red } from "@mui/material/colors";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Grid2 from "@mui/material";

function App() {
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

      <Grid2 container gap={1}>
        <Grid2 item xs={12} sm={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            temporibus labore quo, nisi, illum earum cupiditate est, eaque unde
            ex aliquam quas voluptas explicabo porro similique corrupti
            molestias sit facilis!
          </p>
        </Grid2>

        <Grid2 item xs={12} s>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            reiciendis accusamus adipisci nisi harum impedit. Quas similique
            recusandae quod enim! Fugit possimus dolorum, distinctio velit
            exercitationem tempora minus dolores accusantium?
          </p>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default App;
