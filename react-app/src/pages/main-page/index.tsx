import React, {FC} from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getBlackTheme} from '../../store/selectors';
import { Banner } from "../../components/banner";
import { Counter } from "../../components/counter";

interface IMainPage {
  setIsShowModal: (value: boolean) => void;
}

export const MainPage: FC<IMainPage> = (props) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.count);
  const isBlackTheme = useSelector(getBlackTheme);

  return (
    <>
      <Banner
        {...props}
        location={location}
        navigate={navigate}
        postId={postId}
        isBlackTheme={isBlackTheme}
      />
      <Counter />
    </>
  );
};
