import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { addCategory } from "../../../services/admin";
import useFormValidation from "../../../hooks/useValidation";
import toast from "react-hot-toast";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const [showMessage, setShowMessage] = useState(false);
  const { isValidate } = useFormValidation(form);
  const queryClient = useQueryClient();

  const { mutate, isLoading, error, data } = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-categories");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const changeHandler = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValidate) return;
    mutate(form);
  };

  useEffect(() => {
    if (data?.status === 201) setShowMessage(true);
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [data?.status]);

  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className="mt-20">
      <h3 className="mb-7 border-b-2 border-red-800 w-fit pb-1.5 font-semibold">
        دسته بندی جدید
      </h3>

      {showMessage && (
        <p className="bg-red-800 mb-5 text-white p-1.5 text-center rounded-md">
          دسته بندی با موفقیت اضافه شد.
        </p>
      )}

      <label htmlFor="name" className="mb-3 block text-sm">
        اسم دسته بندی
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-[300px] p-1.5 border rounded-md mb-7 border-gray-300"
      />

      <label htmlFor="slug" className="mb-3 block text-sm">
        اسلاگ
      </label>
      <input
        type="text"
        name="slug"
        id="slug"
        className="block w-[300px] p-1.5 border rounded-md mb-7 border-gray-300"
      />

      <label htmlFor="icon" className="mb-3 block text-sm">
        آیکون
      </label>
      <input
        type="text"
        name="icon"
        id="icon"
        className="block w-[300px] p-1.5 border rounded-md mb-7 border-gray-300"
      />

      <button
        type="submit"
        disabled={!isValidate || isLoading}
        className="bg-red-800 text-white py-2.5 px-6 text-sm rounded-md disabled:bg-red-800/70 hover:bg-red-900 transition"
      >
        {isLoading ? "در حال ایجاد . . ." : "ایجاد"}
      </button>
    </form>
  );
}

export default CategoryForm;
