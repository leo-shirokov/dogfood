import React from "react";
import banner2 from "./img/Banner-2.svg";
import banner3 from "./img/Banner-3.svg";
import banner4 from "./img/Banner-4.svg";
import banner5 from "./img/Banner-5.svg";

const banners = [banner2, banner3, banner4, banner5];

function TwoBanners({ banIndex1, banIndex2 }) {
    return (
        <div className="w-full flex justify-between gap-3 mt-10 lg:justify-center">
            <img
                className="object-contain w-1/2"
                src={banners[banIndex1]}
                alt="banner 1"
            />
            <img
                className="object-contain w-1/2 lg:hidden"
                src={banners[banIndex2]}
                alt="banner 2"
            />
        </div>
    );
}

export default TwoBanners;
