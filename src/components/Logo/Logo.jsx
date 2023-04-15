import logo from "./logo.svg";

function Logo() {
    return (
        <a href="/">
            <img src={logo} alt="logo" className="w-30" />
        </a>
    );
}

export default Logo;
