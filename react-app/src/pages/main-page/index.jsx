import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../../components/banner";
import { Counter } from "../../components/counter";

export const MainPage = (props) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.count);
  const isBlackTheme = useSelector((state) => state.isBlackTheme);

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
