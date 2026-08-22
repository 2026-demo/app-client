import { NavLink, Outlet } from "react-router-dom";

const Menus = [
    { name: "Home", path: "/", },
    { name: "Games", path: "/games" },
    { name: "Ranking", path: "/ranking" },
    { name: "Community", path: "/community" },
    { name: "Creator", path: "/creator" }
]

const BasicLayout = () => {
    return (
        <>
            <header className="container h-20 flex items-center">
                <div className="header-left flex gap-12">
                    <div className="flex gap-1">
                        <p className="text-xl font-bold text-white">DEMO</p>
                        <p className="text-xl font-bold text-accent-light">NAMES</p>
                    </div>
                    <ul className="menu flex gap-7">
                        {Menus.map((menu) => (
                            <li>
                                <NavLink to={menu.path} className={({isActive})=>`
                                        text-sm
                                        ${isActive ? 
                                            `
                                            relative
                                            text-white
                                            after:content-[''] after:absolute after:bg-accent after:rounded-b-full after:size-[5px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-13px] 
                                            `:
                                            `text-muted hover:text-white transition duration-300`
                                        }
                                    `}>
                                    {menu.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header-right">
                    <div className="search flex gap-1">
                        <div className="search-icon ">⌕</div>
                        <input type="text" placeholder="게임, 장르 또는 크리에이터 검색" />
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
}

export default BasicLayout;