import { useState } from "react";
import CheckOtpForm from "../components/routes/auth/CheckOtpForm";
import SendOtpForm from "../components/routes/auth/SendOtpForm";

const AuthPage = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div className="px-5 min-h-[calc(100vh-70px)] flex justify-center items-center">
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOtpForm
          mobile={mobile}
          code={code}
          setCode={setCode}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default AuthPage;
