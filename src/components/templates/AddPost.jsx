import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { BsUpload } from "react-icons/bs";
import { useState } from "react";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    images: null,
  });

  const { data, isLoading, error } = useQuery(["get-categories"], getCategory);

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3 className="mb-7 border-b-2 border-red-800 w-fit pb-1.5 font-semibold">
        افزودن آگهی
      </h3>

      {/* <p className="bg-red-800 mb-5 text-white p-1.5 text-center rounded-md">
        دسته بندی با موفقیت اضافه شد.
      </p> */}

      <label htmlFor="title" className="mb-3 block text-sm">
        عنوان
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-[300px] p-1.5 border rounded-md mb-7 border-gray-300"
      />

      <label htmlFor="content" className="mb-3 block text-sm">
        محتوا
      </label>
      <textarea
        type="text"
        name="content"
        id="content"
        className="block w-[300px] min-h-[100px] max-h-[200px] p-1.5 border rounded-md mb-7 border-gray-300"
      />

      <label htmlFor="amount" className="mb-3 block text-sm">
        قیمت
      </label>
      <input
        type="text"
        name="amount"
        id="amount"
        className="block w-[300px] p-1.5 border rounded-md mb-7 border-gray-300"
      />

      <label htmlFor="city" className="mb-3 block text-sm">
        شهر
      </label>
      <input
        type="text"
        name="city"
        id="city"
        className="block w-[300px] p-1.5 border rounded-md mb-7 border-gray-300"
      />

      <label htmlFor="category" className="mb-3 block text-sm">
        دسته بندی
      </label>
      <select
        name="category"
        id="category"
        className="block mb-7 w-[300px] py-1 px-2 bg-gray-100 border border-gray-300 rounded-md"
      >
        {data?.data.map((item) => (
          <option key={item._id} value={item._id}>
            {/* <img src={`${item.icon}.svg`} alt="" /> */}
            {item.name}
          </option>
        ))}
      </select>

      <label className="mb-3 block text-sm">عکس</label>
      <label
        htmlFor="images"
        className="text-sm w-[300px] border-[1.5px] border-gray-300 border-dashed mb-7 py-2 rounded-md flex text-gray-500 justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer"
      >
        <BsUpload className="text-lg " />
        آپلود
      </label>
      <input
        type="file"
        name="images"
        id="images"
        className="block w-[300px] p-1.5 border rounded-md mb-7 border-gray-300 sr-only"
      />

      <button
        type="submit"
        className="bg-red-800 text-white py-2.5 px-6 text-sm rounded-md disabled:bg-red-800/70 hover:bg-red-900 transition"
      >
        {/* {isLoading ? "در حال ایجاد . . ." : "ایجاد"} */}
        ایجاد
      </button>
    </form>
  );
}

export default AddPost;
