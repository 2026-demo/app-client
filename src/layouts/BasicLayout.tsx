import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";

const Menus = [
    { name: "홈", path: "/", },
    { name: "게임", path: "/games" },
    { name: "랭킹", path: "/ranking" },
    { name: "커뮤니티", path: "/community" },
    { name: "크리에이터", path: "/creator" }
]

const BasicLayout = () => {
    return (
        <>
            <header className="flex justify-center items-center h-20 border-b border-neutral-950">
                <div className="inner container flex items-center justify-between">
                    <div className="header-left flex gap-12">
                        <Link to="/" className="logo flex gap-1">
                            <img src={logo} alt="Logo" />
                            <p className="text-xl font-bold text-white">LU</p>
                            <p className="text-xl font-bold text-primary-400">MEN</p>
                        </Link>
                        <ul className="menu flex gap-7">
                            {Menus.map((menu) => (
                                <li>
                                    <NavLink to={menu.path} className={({isActive})=>`
                                            text-sm
                                            ${isActive ? 
                                                `
                                                relative
                                                text-neutral-50
                                                after:content-[''] after:absolute after:bg-primary-500 after:rounded-full after:size-[5px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-15px] 
                                                `:
                                                `text-neutral-600 hover:text-neutral-50 transition duration-300`
                                            }
                                        `}>
                                        {menu.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="header-right flex items-center gap-2.5">
                        <div className="search flex border transition w-[245px] h-[38px] items-center gap-2.5 px-4 border-neutral-900  bg-neutral-950 rounded-sm duration-300 hover:border-primary-500 focus-within:border-primary-500">
                            <div className="search-icon text-sm text-neutral-600">⌕</div>
                            <input className="search-input w-full  text-neutral-50 placeholder:text-neutral-600 text-xs" type="text" placeholder="게임, 장르 또는 크리에이터 검색" />
                        </div>
                        <button className="notification flex border transition w-[38px] h-[38px] text-base items-center justify-center rounded-sm text-neutral-400 bg-neutral-950 border-neutral-900 duration-200 hover:brightness-150">
                            🕭
                        </button>
                        {/* <div className="profile flex items-center px-2">
                            <img className="border cursor-pointer w-[32px] h-[32px] border-neutral-900 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
                        </div> */}
                        <Link to="/sign-in" className="text-sm">로그인</Link>
                    </div>
                </div>
            </header>
            <Outlet />
            <footer></footer>
        </>
    );
}

export default BasicLayout;