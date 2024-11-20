import { IconButton } from "@mui/material";
import iconButtonMoon from "../../assets/icon-moon.svg";
import iconButtonSun from "../../assets/icon-sun.svg";

export const ThemeToggle = ({ onClickTheme, themeMode }) => {
  return (
    <IconButton
      disableTouchRipple={true}
      onClick={onClickTheme}
      sx={{ "&:hover": { backgroundColor: "transparent" } }}
    >
      <img
        style={{
          transition: "opacity 1s ease-in-out",
        }}
        src={themeMode ? iconButtonSun : iconButtonMoon}
        alt="themeicon"
      />
    </IconButton>
  );
};
