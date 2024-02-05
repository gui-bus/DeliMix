import { HiMoon, HiSun } from "react-icons/hi";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="link"
      onClick={toggleTheme}
      size={"icon"}
      className="text-black transition-all duration-200 hover:scale-110 dark:text-white"
    >
      {theme === "dark" ? (
        <HiSun size={25} className="text-white" />
      ) : (
        <HiMoon size={25} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
