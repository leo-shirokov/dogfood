import Logo from "../Logo/Logo";
import iconLike from "./img/favorites.svg";
import iconCart from "./img/cart.svg";
import iconDog from "./img/dog.svg";
import { Search } from "../Search/Search";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import productsContext from "../../context/productsContext";
import { Badge } from "@mantine/core";
import HeaderIndex from "./HeaderIndex";
import BurgerMenu from "../Burger/BurgerMenu";

function Header() {
    const { favourites } = useContext(productsContext);
    const location = useLocation();
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        const setVisibility = (e) => {
            if (window.innerWidth < 768) setHidden(true);
            else setHidden(false);
        };
        setVisibility();
        window.addEventListener("resize", setVisibility);
    }, []);

    return (
        <>
            <div className="w-full h-20 bg-yellow-300 flex justify-between items-center gap-x-8 px-4 py-10">
                <div className="md:w-10">
                    <Logo />
                </div>
                {/* поле поиска */}
                <div className="grow">
                    {["/", "/catalog"].includes(location.pathname) && (
                        <Search />
                    )}
                </div>

                <div className="flex gap-x-10 justify-between items-center">
                    {/* влючение меню бургер на мобильных устройствах */}
                    {hidden ? (
                        <BurgerMenu />
                    ) : (
                        <>
                            {/* меню в header на больших экранах */}
                            <Link to="/favorite" className="relative">
                                {" "}
                                <img
                                    className="w-6"
                                    src={iconLike}
                                    alt="favorite"
                                />
                                <Badge
                                    color="green"
                                    size="xs"
                                    variant="filled"
                                    className="absolute -top-2 left-4 border border-yellow-300"
                                >
                                    {favourites.length}
                                </Badge>
                            </Link>
                            <Link to="/">
                                <img
                                    className="w-6"
                                    src={iconCart}
                                    alt="cart"
                                />
                            </Link>
                            <Link to="/">
                                <img className="w-6" src={iconDog} alt="dog" />
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {location.pathname === "/" && <HeaderIndex />}
        </>
    );
}

export default Header;
