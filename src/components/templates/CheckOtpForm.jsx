import { useNavigate } from "react-router-dom";
import { checkOtp } from "@/services/auth";
import { setCookie } from "../../utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const navigate = useNavigate();

  const { refetch } = useQuery(["profile"], getProfile);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      setCookie(response.data);

      navigate("/");

      refetch();

      console.log(response.data.message);
    }

    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>تایید کد اس ام اس شده</p>
      <div>کد پیامک شده به شماره «{mobile}» را وارد کنید.</div>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        id="input"
        type="text"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button type="button" onClick={() => setStep(1)}>
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
