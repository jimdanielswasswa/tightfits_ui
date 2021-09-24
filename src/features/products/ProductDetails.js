import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './ProductDetails.css';
import { selectProductById } from "./productsSlice";
import { selectImagesById } from "../images/ImagesSlice";
import AppCarousel from "../../components/AppCarousel/AppCarousel";
import { selectAllCategories } from "../categories/categorySlice";
import { BASE_IMAGE_URL } from '../../App';
import { cartItemAdded } from "../cart/cartSlice";
import { wishListItemAdded } from "../wishList/wishListSlice";

const ProductDetails = ({ match }) => {
    const { id } = match.params;
    const dispatch = useDispatch();
    const product = useSelector((state) => selectProductById(state, id));
    let images = useSelector((state) => selectImagesById(state, id));
    const categories = useSelector(selectAllCategories);
    const [ itemQuantity, setItemQuantity ] = useState(1);
    if (product && product.image) {
        images = [{ id: 0, image: product.image }, ...images];
    }
    const addToCart = () => {
        dispatch(cartItemAdded({ user_session_id: 0, product: product.id, quantity: itemQuantity, amount: (product.price * itemQuantity) }));
    }
    const addToWishList = () => {
        dispatch(wishListItemAdded({ user_session_id: 0, product: product.id, quantity: itemQuantity }));
    }
    return (<main className="pt-4">
        <div className="row pb-5 bg-light">
            <div className="col-md-8">
                <AppCarousel images={images} />
            </div>
            <div className="col-md-4 border">
                <div className="jumbotron">
                    <div className="text-black fs-1 fw-light">{product.name}</div>
                    <div className="">${product.price / 100}</div>
                    {/* <div className="text-muted py-2">{ product.description }</div> */}
                    <div className="py-2 border-top">

                        <div role="group" className="btn-group d-flex justify-content-start align-items-center">
                            <button type="button" className="btn btn-light border" onClick={() => (setItemQuantity((((itemQuantity - 1) > 0) ? (itemQuantity - 1) : 1)))}>
                                -
                            </button>
                            <input type="text" className="form-control-sm" value={itemQuantity} onChange={(e) => setItemQuantity((Number(e.target.value) || 1))} />
                            <button type="button" className="btn btn-light border" onClick={() => (setItemQuantity((itemQuantity + 1)))}>
                                +
                            </button>
                            <button type="button" className="btn btn-success text-uppercase mx-2" onClick={addToCart}><i className="fa fa-plus"></i> <i className="fa fa-shopping-cart"></i></button>
                            <button type="button" className="btn btn-primary text-uppercase mx-2" onClick={addToWishList}><i className="fa fa-plus"></i> <i className="fa fa-heart"></i></button>
                        </div>

                    </div>
                    <div className="d-flex flex-column justify-content-start mt-2">
                        <div className="py-2">Categories</div>
                        <div className="cats d-flex justify-content-start">
                            {product.categories.map((categoryId) => (<Link to={`/categories/${categoryId}/products`} key={categoryId}
                                className="nav-link badge badge-pill bg-dark px-1 mx-1"
                            >{categories.find((c) => c.id === categoryId).name}</Link>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row bg-light">
            <div className="col-1"></div>
            <div className="col-10 py-2">
                <div className="border-bottom fw-light text-uppercase">Details</div>
                <div className="py-4 mx-4 border-bottom">
                    {product.description}
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                    {images.map((image, index) => (<img src={`${BASE_IMAGE_URL}/${image.image}`} className="w-25 mx-1 img-thumbnail" alt={`${BASE_IMAGE_URL}/${image.image}`} key={index} />))}
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    </main>);
};
export default ProductDetails;