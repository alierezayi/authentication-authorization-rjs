import { sp } from "../../../utils/numbers";

function Main({ data }) {
  return (
    <div className="flex flex-wrap justify-between w-[calc(100%-200px)]">
      {data?.posts.map((post) => (
        <div
          key={post._id}
          className="w-[330px] flex justify-between border rounded-md m-2.5 p-4"
        >
          <div className="flex flex-col justify-between">
            <p className="font-semibold">{post.options?.title}</p>
            <div className="text-gray-600 text-sm">
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options?.city}</span>
            </div>
          </div>
          <img
            src={
              // `${import.meta.env.VITE_BASE_URL}${post.images[0]}` ||
              "/no-camera.png"
            }
            className="w-[136px] aspect-square rounded"
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
