import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { selectCartBySessionId, selectCartTotalBySessionId } from "./cartSlice";

const Cart = ({ match }) => {
    debugger
    const sessionId = (match.params.sessionId) ? match.params.sessionId : 0;
    const shoppingCart = useSelector((state) => (selectCartBySessionId(state, sessionId)));
    const cartTotal = useSelector((state) => (selectCartTotalBySessionId(state, sessionId)));
    return (<main>
        <div className="row">
            <div className="col-md-8">
                <h3>Billing Address</h3>
                <div className=""></div>
            </div>
            <div className="col-md-4">
                <h4 className="d-flex justify-content-between align-items-center">
                    <span className="">Items</span>
                    <span className="badge badge-pill bg-primary rounded-pill">{shoppingCart.length}</span>
                </h4>
                <ul className="list-group mb-4">
                    {shoppingCart.map((item) => (<li className="list-group-item" key={item.product}>
                        <CartItem id={item.product} quantity={item.quantity} key={item.product} />
                    </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Grand Total</span>
                    <span>{`$ ${cartTotal / 100}`}</span>
                    </li>
                </ul>
            </div>
        </div>
    </main>)
}

export default Cart;