import background from "../../assets/auth4.png";
import logo from "../../assets/logo.svg";
const SignInPage = () => {
  return (
    <main>
      <img src={background} className="background absolute top-0 left-0 w-full h-dvh bg-cover -z-10"/>
      <section className="section-left flex items-start p-9">
        <a href="/" className="logo flex rounded-xl p-5 gap-1 bg-[radial-gradient(#000000bd_0%,transparent_80%)]">
          <img src={logo} alt="Logo" className="w-[40px]"/>
          <p className="text-3xl font-bold text-white">LU</p>
          <p className="text-3xl font-bold text-primary-400">MEN</p>
        </a>
        <div className="text flex flex-col absolute justify-center items-center top-[60%] left-[15%] bg-[#10141de1] py-5 px-10 rounded-xl shadow-[0_0_20px_rgba(114,92,255,0.2),0_10px_30px_rgba(0,0,0,0.6)] border border-[#725cff]/30 bg-[#10141d]/80">
          <p className="">어, 혹시 우리</p>
          <p className="text-primary-400"><b>어디서 만난 적 있나요?</b></p>
          <div className="triangle"></div>
        </div>
      </section>
      <section className="section-right"></section>
    </main>
  );
}

export default SignInPage;