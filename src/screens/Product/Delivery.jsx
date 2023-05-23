import track from "./img/Truck.svg";
import quality from "./img/quality.svg";

function Delivery() {
    return (
        <>
            <div className="flex fle-col justify-start items-start gap-4 bg-gray-100 rounded-xl px-5 py-3">
                <div className="w-20">
                    <img src={quality} alt="quality" />
                </div>
                <div>
                    <h2 className="text-md font-semibold">Гарантия качества</h2>
                    <p className="text-sm">
                        Если Вам не понравилось качество нашей продукции, мы
                        вернем деньги, либо сделаем все возможное, чтобы
                        удовлетворить ваши нужды.
                    </p>
                </div>
            </div>
            <div className="flex fle-col justify-start items-start gap-4 bg-gray-100 rounded-xl px-5 py-3">
                <div className="w-8">
                    <img src={track} alt="quality" />
                </div>
                <div>
                    <h2 className="text-md font-semibold">
                        Доставка по всему миру
                    </h2>
                    <br />
                    <div className="text-sm leading-7">
                        <p>Доставка курьером — от 399 ₽</p>
                        <p>Доставка в пункт выдачи — от 199</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Delivery;
