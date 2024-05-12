import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../../services/admin";
import Loader from "../../modules/Loader";
import { HiOutlineTrash } from "react-icons/hi2";
import { useModal } from "../../../context/ModalContextProvider";
import DeleteCategoryModal from "../modals/DeleteCategoryModal";

function CategoryList() {
  const { data, isFetching, error } = useQuery(["get-categories"], getCategory);
  const { openModal } = useModal();

  if (isFetching) return <Loader />;

  return (
    <div className="mt-12">
      <h3 className="mb-7 border-b-2 border-red-800 w-fit pb-1.5 font-semibold">
        همه دسته بندی ها
      </h3>
      {data.data.map((item) => (
        <div
          key={item.slug}
          className="flex my-5 p-4 border-2 rounded-md items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <img src={`${item.icon}.svg`} />
            <h5 className=" font-semibold text-sm">{item.name}</h5>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-end text-gray-600 italic">slug: {item.slug}</p>
            <button
              className="py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => openModal(<DeleteCategoryModal {...item} />)}
            >
              <HiOutlineTrash className="text-xl text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
