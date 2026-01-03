import mainLogo from "../../../assets/main/Bitmap.svg";
import Logo from "../../Logo/Logo";

const MainImg = () => {
  return (
    <section className="relative min-h-screen w-2/4">
      <img
        src={mainLogo}
        alt="main background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative mt-60 flex min-h-screen items-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-xl text-white">
          <Logo />

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] leading-snug">
            Improve your skill with <br />
            Coursea!
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est,
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainImg;
