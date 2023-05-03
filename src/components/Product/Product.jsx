import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../api";
import { useState, useEffect } from "react";

function Product() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        (async () => {
            try {
                setProduct(await getProductByID(id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
        <>
            <Link to="/">
                <span>назад</span>
            </Link>
            <div>{product?.name}</div>
        </>
    );
}

export default Product;
