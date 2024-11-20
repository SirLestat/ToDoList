import { Box, FormControlLabel, IconButton, Checkbox } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import iconCheck from "../../assets/icon-check.svg";

export const TaskItem = ({
  task,
  theme,
  themeMode,
  checkedTask,
  deleteTask,
}) => {
  return (
    <Box
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
      
      <FormControlLabel
        sx={{
          ml: "5px",
          flexGrow: 1,
        }}
        control={
          
          <Checkbox
            
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
  );
};
