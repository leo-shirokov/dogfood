import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../api";
import { useState, useEffect } from "react";

function Product() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

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
            <span className="cursor-pointer" onClick={() => navigate(-1)}>
                назад
            </span>
            <div>{product?.name}</div>
        </>
    );
}

export default Product;
