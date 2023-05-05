import Logo from "../Logo/Logo";
import iconLike from "./img/favorites.svg";
import iconCart from "./img/cart.svg";
import iconDog from "./img/dog.svg";
import iconMenu from "./img/menu.svg";
import { Search } from "../Search/Search";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <div className="w-full h-[41.1563rem] bg-yellow-300 px-4 py-9 flex flex-col gap-y-28">
            <div className="flex justify-between items-center gap-x-8">
                <Logo />
                <div className="grow">
                    {location.pathname === "/" && <Search />}
                </div>
                <div className="flex gap-x-10 justify-between items-center">
                    <Link to="/favorite">
                        {" "}
                        <img
                            className="w-6 md:hidden"
                            src={iconLike}
                            alt="favorite"
                        />
                    </Link>
                    <img className="w-6 md:hidden" src={iconCart} alt="cart" />
                    <img className="w-6 md:hidden" src={iconDog} alt="dog" />
                    <img
                        className="w-12 hidden md:block"
                        src={iconMenu}
                        alt="menu"
                    />
                </div>
            </div>
            <div className="w-4/5 mx-auto flex flex-col">
                <h1 className="text-4xl font-extrabold mb-5 shrink">
                    Крафтовые <br /> лакомства для <br /> собак
                </h1>
                <p className="font-extralight mb-10 shrink">
                    Всегда свежие лакомства ручной <br /> работы с доставкой по
                    России и Миру
                </p>
                <button className="w-40 shrink rounded-[3.75rem] bg-white px-7 py-4 shadow-md font-bold">
                    Каталог
                </button>
            </div>
        </div>
    );
}

export default Header;
