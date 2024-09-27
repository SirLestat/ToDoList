import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function Filter({ tasks, checkedTask }) {
  
  
  
  

  return (
    <Box sx={{ display: "flex" }}>
      <Box>Tareas restantes:</Box>

      <Box>
        <Button>Completadas</Button>
      </Box>

      <Box>
        <Button>Activas</Button>
      </Box>

      <Box>
        <Button>Limpiar completadas</Button>
      </Box>
    </Box>
  );
}
