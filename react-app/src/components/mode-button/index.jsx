import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME_ACTION } from "../../actions";
import moon from "./images/moon.svg";
import sun from "./images/sun.svg";
import "./styles.scss";

export const ModeButton = () => {
  const dispatch = useDispatch();
  const isBlackTheme = useSelector((state) => state.isBlackTheme);

  const handleChangeTheme = () => {
    dispatch(CHANGE_THEME_ACTION);
  };

  return (
    <div className="mode-button" onClick={handleChangeTheme}>
      <img src={isBlackTheme ? sun : moon} alt="" />
    </div>
  );
};
