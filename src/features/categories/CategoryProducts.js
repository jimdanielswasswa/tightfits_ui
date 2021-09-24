import { useSelector } from "react-redux";
import { selectProductsByCategory } from "../products/productsSlice";
import Product from '../products/Product';

const CategoryProducts = ({ match }) => {
    debugger
    const categoryId = (match.params) ? match.params.id : 0;
    const products = useSelector((state) => selectProductsByCategory(state, categoryId));
    return (<main className="mt-5 main-content">
        <div className="row pb-5">
            {products.map((product) => (<Product key={product.id} id={product.id} />))}
        </div>
    </main>);
};

export default CategoryProducts;