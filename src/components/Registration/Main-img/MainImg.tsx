import mainLogo from "../../../assets/main/Bitmap.svg";
import Logo from "../../Logo/Logo";

const MainImg = () => {
  return (
    <>
      <div>
        <img className="max-w-full relative" src={mainLogo} alt="main logo" />
      </div>
      <div className=" absolute top-[520px] left-[70px] w-[590px] text-[#FFFFFF]">
        <Logo />
        <h1 className="font-sans font-normal text-[42px] leading-[150%]">
          Improve your skill with <br />
          Coursea!
        </h1>
        <p className="font-normal text-[16px] leading-[150%]">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est,
        </p>
      </div>
    </>
  );
};

export default MainImg;
