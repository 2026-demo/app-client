import { Eye, EyeOff, Lock, UserRound } from "lucide-react";
import background from "../../assets/back2.png";
import logo from "../../assets/logo.svg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord, FaGithub } from "react-icons/fa";

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
        <motion.div className="absolute flex flex-col items-center justify-center absolute top-[35%] left-[16%] px-10 py-6 rounded-2xl border border-[#725cff]/30 bg-[#10141d]/80 opacity-90 shadow-[0_0_20px_rgba(114,92,255,0.2),0_10px_30px_rgba(0,0,0,0.6)]
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
      <section className="section-right flex justify-center items-center h-dvh">
        <form className="flex w-min[550px] flex-col border  gap-10 rounded-2xl p-10 border-2 border-[#725cff]/30 bg-[#10141d]/80 opacity-90 shadow-[0_0_20px_rgba(114,92,255,0.2),0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="title flex flex-col gap-2.5">
            <p className="text-primary-500 text-sm tracking-widest"><b>WELCOME TO</b></p>
            <div className="logo flex gap-2">
              <p className="text-4xl "><b>LU</b></p>
              <p className="text-4xl text-primary-500"><b>MEN</b></p>
            </div>
            <p className="text-neutral-500">게임 플레이하고, 연결하고, 함께 하세요.</p>
          </div>
          <ul className="inputs flex flex-col gap-6.5">
            <li className="flex flex-col gap-2.5">
              <p className="text-xs text-neutral-300">사용자 이름 (USERNAME)</p>
              <div className="flex border-2 border-neutral-900  bg-neutral-950 rounded-xl transition duration-300 hover:border-primary-500 focus-within:border-primary-500">
                <UserRound size={20} className="m-4 text-neutral-600" />
                <input type="text" placeholder="사용자 이름을 입력하세요" className="text-sm placeholder:text-neutral-400" />
              </div>
            </li>
            <li className="flex flex-col gap-2.5">
              <p className="text-xs text-neutral-300">비밀번호 (PASSWORD)</p>
              <div className="flex border-2 items-center w-full border-neutral-900  bg-neutral-950 rounded-xl transition duration-300 hover:border-primary-500 focus-within:border-primary-500">
                <Lock size={20} className="m-4 text-neutral-600" />
                <input type="password" placeholder="비밀번호를 입력하세요" className="text-sm w-full placeholder:text-neutral-400" />
                <input type="checkbox" id="password-hidden" className="peer hidden"/>
                <label htmlFor="password-hidden" className="peer-checked:[&>:first-child]:hidden peer-checked:[&>:last-child]:block">
                  <EyeOff size={20} className="m-4 text-neutral-600 cursor-pointer"/>
                  <Eye size={20} className="m-4 text-neutral-600 cursor-pointer hidden"/>
                </label>
              </div>
            </li>
            <li className="grid grid-cols-2 gap-5 mt-2">
              <input type="submit" value="로그인" className="cursor-pointer p-4 bg-primary-500 rounded-xl transition duration-300 hover:brightness-80" />
              <Link to="/sign-up" className="flex p-4 border-2 justify-center items-center rounded-xl border-neutral-900 text-neutral-50 transition duration-300 hover:brightness-80">처음 방문하셨나요?</Link>
            </li>
          </ul>
          <div className="other flex flex-col gap-6">
            <div className="text flex justify-between items-center">
              <hr className="w-full text-neutral-800"/>
                <p className="text-sm text-neutral-400 whitespace-nowrap px-8">다른 방법으로 로그인</p>
              <hr className="w-full text-neutral-800" />
            </div>
            <ul className="oauth flex items-center justify-between gap-3.5">
              <li className="flex items-center gap-3 border border-neutral-900 rounded-xl py-4 px-7 cursor-pointer transition duration-300 hover:brightness-80">
                <FcGoogle size={24}/><p className="text-neutral-400">Google</p>
              </li>
              <li className="flex items-center gap-3 border border-neutral-900 rounded-xl py-4 px-7 cursor-pointer transition duration-300 hover:brightness-80">
                <FaDiscord color="#5865F2" size={24}/><p className="text-neutral-400">Discord</p>
              </li>
              <li className="flex items-center gap-3 border border-neutral-900 rounded-xl py-4 px-7 cursor-pointer transition duration-300 hover:brightness-80">
                <FaGithub size={24}/><p className="text-neutral-400">Github</p>
              </li>
              
            </ul>
          </div>
        </form>
      </section>
    </main>
  );
}

export default SignInPage;