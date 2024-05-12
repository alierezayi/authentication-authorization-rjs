import { useState } from "react";
import { useModal } from "../../../context/ModalContextProvider";
import { deleteCategory } from "../../../services/admin";
import toast from "react-hot-toast";
import Loader from "../../modules/Loader";
import { useQueryClient } from "@tanstack/react-query";

function DeleteCategoryModal({ _id, name }) {
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  const deleteHandler = async () => {
    setIsLoading(true);
    const { response, error } = await deleteCategory(_id);
    if (error) return toast.error(error.message);
    if (response) {
      queryClient.invalidateQueries("get-categories");
      toast.success(`دسته بندی «${name}» با موفقیت حذف شد .`);
    }
    setIsLoading(false);
    closeModal();
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <h2 className="text-xl font-medium mb-7 text-red-600">حذف</h2>
      <p className="mb-7">آیا از حذف دسته بندی «{name}» مطمئن هستید؟</p>
      <div className="flex justify-end gap-3">
        <button
          className="w-[70px] py-2 rounded-md bg-red-800 text-white hover:bg-red-700 transition disabled:bg-opacity-70"
          onClick={deleteHandler}
          disabled={isLoading}
        >
          بله
        </button>
        <button
          className="w-[70px] py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
          onClick={closeModal}
          disabled={isLoading}
        >
          خیر
        </button>
      </div>
    </>
  );
}

export default DeleteCategoryModal;
