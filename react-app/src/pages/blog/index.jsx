import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../api/posts.js";
import {
  addPostsAction,
  changeTabAction,
  REQUEST_POSTS_ACTION,
  getPostsMiddlewareAction,
} from "../../store/actions";
import { getPost, getTab } from "../../store/selectors/index.js";
import { PostPreview } from "../../components/post-preview";
import { Post } from "../../components/post";
import { BlogNavBar } from "../../components/blog-nav-bar";
import { NoSearchResult } from "../../components/no-search-result";
import { Pagination } from "../../components/pagination";
import { Spinner } from "../../components/spinner";
import "./styles.scss";

export const LIMIT = 12;

export const BlogPage = () => {
  // const { category } = useParams(); //{category: "popular"}
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const filterValue = useSelector(getTab);
  const [posts, setPost] = useState({
    content: [],
    loading: false,
    count: 0,
  });
  const [order, setOrder] = useState("title");
  const [page, setPage] = useState(1);
  // const [orderBy, setOrderBy] = useState("asc"); // desc
  // const post = useSelector(getPost);
  // const posts = useSelector(getPosts);
  // const filterValue = useSelector(getTab);

  useEffect(() => {
    // dispatch(changeTabAction(category));
    getPosts();
  }, []);

  const getPosts = (value) => {
    setPost({ content: [], loading: true });

    fetchPosts(value, order, LIMIT, page).then(({ results, count }) =>
      setPost({ content: [results], loading: false, count })
    );
  };
  console.log(posts);
  const handleSearch = (value) => {
    getPosts(value);
    // fetchPosts("query").then();
  };

  const handleLoadMore = () => {
    setPost((prevState) => ({ ...prevState, loading: true }));

    fetchPosts("", order, LIMIT, page + 1).then(({ results, count }) =>
      setPost((prevState) => ({
        content: [...prevState.content, results],
        loading: false,
        count,
      }))
    );
    setPage((prevState) => prevState + 1);
  };

  const handleChangePage = (newPage) => {
    fetchPosts("", order, LIMIT, newPage).then(({ results, count }) =>
      setPost({
        content: [results],
        loading: false,
        count,
      })
    );

    setPage(newPage);
  };

  return (
    <section className="posts">
      <div className="container">
        <h1 className="posts__title">Blog</h1>
        <BlogNavBar handleSearch={handleSearch} />
        {posts.content.map((item, index) => {
          return (
            <div
              className={`posts__wrapper ${
                filterValue === "favourites" || filterValue === "popular"
                  ? "posts__wrapper_flex"
                  : ""
              }`}
              key={index}
            >
              {item.map((post, index) => {
                return (
                  <Post
                    post={post}
                    index={index}
                    key={post.id}
                    size={index <= 5 ? "medium" : "small"}
                  />
                );
              })}
            </div>
          );
        })}
        {!posts.content.length && !posts.loading && <NoSearchResult />}
        <Pagination
          count={posts.count}
          limit={LIMIT}
          page={page}
          handleChangePage={handleChangePage}
        />
        {page * (LIMIT + 1) <= posts.count && (
          <div className="posts__load-more" onClick={handleLoadMore}>
            <button className="posts__load-more-btn">Load more</button>
          </div>
        )}
        {posts.loading && <Spinner />}
      </div>
      {/* {post && <PostPreview post={post} />} */}
    </section>
  );
};
