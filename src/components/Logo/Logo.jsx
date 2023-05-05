import logoDog from "./img/logo-dog.svg";
import logoText from "./img/logo-text.svg";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="flex justify-between items-center flex-nowrap max-w-44 gap-x-4">
            <Link to="/">
                <img src={logoDog} alt="logo" />
            </Link>
            <Link className="md:hidden" to="/">
                <img src={logoText} alt="logo" />
            </Link>
        </div>
    );
}

export default Logo;
