import "./styles.scss"
import { Post } from "../post";

export const PostDetailId = ({ post, setCurrentPost }) => {
  const { date, title, text, image } = post;

  return (
    <div className="post-detail">
      <button onClick={() => setCurrentPost(null)} className="back_to_posts">
        Go back
      </button>
      <div className="post-detail__info">
        <p className="post-detail__date">{date}</p>
        <h1 className="post-detail__title">{title}</h1>
        <p className="post-detail__text">{text}</p>
        <div className="post-detail__img">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};