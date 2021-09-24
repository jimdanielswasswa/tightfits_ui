import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { selectCartBySessionId } from "../../features/cart/cartSlice";
import { selectAllCategories } from "../../features/categories/categorySlice";
import { selectWishListItemsBySessionId } from "../../features/wishList/wishListSlice";
import "./Navbar.css";

const Navbar = () => {
    const history = useHistory();
    const categories = useSelector(selectAllCategories);
    const cartItemsCount = useSelector((state) => (selectCartBySessionId(state, 0))).length;
    const wishListItemsCount = useSelector((state) => (selectWishListItemsBySessionId(state, 0))).length;
    const search = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push(`/search/${e.target["search-term"].value}`);
    };
    return (<nav className="navbar navbar-expand-lg bg-dark navbar-main px-5 m-0 text-white">
        <div className="container-fluid pt-3 pb-3">
            <Link className="navbar-brand text-white business-logo" to="/">Tight Fits</Link>
            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
                aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main-nav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fw-light" activeClassName="active" to="/" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fw-light" activeClassName="active"
                            to="/shop">Shop</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fw-light" activeClassName="active" to="/sales">Sales</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link text-white fw-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
                        <ul className="dropdown-menu mx-0 shadow">
                            {categories.map((category) => <li key={category.id}>
                                <Link className="dropdown-item fw-bold" to={`/categories/${category.id}/products`} key={category.id}>{category.name}</Link>
                            </li>)}
                        </ul>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={search}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search-term" id="searh-term" />
                    <button className="btn btn-primary fw-light" type="submit">Search</button>
                </form>
            </div>
            
            <div className="col-md-1 ps-2 d-flex justify-content-end">
                    <Link to={`/wishlists/${0}`} className="text-white mx-2 position-relative  w-50">
                        <i className="fa fa-heart"></i>
                        <div className="count badge bg-danger">{wishListItemsCount}</div>
                    </Link>
                    <Link to={`/carts/${0}`} className="text-white mx-2 w-50 position-relative">
                        <i className="fa fa-shopping-cart"></i>
                        <div className="count badge bg-danger">{cartItemsCount}</div>
                    </Link>
                </div>
        </div>
    </nav>)
};

export default Navbar;