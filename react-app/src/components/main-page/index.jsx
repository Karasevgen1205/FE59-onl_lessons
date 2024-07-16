import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT_ACTION, DECREMENT_ACTION } from "../../store/actions";
import { Banner } from "../banner";

// это обертка над классовмы компонентом что бы ему передать хуки из реакт роутер дома

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
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            console.log("увеличить");
          }}
        >
          Увеличить
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
            console.log("уменьшить");
          }}
        >
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
