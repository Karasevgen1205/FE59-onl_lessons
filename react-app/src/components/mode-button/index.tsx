import {FC} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME_ACTION } from "../../store/actions";
import {getBlackTheme} from '../../store/selectors';
import moon from "./images/moon.svg";
import sun from "./images/sun.svg";
import "./styles.scss";

export const ModeButton: FC = () => {
  const dispatch = useDispatch();
  const isBlackTheme = useSelector(getBlackTheme);

  const handleChangeTheme = () => {
    dispatch(CHANGE_THEME_ACTION);
  };

  return (
    <div className="mode-button" onClick={handleChangeTheme}>
      <img src={isBlackTheme ? sun : moon} alt="" />
    </div>
  );
};
