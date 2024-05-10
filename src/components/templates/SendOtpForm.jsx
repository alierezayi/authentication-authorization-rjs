import { sendOtp } from "@/services/auth";
import { useState } from "react";
import useFormValidation from "../../hooks/useValidation";
import toast from "react-hot-toast";

function SendOtpForm({ setStep, mobile, setMobile }) {
  const [isLoading, setIsLoading] = useState(false);

  const { isValidate } = useFormValidation(mobile, 11);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isValidate) return;
    setIsLoading(true);
    const { response, error } = await sendOtp(mobile);
    if (response) {
      setStep(2);
      console.log("کد تایید با موفقیت ارسال شد.");
      toast.success("کد تایید با موفقیت ارسال شد.");
    }
    if (error) toast.error("عملیات با شکست مواجه شد.");
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full md:w-[500px] flex flex-col border border-gray-300 p-8 rounded-md"
    >
      <p className="mb-5 text-lg font-normal">ورود به حساب کاربری</p>
      <div className="text-xs text-gray-600 mb-5">
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد.
      </div>
      <label htmlFor="input" className="text-sm">
        شماره موبایل خود را وارد کنید
      </label>
      <input
        id="input"
        type="number"
        placeholder="شماره موبایل"
        className="border border-gray-300 p-2.5 rounded-md text-sm mt-2 mb-5 outline-none"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button
        type="submit"
        disabled={!isValidate || isLoading}
        className="w-fit py-2.5 px-4 bg-red-700 text-white rounded-md text-sm hover:bg-red-800 transition disabled:opacity-70 disabled:bg-red-700"
      >
        {isLoading ? "در حال ارسال . . ." : "ارسال کد تایید"}
      </button>
    </form>
  );
}

export default SendOtpForm;
