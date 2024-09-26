import { useTheme } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import { Box, FormControlLabel, IconButton } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import CloseIcon from "@mui/icons-material/Close";
import iconCheck from "./assets/icon-check.svg";

export default function TaskList({
  tasks,
  deleteTask,
  checkedTask,
  themeMode,
}) {
  const theme = useTheme();
  return (
    /*Contenedor principal*/
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        borderRadius: 1,
        transition: "1s",
      }}
    >
      {/*Contenedor de todos los elementos renderizados */}
      <FormGroup>
        {tasks.map((task) => (
          /*Contenedor de cada elemento agregado a la lista */
          <Box
            key={task.task}
            sx={{
              pt: "10px",
              pb: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              "&:hover": {
                backgroundColor: themeMode
                  ? "rgba(24, 24, 36, 0.3)"
                  : "rgba(173, 73, 225, 0.3)",
                borderRadius: 1,
              },
            }}
          >
            {" "}
            {/*Etiqueta del elemento */}
            <FormControlLabel
              sx={{
                ml: "5px",
                flexGrow: 1,
              }}
              control={
                /*Control del checkbox */
                <Checkbox
                  /*Desabilita el efecto de toque predeterminado */
                  disableTouchRipple={true}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  checked={task.isComplete}
                  onChange={() => checkedTask(task)}
                  icon={
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        border: "2px solid ",
                        borderRadius: "50%",
                        transition: "all 0.2s",
                      }}
                    />
                  }
                  checkedIcon={
                    <IconButton
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(140deg, rgba(0,255,218,1) -20%, rgba(255,0,202,1) 140%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        //backgroundImage: "url(src/assets/icon-check.svg)"
                      }}
                    >
                      <img src={iconCheck} alt="icon" />
                    </IconButton>
                  }
                />
              }
              label={
                <Box
                  sx={{
                    textDecoration: task.isComplete && "line-through",
                    color: task.isComplete
                      ? theme.palette.text.disabled
                      : theme.palette.text.primary,
                  }}
                >
                  {task.task}
                </Box>
              }
            />
            {/*Boton de eliminar */}
            <IconButton
              /*Desabilita el efecto de toque predeterminado */
              disableTouchRipple={true}
              onClick={() => deleteTask(task)}
              size="small"
              sx={{
                mr: "5px",
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.error.main,
                  backgroundColor: "transparent",
                },
              }}
              aria-label="Eliminar tarea"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
}
