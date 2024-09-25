import { useTheme } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import { Box, FormControlLabel, IconButton } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Check from "./assets/icon-check.svg";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";

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
      <FormGroup>
        {tasks.map((task) => (
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
                borderRadius: "4px",
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
                        border: "2px solid",
                        borderColor: theme.palette.text.primary,
                        borderRadius: "50%",
                        transition: "all 0.2s",
                      }}
                    />
                  }
                  checkedIcon={
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(159deg, rgba(0,255,218,1) 0%, rgba(255,0,202,1) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        //backgroundImage: "url(src/assets/icon-check.svg)"
                      }}
                    ></Box>
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
            <IconButton
              onClick={() => deleteTask(task)}
              size="small"
              sx={{
                mr: "5px",
                color: themeMode
                  ? theme.palette.grey[400]
                  : theme.palette.grey[800],
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
