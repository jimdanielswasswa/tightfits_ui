import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "./productsSlice";
import { BASE_IMAGE_URL } from "../../App";

const Product = ({ id }) => {
    const product = useSelector((state) => selectProductById(state, id));
    return (<div className="col-md-3" key={product.id}>
        <Link to={`/products/${product.id}`} className="nav-link fw-light text-center">
            <div className="card">
                <img src={`${BASE_IMAGE_URL}/${product.image}`} className="img-fluid card-image-top" alt={`${BASE_IMAGE_URL}/${product.image}`} />
                <div className="card-body details bg-body opacity-75 text-white d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-start py-1">{product.name}</div>
                    <div className="d-flex justify-content-end">${product.price / 100}</div>
                </div>
            </div>
        </Link>
    </div>);
};

export default Product;