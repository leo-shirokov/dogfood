import logoDog from "./img/logo-dog.svg";
import logoText from "./img/logo-text.svg";

function Logo() {
    return (
        <div className="flex justify-between items-center flex-nowrap max-w-44 gap-x-4">
            <a href="/">
                <img src={logoDog} alt="logo" />
            </a>
            <a className="md:hidden" href="/">
                <img src={logoText} alt="logo" />
            </a>
        </div>
    );
}

export default Logo;
