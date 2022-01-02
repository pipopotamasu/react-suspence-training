import { useQuery } from 'react-query';

type Post = {
  id: number;
  title: string;
  likes: number;
};

function getPosts(): Promise<Post[]> {
  return fetch('http://localhost:3001/api/posts').then((res) => res.json());
}

export default function PostList() {
  const { data } = useQuery('posts', getPosts);

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
