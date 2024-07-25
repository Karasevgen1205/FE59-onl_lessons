import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../../components/banner";

export const MainPage = (props) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const isBlackTheme = useSelector((state) => state.isBlackTheme);

  return (
    <>
      <div className="" style={{ margin: "50px" }}>
        <div className="">Результат: {count}</div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Увеличить
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Уменьшить
        </button>
      </div>
      <Banner
        {...props}
        location={location}
        navigate={navigate}
        postId={postId}
        isBlackTheme={isBlackTheme}
      />
    </>
  );
};
