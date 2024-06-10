import { useQuery } from "@tanstack/react-query";
import Main from "../components/routes/home/Main";
import Sidebar from "../components/templates/Sidebar";
import { getAllPosts } from "../services/user";
import Loader from "@/components/modules/Loader";
import { getCategory } from "../services/admin";

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  if (postLoading || categoryLoading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar {...categories} />
      <Main {...posts} />
    </div>
  );
}

export default HomePage;
