import { HiMoon, HiSun } from "react-icons/hi";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

interface ThemeSwitcherProps {
  size: "sm" | "lg" | "icon" | "default" | null | undefined;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

const ThemeSwitcher = ({ size, variant }: ThemeSwitcherProps) => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant={variant}
      onClick={toggleTheme}
      size={size}
      className="rounded-full text-black dark:text-white/70"
    >
      {theme === "dark" ? (
        <HiSun size={25} className="ml-2 text-white/70" />
      ) : (
        <HiMoon size={25} className="ml-2" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
