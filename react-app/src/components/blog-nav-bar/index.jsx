import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeTabAction } from "../../store/actions";
import { getTab } from "../../store/selectors/index.ts";
import { useState } from "react";

export const BlogNavBar = ({ handleSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filterValue = useSelector(getTab);
  const [searchValue, setSearchValue] = useState("");

  const isAll = filterValue === "all";
  const isFavourites = filterValue === "favourites";
  const isPopular = filterValue === "popular";

  const handleClickAll = (category) => {
    return () => {
      dispatch(changeTabAction(category));
      navigate(`/blog/${category}`);
    };
  };

  const handleCahnge = (event) => {
    setSearchValue(event.target.value);
    // handleSearch(event.target.value);
  };

  return (
    <div className="posts__nav">
      <div className="nav__actions">
        <button
          className={`posts__nav-btn ${isAll ? "posts__nav-btn_active" : ""}`}
          onClick={handleClickAll("all")}
        >
          All
        </button>
        <button
          className={`posts__nav-btn ${
            isFavourites ? "posts__nav-btn_active" : ""
          }`}
          onClick={handleClickAll("favourites")}
        >
          Favourites
        </button>
        <button
          className={`posts__nav-btn ${
            isPopular ? "posts__nav-btn_active" : ""
          }`}
          onClick={handleClickAll("popular")}
        >
          Popular
        </button>
      </div>
      <div className="nav__search">
        <input type="text" onInput={handleCahnge} value={searchValue} />
        <button type="button" onClick={() => handleSearch(searchValue)}>
          Search
        </button>
      </div>
    </div>
  );
};
