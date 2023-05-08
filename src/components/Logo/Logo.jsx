import logoDog from "./img/logo-dog.svg";
import logoText from "./img/logo-text.svg";
import { Link, useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();
    return (
        <div
            className="flex justify-between items-center flex-nowrap max-w-44 gap-x-4"
            onClick={() => navigate(0)}
        >
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
