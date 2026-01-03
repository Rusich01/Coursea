import Input from "../../Input/Input";
import eye from "../../../assets/icons/eye.png";
import { useState } from "react";

const MainLogin = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="flex flex-col py-20 px-40 w-2/4">
      <h2 className="text-[42px] leading-[150%] font-normal pb-2.5 ">
        Sign In
      </h2>
      <span className="text-[14px] leading-[200%] font-normal pt-2.5 pb-8">
        New user?
        <a
          href="#"
          className="pl-1 text-[14px] leading-[150%] font-normal text-[#04A4F4]"
        >
          Create an account
        </a>
      </span>

      <div>
        <label>
          <p className="text-[14px] font-normal leading-[150%] pb-2.5">
            Email Address
          </p>
          <Input
            className="border w-full border-gray-100 rounded-lg py-2.5 pl-2 mb-8 focus-visible:border-[#FFBB54] focus-visible:outline-none"
            id="email"
            type="email"
            placeholder="pristia@gmail.com"
          />
        </label>

        <label className="relative">
          <p className="text-[14px] font-normal leading-[150%] pb-2.5">
            Password
          </p>

          <div className="relative w-full max-w-[400px]">
            <img
              src={eye}
              alt="icon"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-[25px] w-[22px] h-[22px] -translate-y-1/2 cursor-pointer"
            ></img>
            <Input
              className="border w-full border-gray-100 rounded-lg py-2.5 pl-2 mb-8 focus-visible:border-[#FFBB54] focus-visible:outline-none"
              id="password"
              type={showPassword ? "password" : "text"}
              placeholder="Input Your Password"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default MainLogin;
