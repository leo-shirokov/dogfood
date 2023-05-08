import Back from "../Back/Back";
import { useContext } from "react";
import productsContext from "../../context/productsContext";
import ProductCard from "../ProductCard/ProductCard";

function Reviews() {
    const { allProducts } = useContext(productsContext);
    console.log(allProducts);
    return (
        <>
            <Back />
            <div className="w-screen flex justify-start gap-x-5 whitespace-normal">
                {allProducts.map((prod) =>
                    prod.reviews.map((review) => (
                        <>
                            <ProductCard key={prod._id} data={prod} />
                            <div className="bg-zinc-100">
                                <p className="">{prod.name}</p>
                                <p>{review.author.name}</p>
                                <p>{review.text}</p>
                            </div>
                        </>
                    ))
                )}
            </div>
        </>
    );
}

export default Reviews;
