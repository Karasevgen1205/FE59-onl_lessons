import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { postsData } from "../blog/mock-data";
import { Spinner } from "../spinner";
import "./styles.scss";

export const PostDetaild = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("useLocation", location);
    console.log("window.location", window.location);

    // setTimeout(() => {
    fetch(`https://jsonplaceholder.typicode.com/todows/${postId}`)
      .then((response) => response.json())
      // ниже правильный рабочий вариант
      // .then((res) => setPost(res));
      // ниже НЕправильный рабочий вариант чисто на тестовых данных
      .then((res) => {
        const currentPost = postsData.find((post) => post.id === +postId);

        if (currentPost) {
          // если id в браузерной строке есть среди тестовых данных
          setPost(currentPost);
        } else {
          navigate("/404");
        }
      })
      .catch((e) => console.log(e));
    // }, 1000);
  }, []);

  const handleClick = () => {
    navigate(-1); // возврат на предыдущую страницу
  };

  if (!post) {
    return <Spinner />;
  }

  return (
    <section className="post-detail">
      <div className="container">
        <div className="post-detail__wrapper">
          <button className="post-detail__go-back" onClick={handleClick}>
            Go back
          </button>
          {/* <Link to="/blog" className="post-detail__go-back">
            Go back
          </Link> */}
          <div className="post-detail__img">
            <img src={post.image} alt="" />
          </div>
          <h1 className="post-detail__title">{post.tile}</h1>
          <h1>{post.title}</h1>
        </div>
      </div>
    </section>
  );
};
