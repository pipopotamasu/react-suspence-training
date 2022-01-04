type Post = {
  id: number;
  title: string;
  likes: number;
};

let posts: Post[] | undefined;

export default function PostList() {
  if (!posts) {
    throw fetch('http://localhost:3001/api/posts').then(async (res) => (posts = await res.json()));
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
