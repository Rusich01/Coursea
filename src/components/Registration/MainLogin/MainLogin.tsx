import Input from "../../Input/Input";

const MainLogin = () => {
  return (
    <div className="flex flex-col my-20 mx-auto">
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
            className="border border-gray-100 rounded-lg py-2.5 px-1.5 mb-8 focus-visible:border-[#FFBB54] focus-visible:outline-none"
            id="email"
            type="email"
            placeholder="pristia@gmail.com"
          />
        </label>

        <label>
          <p className="text-[14px] font-normal leading-[150%] pb-2.5">
            Password
          </p>
          <Input
            className="border border-gray-100 rounded-lg py-2.5 px-1.5 mb-8 focus-visible:border-[#FFBB54] focus-visible:outline-none"
            id="password"
            type="password"
            placeholder="Input Your Password"
          />
        </label>
      </div>
    </div>
  );
};

export default MainLogin;
