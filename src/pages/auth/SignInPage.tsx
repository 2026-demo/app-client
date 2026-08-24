import background from "../../assets/back.png";
import logo from "../../assets/logo.svg";
import { motion } from "motion/react";

const SignInPage = () => {
  return (
    <main className="grid grid-cols-2 grid-rows-1">
      <img src={background} className="background absolute top-0 left-0 h-dvh bg-size-[100%] -z-10" />
      <section className="section-left flex items-start p-9">
        <a href="/" className="logo flex rounded-xl p-5 gap-1 bg-[radial-gradient(#000000bd_0%,transparent_80%)]">
          <img src={logo} alt="Logo" className="w-[40px]" />
          <p className="text-3xl font-bold text-white">LU</p>
          <p className="text-3xl font-bold text-primary-400">MEN</p>
        </a>
        <motion.div className="absolute flex flex-col items-center justify-center absolute top-[35%] left-[12%] px-10 py-6 rounded-xl border border-[#725cff]/30 bg-[#10141d]/80 opacity-90 shadow-[0_0_20px_rgba(114,92,255,0.2),0_10px_30px_rgba(0,0,0,0.6)]
      after:content-[''] after:absolute after:left-1/4 after:-bottom-[13px] after:-translate-x-1/2 after:w-0 after:h-0 after:border-l-[14px] after:border-r-[14px] after:border-t-[14px] after:border-l-transparent after:border-r-transparent after:border-t-[#725cff]/30
      before:content-[''] before:absolute before:left-1/4 before:-bottom-[11px] before:-translate-x-1/2 before:w-0 before:h-0 before:z-10 before:border-l-[12px] before:border-r-[12px] before:border-t-[12px] before:border-l-transparent before:border-r-transparent before:border-t-[#10141d]"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <p>어, 혹시 우리</p>
          <p className="text-primary-400">
            <b>어디서 만난 적 있나요?</b>
          </p>
        </motion.div>
      </section>
      <section className="section-right">
        <form>
          
        </form>
      </section>
    </main>
  );
}

export default SignInPage;