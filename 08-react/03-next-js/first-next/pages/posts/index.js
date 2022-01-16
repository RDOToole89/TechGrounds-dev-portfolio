import axios from 'axios';
import Link from 'next/link';

function PostList({ posts }) {
  return (
    <div>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default PostList;

export const getStaticProps = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const response = await axios.get(url);
  const { data } = response;

  return {
    props: {
      posts: data,
    },
  };
};
