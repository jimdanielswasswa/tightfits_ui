import React from "react";

import { useSelector } from 'react-redux';
import { selectAllProducts } from "../../features/products/productsSlice";
import Product from "../../features/products/Product";

const Shop = () => {
    const products = useSelector(selectAllProducts);
    return (<main className="mt-5 main-content">
        <div className="row pb-5">
            {products.map((product) => (
                <Product key={product.id} id={product.id}/>
            ))}
        </div>
    </main>);
}

export default Shop;