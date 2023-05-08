import { useState } from "react";
import banner from "./img/Banner.svg";

function Banner({ index }) {
    const [banners] = useState([banner]);

    return (
        <div className="w-4/6 mx-auto relative -top-10 md:-top-0 md:w-11/12 lg:w-3/4">
            <img className="" src={banners[index]} alt="banner" />
        </div>
    );
}

export default Banner;
