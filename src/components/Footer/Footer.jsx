import React from "react";
import Logo from "../Logo/Logo";
import vk from "./img/vk.svg";
import whatsapp from "./img/whatsapp.svg";
import viber from "./img/viber.svg";
import instagram from "./img/instagram.svg";
import telegram from "./img/telegram.svg";
import { Link } from "react-router-dom";

export const Footer = React.memo(() => {
    return (
        <div className="w-full h-[12.125rem] bg-yellow-300 px-4 py-10 mt-20 md:shrink">
            <div
                className="max-w-[62rem] mx-auto flex justify-between items-center 
            md:justify-center md:text-center"
            >
                <div className="flex flex-col justify-start gap-y-6 md:hidden">
                    <div className="w-40 shrink">
                        <Logo />
                    </div>
                    <p className="text-xs opacity-50">
                        © Интернет-магазин Dogfood.ru&nbsp;
                        <span>{new Date().getFullYear()}</span>
                    </p>
                </div>

                <div className="grid gap-y-3 md:hidden">
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/promotions">Акции</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/reviews">Отзывы</Link>
                </div>
                <div className="grid gap-y-3 md:hidden">
                    <Link to="/payments">Оплата и доставка</Link>
                    <Link to="/faq">Часто спрашивают</Link>
                    <Link to="/feedback">Обратная связь</Link>
                    <Link to="/contacts">Контакты</Link>
                </div>

                <div className="grid gap-y-3">
                    <h3 className="text-lg font-semibold">Мы на связи</h3>
                    <a href="tel:+7999000000">+7(999)123-45-67</a>
                    <a href="mailto:dogfood@gmail.com">dogfood@gmail.com</a>
                    <div className="flex justify-between gap-x-3 opacity-50">
                        <a href="tg://resolve?domain=only_to_top">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=74991234567">
                            <img src={whatsapp} alt="whatsapp" />
                        </a>
                        <a href="viber://chat?number=+79991234567">
                            <img src={viber} alt="viber" />
                        </a>
                        <a href="https://www.instagram.com/dogfoof">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="https://vk.me/dogfood">
                            <img src={vk} alt="vk" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Footer;
