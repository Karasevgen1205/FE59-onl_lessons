import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPostsAction, changeTabAction } from "../../actions";
import { getPost, getPosts, getTab } from "../../selectors";
import { postsData } from "./mock-data.js";
import { PostPreview } from "../post-preview";
import { Post } from "../post/index.jsx";
import { Spinner } from "../spinner";
import "./styles.scss";

export const BlogPage = () => {
  const { category } = useParams(); //{category: "popular"}
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const post = useSelector(getPost);
  const posts = useSelector(getPosts);
  const filterValue = useSelector(getTab);

  useEffect(() => {
    dispatch(changeTabAction(category));

    fetch("https://studapi.teachmeskills.by/blog/posts/?limit=11")
      .then((response) => response.json())
      .then(({ results }) => {
        dispatch(addPostsAction(postsData));
        // dispatch(addPostsAction(results));
      })
      .catch((e) => console.log(e));
  }, []);

  const isAll = filterValue === "all";
  const isFavourites = filterValue === "favourites";
  const isPopular = filterValue === "popular";

  const handleClickAll = (category) => {
    return () => {
      dispatch(changeTabAction(category));
      navigate(`/blog/${category}`);
    };
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  if (!posts) {
    return <Spinner />;
  }

  return (
    <section className="posts">
      <div className="container">
        <h1 className="posts__title">Blog</h1>
        <div className="posts__nav">
          <div className="nav__actions">
            <button
              className={`posts__nav-btn ${
                isAll ? "posts__nav-btn_active" : ""
              }`}
              // onClick={() => {
              //   setFilterValue("all");
              //   navigate("/blog/all");
              // }}
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
            <input type="text" onInput={handleSearch} />
          </div>
        </div>
        <div
          className={`posts__wrapper ${
            isFavourites || isPopular ? "posts__wrapper_flex" : ""
          }`}
        >
          {posts
            .reduce((result, post) => {
              // ... оствим на ДЗ
              // ...ваш код
              return [...result, post];
            }, [])
            .filter((post) => {
              if (isAll) {
                return post;
              } else if (isFavourites) {
                return post.favourites;
              } else {
                return post.popular;
              }
            })
            .filter((post) => {
              return post.title.toLowerCase().includes(searchValue);
            })
            .map((item, index) => {
              let size = "large";

              if (isAll) {
                if (index >= 1 && index <= 4) {
                  size = "medium";
                } else if (index > 4) {
                  size = "small";
                }
              }

              return <Post post={item} index={index} key={index} size={size} />;
            })}
        </div>
      </div>
      {post && <PostPreview post={post} />}
    </section>
  );
};
