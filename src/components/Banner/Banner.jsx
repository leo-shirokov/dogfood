import banner from "./img/Banner.svg";

function Banner() {
    return (
        <div className="w-full relative -top-20 md:-top-10">
            <img src={banner} alt="banner" />
        </div>
    );
}

export default Banner;
