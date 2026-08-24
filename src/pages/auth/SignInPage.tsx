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
      </section>
      <section className="section-right"></section>
    </main>
  );
}

export default SignInPage;