import { Post } from '../post'

export const SearchResults = ({ searchQuery, posts }) => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div>
        <h1>Результаты поиска</h1>
        {results.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    );
  };