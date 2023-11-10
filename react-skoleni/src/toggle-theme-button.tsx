import { useContext } from "react"
import { ThemeContext } from "./theme-context";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle theme</button>
}