import { useSelector } from "react-redux";
import { selectProductById } from "../products/productsSlice";

const CartItem = ({ id, quantity }) => {
    debugger
    const product = useSelector((state) => (selectProductById(state, id)));

    return (<div className="card opacity-50">
        {/* <img src={`${BASE_IMAGE_URL}/${product.image}`} className="img-fluid card-image-top" alt={`${BASE_IMAGE_URL}/${product.image}`} /> */}
        <div className="card-body bg-body text-white d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between">                
            <div className="py-1">{product.name}</div>
            <div className="py-1">${product.price / 100}</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span>Quantity</span>
                <div className="py-1">{quantity}</div>
            </div>
        </div>
    </div>)
};

export default CartItem;