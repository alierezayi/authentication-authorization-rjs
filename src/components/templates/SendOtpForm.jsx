import { sendOtp } from "../../services/auth";

function SendOtpForm({ setStep, mobile, setMobile }) {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (mobile.length !== 11) return;

    console.log(mobile);
    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);

    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <div>
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد.
      </div>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        id="input"
        type="text"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 p-1">
        ارسال
      </button>
    </form>
  );
}

export default SendOtpForm;
