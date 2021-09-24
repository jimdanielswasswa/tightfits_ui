import { useSelector } from "react-redux";
import Product from "../products/Product";
import { selectProductsWhereNameLike } from "../products/productsSlice";

const SearchResults = ({ match }) => {
    debugger
    const searchTerm = (match.params.searchTerm) ? match.params.searchTerm : '';
    const productsResults = useSelector((state) => (selectProductsWhereNameLike(state, searchTerm)));
    const productsContent = (productsResults) ? (<div className="row"> 
    {productsResults.map((p) => (<Product key={p.id} id={p.id} />))}
    </div>): "No Products Found.";
    return(<main className="mx-">
        { productsContent }
    </main>);
};

export default SearchResults;