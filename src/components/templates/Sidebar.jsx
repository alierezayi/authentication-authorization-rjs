function Sidebar({ data }) {
  return (
    <div className="w-[200px]">
      <h3 className="font-semibold mb-7 mr-3">دسته بندی ها</h3>
      <ul className="flex flex-col gap-2">
        {data?.map((category) => (
          <li key={category._id}>
            <button className="flex items-center gap-3 hover:bg-gray-100 w-full p-2.5 rounded-md">
              <img
                src={`${category.icon}.svg`}
                className="w-6 font-medium text-gray-500"
                alt=""
              />
              <p>{category.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
