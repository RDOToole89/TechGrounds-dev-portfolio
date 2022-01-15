import axios from 'axios';

export default function Home({ posts }) {
  // console.log(posts);

  return (
    <div>
      <h1>Hello!</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

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
