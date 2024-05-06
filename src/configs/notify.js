import { toast } from "react-toastify";

const notify = (type, message) => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    rtl: true,
  };

  if (type === "success") toast.success(message, options);

  if (type === "error") toast.error(message, options);
};

export default notify;
