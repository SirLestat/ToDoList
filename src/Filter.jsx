import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Filter({
  setFilter,
  cleanTasks,
  remainingTasks,
  showTask,
  theme,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Typography sx={{ fontSize: "10px" }}>
        Tareas restantes: {remainingTasks}
      </Typography>

      <Box
        
          sx={{
            cursor: 'pointer',
            fontSize: "10px",
            color: theme.palette.text.primary,
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
        
      </Box>
      <Box>
        <Button
          sx={{
            fontSize: "10px",
            color: theme.palette.text.disabled,
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

      <Box>
        <Button
          sx={{
            fontSize: "10px",
            color: theme.palette.text.primary,
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
      </Box>

      <Box>
        <Button
          sx={{
            fontSize: "10px",
            color: theme.palette.text.primary,
            "&:hover": {
              background: "transparent",
              color: theme.palette.primary.main,
            },
          }}
          onClick={cleanTasks}
        >
          Limpiar completadas
        </Button>
      </Box>
    </Box>
  );
}
