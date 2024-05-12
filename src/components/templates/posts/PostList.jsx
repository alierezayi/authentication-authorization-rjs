import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../services/user";
import Loader from "../../modules/Loader";
import { sp } from "../../../utils/numbers";

function PostList() {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);

  if (isLoading) return <Loader />;

  return (
    <div className="">
      <h3 className="mb-7 border-b-2 border-red-800 w-fit pb-1.5 font-semibold">
        آگهی های شما
      </h3>
      {data.data.posts.map((post) => (
        <div
          key={post._id}
          className="flex items-center border p-1.5 my-2.5 rounded-md"
        >
          <img
            src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
            className="w-[100px] h-[70px] rounded ml-7"
          />
          <div className="flex-1">
            <p>{post.options.title}</p>
            <div className="text-sm text-gray-500">{post.options.content}</div>
          </div>
          <div className="flex-1 flex flex-col items-end pl-5">
            <p className="text-center">
              {new Date(post.createdAt).toLocaleDateString("fa-IR")}
            </p>
            <div className="text-sm text-gray-500 text-center">
              {sp(post.amount)} تومان
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
