import { useState } from "react";
import banner from "./img/Banner.svg";

function Banner({ index }) {
    const [banners] = useState([banner]);

    return (
        <div className="w-full relative -top-20 md:-top-10">
            <img className="" src={banners[index]} alt="banner" />
        </div>
    );
}

export default Banner;
