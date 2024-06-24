import { useEffect, useState } from "react";
import { postsData } from "./mock-data.js";
import { Post } from "../post";
import "./styles.scss";

export const Posts = () => {
  const [posts, setPosts] = useState(postsData);
  const [filterValue, setfilterValue] = useState("All");

  return (
    <section className="posts">
      <div className="container">
        <h1 className="posts__title">Blog</h1>
        <div className="posts_nav">
            <button className={`posts_nav-btn ${
              filterValue === "All" ? "posts_nav-btn_active" : ""}`} onClick={() => setfilterValue("All")}>All</button>
            <button className={`posts_nav-btn ${
              filterValue === "Favs" ? "posts_nav-btn_active" : ""}`} onClick={() => setfilterValue("Favs")}>Favs</button>
            <button className={`posts_nav-btn ${
              filterValue === "Popular" ? "posts_nav-btn_active" : ""}`} onClick={() => setfilterValue("Popular")}>Popular</button>
      
        <div className={`posts__wrapper ${ filterValue === "Popular" || filterValue === "Favs" ? "posts__wrapper_small_grid" : ""}`}>
        {posts
    .filter((post) => {
      if (filterValue === "All") {
        return true; 
      } else if (filterValue === "Favs") {
        return post.favourite;
      } else if (filterValue === "Popular") {
        return post.popular;
      }
      return false; 
    })
          .map((item, index) => {
            let size = "large";
            if (filterValue ==="All") {
              if
              (index >= 1 && index <= 4) {
              size = "medium";
            } else if (index > 4) {
              size = "small";
            }}

            return <Post post={item} index={index} key={index} size={size} />;
          })}
        </div>
      </div>
      </div>
    </section>
  );
};
