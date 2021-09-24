import { useSelector } from "react-redux";
import Product from '../products/Product';
import { selectWishListItemsBySessionId } from "./wishListSlice";

const WishList = ({ match }) => {
    debugger
    const { sessionId } = match.params;
    const wishListItems = useSelector((state) => (selectWishListItemsBySessionId(state, sessionId)));
    return (<main>
        <div className="row">
            {wishListItems.map((wishListItem) => (
                <Product id={wishListItem.product} key={wishListItem.product} />
            ))}
        </div>
    </main>)
};

export default WishList;