import Back from "../Back/Back";
import { useContext, useMemo, useState } from "react";
import productsContext from "../../context/productsContext";
import { Carousel } from "@mantine/carousel";
import { Rating } from "@mantine/core";

function Reviews() {
    const { allProducts } = useContext(productsContext);
    const [visible, setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 6);
    };

    const reviews = useMemo(
        () =>
            allProducts.reduce((p, prod) => {
                const reviews = prod.reviews.map((r) => ({
                    ...r,
                    prodName: prod.name,
                }));
                return [...p, ...reviews];
            }, []),
        [allProducts]
    );

    return (
        <>
            <Back />
            <h2 className="text-xl font-semibold mb-10">Отзывы</h2>
            <p className="text-sm font-semibold mb-6">
                Фотографии наших покупателей
            </p>
            <Carousel
                align="start"
                slideSize="25%"
                height={80}
                slideGap="md"
                controlsOffset="md"
                controlSize={23}
                draggable={false}
            >
                {allProducts.map((prod) => (
                    <Carousel.Slide
                        key={prod._id}
                        className="flex justify-center items-center"
                        size={100}
                        gap={30}
                    >
                        <img
                            src={prod.pictures}
                            alt={prod.name}
                            className="w-20 rounded-md"
                        ></img>
                    </Carousel.Slide>
                ))}
            </Carousel>

            <div className="flex flex-col justify-start gap-y-5 my-10">
                {reviews.slice(0, visible).map((review) => (
                    <div key={review._id} className="border-t px-2 py-4">
                        <span className="text-md font-semibold">
                            {review.author.name}
                        </span>
                        &nbsp;
                        <span className="text-xs text-gray-600">
                            {new Date(review.created_at).toLocaleDateString(
                                "ru-RU",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </span>
                        <Rating value={review.rating} size="xs" readOnly />
                        <p className="text-xs text-gray-500">
                            {review.prodName}
                        </p>
                        <p>{review.text}</p>
                    </div>
                ))}
                <button onClick={showMoreItems}>Ещё</button>
            </div>
        </>
    );
}

export default Reviews;
