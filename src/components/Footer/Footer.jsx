import Logo from "../Logo/Logo";
import vk from "./img/vk.svg";
import whatsapp from "./img/whatsapp.svg";
import viber from "./img/viber.svg";
import instagram from "./img/instagram.svg";
import telegram from "./img/telegram.svg";

function Footer() {
    return (
        <div className="w-full h-[12.125rem] bg-yellow-300 px-4 py-9 md:shrink">
            <div
                className="max-w-[62rem] mx-auto flex justify-between items-center 
            md:justify-center md:text-center"
            >
                <div className="grid gap-y-6 md:hidden">
                    <div className="w-62 shrink">
                        <Logo />
                    </div>
                    <p className="text-xs opacity-50">
                        © "Интернет-магазин Dogfood.ru"
                    </p>
                </div>
                <div className="grid gap-y-3 md:hidden">
                    <a href="/">Каталог</a>
                    <a href="/">Акции</a>
                    <a href="/">Новости</a>
                    <a href="/">Отзывы</a>
                </div>
                <div className="grid gap-y-3 md:hidden">
                    <a href="/">Оплата и доставка</a>
                    <a href="/">Часто спрашивают</a>
                    <a href="/">Обратная связь</a>
                    <a href="/">Контакты</a>
                </div>
                <div className="grid gap-y-3">
                    <h3>Мы на связи</h3>
                    <a href="tel:+7999000000">8(999)123-45-67</a>
                    <a href="mailto:dogfood@gmail.com">dogfood@gmail.com</a>
                    <div className="flex justify-between gap-x-3 opacity-50">
                        <img src={telegram} alt="telegram" />
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={viber} alt="viber" />
                        <img src={instagram} alt="instagram" />
                        <img src={vk} alt="vk" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
