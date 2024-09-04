import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";

function App() {
  return (
    <>
      <h1>App</h1>
      <div>
        <Box
          component="section"
          sx={{
            p: 5,
            border: "5px dotted black",
            padding: "50px",
            backgroundColor: "lightcoral",
          }}
        >
          This Box renders as an HTML section element.
        </Box>

        <Button variant="outlined" sx={{ marginTop: "1rem", borderColor: "red" }}>
          Un boton
        </Button>
      </div>
    </>
  );
}

export default App;
