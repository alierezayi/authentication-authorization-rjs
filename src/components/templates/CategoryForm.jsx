import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { addCategory } from "../../services/admin";
import notify from "../../configs/notify";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    if (!form.name || !form.icon || !form.slug) setIsInvalid(true);
    else setIsInvalid(false);
  }, [form]);

  const { mutate, isLoading, error, data } = useMutation(addCategory);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!form.name || !form.icon || !form.slug) return;

    mutate(form);

    setForm({ name: "", slug: "", icon: "" });
  };

  useEffect(() => {
    if (!!error) notify("error", error.message);
  }, [data, isLoading, error]);

  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3 className="mb-7 border-b-2 border-red-800 w-fit pb-1.5 font-semibold">
        دسته بندی جدید
      </h3>

      {data?.status === 201 && (
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
        disabled={isInvalid || isLoading}
        className="bg-red-800 text-white py-2.5 px-6 text-sm rounded-md disabled:bg-red-800/70 hover:bg-red-900 transition"
      >
        {isLoading ? "در حال ایجاد . . ." : "ایجاد"}
      </button>
    </form>
  );
}

export default CategoryForm;
