import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";

export default function Filter({
  setFilter,
  cleanTasks,
  remainingTasks,
  theme,
  filter,
}) {
  return (
    <Grid
      container
      sx={{
        padding: "5px 10px 5px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontSize: "12px", color: theme.palette.text.disabled }}>
        {remainingTasks} Tareas restantes
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "12px",
            color:
              filter === null
                ? theme.palette.primary.main
                : theme.palette.text.disabled,
            "&:hover": {
              background: "transparent",
              color: theme.palette.primary.main,
            },
          }}
          onClick={() => {
            setFilter(null);
          }}
        >
          Todas
        </Button>

        <Button
          sx={{
            textTransform: "none",
            fontSize: "12px",
            color:
              filter === false
                ? theme.palette.primary.main
                : theme.palette.text.disabled,
            "&:hover": {
              background: "transparent",
              color: theme.palette.primary.main,
            },
          }}
          onClick={() => {
            setFilter(false);
          }}
        >
          Activas
        </Button>

        <Button
          sx={{
            textTransform: "none",
            fontSize: "12px",
            color:
              filter === true
                ? theme.palette.primary.main
                : theme.palette.text.disabled,
            "&:hover": {
              background: "transparent",
              color: theme.palette.primary.main,
            },
          }}
          onClick={() => {
            setFilter(true);
          }}
        >
          Completadas
        </Button>
      </Box>

      <Button
        sx={{
          textTransform: "none",
          cursor: "pointer",
          fontSize: "12px",
          color: theme.palette.text.disabled,
          "&:hover": {
            background: "transparent",
            color: theme.palette.primary.main,
          },
        }}
        onClick={cleanTasks}
      >
        Limpiar completadas
      </Button>
    </Grid>
  );
}
