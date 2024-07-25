import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { activationEmailMiddlewareAction } from "../../store/actions";
import "./styles.scss";

export const ActivationEmailPage = () => {
  const dispatch = useDispatch();
  const { uid, token } = useParams();

  useEffect(() => {
    console.log(uid, token);
    dispatch(activationEmailMiddlewareAction(uid, token));
  }, []);

  return <h1>Loading...</h1>;
};
