import { useNavigate } from "react-router-dom";
import { checkOtp } from "@/services/auth";
import { setCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/services/user";
import useValidation from "@/hooks/useValidation";
import notify from "@/configs/notify";
import { useState } from "react";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { isInvalid } = useValidation(code, 5);

  const { refetch } = useQuery(["profile"], getProfile);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (code.length !== 5) return;

    setIsLoading(true);

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      setCookie(response.data);

      navigate("/");

      refetch();
      
      notify("success", "خوش آمدید");
    }

    if (error) {
      notify("error", "عملیات با شکست مواجه شد.");
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-[500px] flex flex-col border border-gray-300 p-8 rounded-md"
    >
      <p className="mb-5 text-lg font-normal">تایید کد اس ام اس شده</p>
      <div className="text-xs text-gray-600 mb-5">
        کد پیامک شده به شماره «{mobile}» را وارد کنید.
      </div>
      <label htmlFor="input" className="text-sm">
        کد تایید را وارد کنید
      </label>
      <input
        id="input"
        type="text"
        placeholder="کد تایید"
        className="border border-gray-300 p-2 rounded-md text-sm mt-2 mb-5 outline-none"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        type="submit"
        disabled={isInvalid || isLoading}
        className="w-fit py-2 px-4 bg-red-700 text-white rounded-md text-sm hover:bg-red-800 transition disabled:opacity-70 disabled:bg-red-700 disabled:cursor-not-allowed"
      >
        {isLoading ? "در حال پردازش . . ." : "تایید و ورود"}
      </button>
      <button
        type="button"
        className="text-sm text-red-700 py-2 px-4 w-fit border border-red-700 rounded-md mt-5"
        onClick={() => setStep(1)}
      >
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
