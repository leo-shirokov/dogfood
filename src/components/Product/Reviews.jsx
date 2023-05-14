import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { Rating } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";
import { deleteReviewById, addReviewById } from "../../api";
import productsContext from "../../context/productsContext";

function Reviews({
    product,
    loadProduct,
    textarea,
    setTextarea,
    rating,
    setRating,
}) {
    const { userId } = useContext(productsContext);

    // обработчик кнопки "Добавить отзыв". Добавляет отзыв в API;
    // снова вызывает ф-цию загрузки продукта чтобы обновить инфо о продукте
    const addReview = async () => {
        await addReviewById(product._id, textarea, rating);
        loadProduct();
        setTextarea("");
        setRating(5);
    };

    const deleteReview = async (reviewId) => {
        await deleteReviewById(product._id, reviewId);
        loadProduct();
    };

    return (
        <>
            <h3 id="reviews" className="text-xl font-semibold mb-8">
                Отзывы
            </h3>

            {/* создание нового отзыва */}
            <details className="mb-10">
                <summary className="text-md font-semibold cursor-pointer mb-2">
                    Оставить отзыв
                </summary>
                <div className="flex flex-col gap-y-4 mb-4">
                    <Textarea
                        placeholder="Введите текст"
                        label="Новый отзыв"
                        withAsterisk
                        autosize
                        minRows={2}
                        value={textarea}
                        onChange={(e) => setTextarea(e.currentTarget.value)}
                    />
                    <div className="flex justify-start gap-x-5 items-center">
                        <span className="text-sm font-semibold">
                            Оцените товар:
                        </span>
                        <span>
                            <Rating value={rating} onChange={setRating} />
                        </span>
                    </div>
                </div>
                <Button
                    className="hover:text-gray-600 transition-all"
                    type="button"
                    onClick={addReview}
                    variant="outline"
                    color="gray"
                    compact
                >
                    Отправить
                </Button>
            </details>

            {/* отображение отзывов по товару */}
            {product?.reviews?.length > 0 && (
                <>
                    {product.reviews.map((review) => (
                        <div key={review._id} className="border-t py-2">
                            <span className="font-semibold">
                                {review.author.name}&nbsp;
                            </span>
                            <span className="font-normal text-xs text-gray-500">
                                {new Date(review.created_at).toLocaleDateString(
                                    "ru-RU",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </span>
                            <Rating
                                className="mb-2"
                                value={review.rating}
                                size="xs"
                                readOnly
                            />
                            <div className="flex justify-between">
                                <span className="mb-2">{review.text}</span>
                                {review.author._id === userId && (
                                    <span>
                                        <BsTrash
                                            className="cursor-pointer text-lg text-gray-500"
                                            onClick={() =>
                                                deleteReview(review._id)
                                            }
                                        />
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default Reviews;
