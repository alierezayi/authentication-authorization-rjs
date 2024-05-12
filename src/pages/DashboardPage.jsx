import AddPost from "../components/templates/posts/AddPost";
import PostList from "../components/templates/posts/PostList";

function DashboardPage() {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
