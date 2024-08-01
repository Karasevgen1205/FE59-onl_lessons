import {FC} from 'react';
import "./styles.scss";

export const Spinner: FC = () => {
  return (
    <div className="spinner">
      <div className="spinner__spin"></div>
    </div>
  );
};
