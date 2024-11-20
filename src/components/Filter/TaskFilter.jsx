import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export function TaskFilter({
  setFilter,
  cleanTasks,
  remainingTasks,
  theme,
  filter,
}) {
  const buttonStyle = (value) => {
    return {
      color:
        filter === value
          ? theme.palette.primary.main
          : theme.palette.text.disabled,
      fontSize: "12px",
      "&:hover": {
        background: "transparent",
        color: theme.palette.primary.main,
      },
      textTransform: "none",
    };
  };

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 10px 5px 10px",
        
      }}
    >
      <Typography sx={{ fontSize: "12px", color: theme.palette.text.disabled }}>
        {remainingTasks} Tareas restantes
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Button sx={buttonStyle(null)} onClick={() => setFilter(null)}>
          Todas
        </Button>

        <Button sx={buttonStyle(false)} onClick={() => setFilter(false)}>
          Activas
        </Button>

        <Button sx={buttonStyle(true)} onClick={() => setFilter(true)}>
          Completadas
        </Button>
      </Box>

      <Button sx={buttonStyle()} onClick={cleanTasks}>
        Limpiar completadas
      </Button>
    </Grid>
  );
}