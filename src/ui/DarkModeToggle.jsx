import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/useDarkMode";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
      <span>Mode</span>
    </ButtonIcon>
  );
}

export default DarkModeToggle;
