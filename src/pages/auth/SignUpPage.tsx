import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const SignUpPage = () => {
    return (
        <main className="flex flex-col h-dvh justify-center items-center gap-5">
            <div className="fixed inset-0 pointer-events-none overflow-hidden
            before:content-[''] before:absolute before:w-[650px] before:h-[650px] before:-top-[300px] before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-[radial-gradient(circle,rgba(114,92,255,0.13)_0%,rgba(114,92,255,0.04)_35%,transparent_70%)] before:blur-[15px]
            after:content-[''] after:absolute after:inset-0 after:opacity-[0.22] after:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] after:bg-[size:48px_48px] after:[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
            </div>
            <Link to="/" className="logo flex gap-0.5">
                            <img src={logo} alt="Logo" />
                            <p className="text-2xl font-bold text-white">LU</p>
                            <p className="text-2xl font-bold text-primary-400">MEN</p>
            </Link>
            <form className="flex flex-col border min-w-[450px]  gap-10 rounded-2xl p-10 border-2 border-[#725cff]/30 bg-[#10141d]/80 opacity-90 shadow-[0_0_20px_rgba(114,92,255,0.2),0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="title flex flex-col gap-3">
                    <p className="text-primary-500 text-xs font-black">WELCOME TO</p>
                    <p className="text-3xl font-black"><b>계정을 만들어보세요</b></p>
                    <p className="text-xs text-neutral-500">LUMEN에서 사용할 계정을 만들어주세요.</p>
                </div>
                <ul className="inputs flex flex-col gap-5">
                    <li className="flex flex-col gap-1.5">
                        <p className="text-[10px] text-neutral-300">사용자 이름 (USERNAME)</p>
                        <input type="text" placeholder="사용자 이름을 입력하세요" className="text-xs font-light border p-3.5 rounded-sm border-neutral-900 placeholder:text-neutral-600 w-full transition duration-300 hover:backdrop-brightness-125 focus:border-primary-500"/>
                        <p className="message text-[10px] text-neutral-600 font-light">* 아이디 중복</p>
                    </li>
                    <li className="flex flex-col gap-1.5">
                        <p className="text-[10px] text-neutral-300">이메일 (EMAIL)</p>
                        <input type="text" placeholder="이메일을 입력하세요" className="text-xs font-light border p-3.5 rounded-sm border-neutral-900 placeholder:text-neutral-600 w-full transition duration-300 hover:backdrop-brightness-125 focus:border-primary-500"/>
                    </li>
                    <li className="flex flex-col gap-1.5">
                        <p className="text-[10px] text-neutral-300">비밀번호 (PASSWORD)</p>
                        <input type="text" placeholder="비밀번호를 입력하세요" className="text-xs font-light border p-3.5 rounded-sm border-neutral-900 placeholder:text-neutral-600 w-full transition duration-300 hover:backdrop-brightness-125 focus:border-primary-500"/>

                    </li>
                    <li className="flex flex-col gap-1.5">
                        <p className="text-[10px] text-neutral-300">비밀번호 확인 (PW CONFIRM)</p>
                        <input type="text" placeholder="비밀번호를 다시 입력하세요" className="text-xs font-light border p-3.5 rounded-sm border-neutral-900 placeholder:text-neutral-600 w-full transition duration-300 hover:backdrop-brightness-125 focus:border-primary-500"/>
                    </li>
                    <li className="flex gap-1 items-center">
                        <input type="checkbox"/>
                        <p className="text-[10px] font-extralight text-neutral-300">
                            <Link to="#" className="text-neutral-50 underline">이용약관</Link> 및 <Link to="#" className="text-neutral-50 underline">개인정보처리방침</Link>에 동의합니다.
                        </p>
                    </li>
                    <li>
                        <input type="submit" value="회원가입" className="bg-primary-500 w-full rounded-sm p-3.5 text-[10px] font-bold cursor-pointer transition duration-300 hover:shadow-[0_10px_28px_rgba(114,92,255,.22)] hover:-translate-y-0.5 hover:brightness-110"/>
                    </li>
                    <li className="flex justify-center gap-1">
                        <p className="text-[10px] font-light text-neutral-400">이미 계정이 있으신가요?</p>
                        <Link to="/sign-in" className="text-[10px] text-primary-400 font-bold">로그인</Link>
                    </li>
                </ul>
            </form>
        </main>
    );
}

export default SignUpPage;