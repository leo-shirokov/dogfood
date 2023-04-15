import logo from "./logo.svg";

function Logo() {
    return (
        <a href="/">
            <img src={logo} alt="logo" className="w-30 md:w-15" />
        </a>
    );
}

export default Logo;
