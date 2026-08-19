import { Link, Outlet } from "react-router-dom";

const Menus = [
    { name: "Home", path: "/", active: true },
    { name: "Games", path: "/games", active: false },
    { name: "Ranking", path: "/ranking", active: false },
    { name: "Community", path: "/community", active: false },
    { name: "Creator", path: "/creator", active: false }
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
                                <Link to={menu.path} className={`
                                        text-sm
                                        ${menu.active ? 
                                            `
                                            relative
                                            text-white
                                            after:content-[''] after:absolute after:bg-accent after:rounded-b-full after:size-[5px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-13px] 
                                            `:
                                            `text-muted hover:text-white transition duration-300`
                                        }
                                    `}>
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header-right">
                    
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