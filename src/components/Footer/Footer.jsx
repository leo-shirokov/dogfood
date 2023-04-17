import Logo from "../Logo/Logo";
import vk from "./img/vk.svg";
import whatsapp from "./img/whatsapp.svg";
import viber from "./img/viber.svg";
import instagram from "./img/instagram.svg";
import telegram from "./img/telegram.svg";
import links from "../../links";

function Footer() {
    return (
        <div className="w-full h-[12.125rem] bg-yellow-300 px-4 py-9 mt-20 md:shrink">
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
                <ul className="grid gap-y-3 md:hidden">
                    {links.slice(0, 4).map((link) => (
                        <li key={link.id}>
                            <a href={link.src}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <ul className="grid gap-y-3 md:hidden">
                    {links.slice(4).map((link) => (
                        <li key={link.id}>
                            <a href={link.src}>{link.name}</a>
                        </li>
                    ))}
                </ul>
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
