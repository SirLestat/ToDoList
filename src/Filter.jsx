import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Filter({
  setFilter,
  cleanTasks,
  remainingTasks,
  theme,
  handleClick,
  filter,
}) {

  
  return (
    <Box
      sx={{
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        
      }}
    >
      <Typography sx={{ fontSize: "12px", color: theme.palette.text.disabled }}>
      {remainingTasks} Tareas restantes 
      </Typography>


      <Box sx={{display: "flex",
      }}>
        <Box
          sx={{
            mr: "20px",
            cursor: "pointer",
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
        </Box>
        <Box
          sx={{
            mr: "20px",
            cursor: "pointer",
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
        </Box>

        <Box
          sx={{
            cursor: "pointer",
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
        </Box>
      </Box>

      <Box
        sx={{
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
      </Box>
    </Box>
  );
}
