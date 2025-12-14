import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      <p>{isFetching ? "Updating..." : "Loaded from cache"}</p>

      <button onClick={refetch}>Refetch</button>

      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
