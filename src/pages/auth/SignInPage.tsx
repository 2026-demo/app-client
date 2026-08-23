import React, { useState } from "react";
import my from "../../assets/signin.png";
import logo from "../../assets/logo.svg";

const SignInPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-neutral-50)] flex items-center justify-center overflow-hidden font-sans">
      
      {/* 1. 배경 은은한 오로라 광원 */}
      <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(114,92,255,0.12)_0%,rgba(7,9,14,0)_70%)] pointer-events-none z-0" />

      {/* 메인 레이아웃 컨테이너 */}
      <div className="relative z-10 w-full max-w-[1000px] px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* =========================================================
            LEFT: 모닥불 캐릭터 & 보라색 불빛 광원 + 질문 말풍선
        ========================================================= */}
        <div className="relative flex flex-col items-center select-none">
          
          {/* 캐릭터 상단 질문 말풍선 */}
          <div className="relative bg-[var(--color-surface-bg)] border border-[var(--color-line)] rounded-2xl px-5 py-4 mb-6 shadow-2xl backdrop-blur-md animate-bounce-slow text-center min-w-[240px]">
            <p className="text-sm font-semibold text-[var(--color-neutral-100)] leading-relaxed">
              "어, 혹시 우리 <br />
              <span className="text-[var(--color-primary-400)] font-bold">어디서 만난 적 있나요?</span>"
            </p>

            {/* 말풍선 아래 꼬리 */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[var(--color-surface-bg)]" />
          </div>

          {/* 모닥불 캐릭터 이미지 & 보라색 불빛 광원 레이어 */}
          <div className="relative flex items-center justify-center">
            {/* 💜 보라색 모닥불 일렁이는 빛 효과 (이미지 뒤에 위치) */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(145,129,255,0.45)_0%,rgba(114,92,255,0.2)_40%,rgba(7,9,14,0)_70%)] blur-2xl mix-blend-screen pointer-events-none animate-flicker-purple" />
            
            {/* 제공받은 캐릭터 이미지 */}
            <img 
              src={my} 
              alt="보라색 모닥불 캐릭터" 
              className="relative z-10 w-80 md:w-96 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
            />
          </div>
        </div>

        {/* =========================================================
            RIGHT: 대답 선택 & 로그인/회원가입 폼
        ========================================================= */}
        <div className="w-full max-w-[420px] bg-[var(--color-surface-bg)] border border-[var(--color-line)] rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative">
          
          {/* 서비스 로고 */}
          <div className="mb-8 flex items-center gap-2">
            <img src={logo} alt="LOGO" className=" object-contain absolute w-20 top-[220px] left-[-270px]" />
          </div>

          {/* 입력 폼 */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-[var(--color-neutral-500)] uppercase tracking-wider mb-1.5">
                아이디 (ID)
              </label>
              <input
                type="text"
                placeholder="아이디를 입력하세요"
                className="w-full h-11 bg-white/[0.035] border border-[var(--color-line)] rounded-xl px-4 text-sm text-[var(--color-neutral-50)] placeholder-[var(--color-neutral-600)] outline-none focus:border-[var(--color-primary-500)] focus:bg-white/[0.055] focus:shadow-[0_0_15px_rgba(114,92,255,0.2)] transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[var(--color-neutral-500)] uppercase tracking-wider mb-1.5">
                비밀번호 (PASSWORD)
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="w-full h-11 bg-white/[0.035] border border-[var(--color-line)] rounded-xl px-4 text-sm text-[var(--color-neutral-50)] placeholder-[var(--color-neutral-600)] outline-none focus:border-[var(--color-primary-500)] focus:bg-white/[0.055] focus:shadow-[0_0_15px_rgba(114,92,255,0.2)] transition-all"
              />
            </div>

            {/* 대답형 선택 버튼 그룹 */}
            <div className="pt-4 flex gap-3">
              <button
                type="submit"
                className="flex-1 h-11 rounded-xl bg-[var(--color-neutral-50)] text-[#11131a] font-bold text-xs hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(114,92,255,0.25)] transition-all"
              >
                "네, 구면이에요"
              </button>
              <button
                type="button"
                onClick={() => setIsLoginView(!isLoginView)}
                className="flex-1 h-11 rounded-xl bg-white/[0.055] border border-[var(--color-line)] text-[var(--color-neutral-50)] font-bold text-xs hover:-translate-y-0.5 hover:bg-white/[0.1] transition-all"
              >
                "처음 뵙겠습니다"
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
};

export default SignInPage;