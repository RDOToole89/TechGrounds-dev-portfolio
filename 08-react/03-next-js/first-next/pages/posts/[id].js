import axios from 'axios';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>

      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const response = await axios.get(url);
  const { data } = response;

  const paths = data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // console.log('CONTEXT', context);

  const id = context.params.id;

  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const response = await axios.get(url);
  const { data } = response;

  return {
    props: {
      post: data,
    },
  };
};
