import { useState } from "react";

function CategoryForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3 className="mb-7 border-b-2 border-red-800 w-fit pb-1.5 font-semibold">
        دسته بندی جدید
      </h3>

      {/* <p className="bg-red-800 mb-5 text-white p-1.5 text-center rounded-md w-fit"></p> */}

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

      <button type="submit" className="bg-red-800 text-white py-2.5 px-6 text-sm rounded-md">ایجاد</button>
    </form>
  );
}

export default CategoryForm;
