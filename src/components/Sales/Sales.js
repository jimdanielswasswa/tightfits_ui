import React from "react";
import { useSelector } from "react-redux";
import Sale from "../../features/Sales/Sale";
import { selectAllSales } from "../../features/Sales/salesSlice";

const Sales = () => {
    const sales = useSelector(selectAllSales);    
    const content =(sales) ? (sales.map((sale) => (
        <Sale id={sale.id} key={sale.id}/>
    ))) : 'No Sales To Display.';
    return (<main className="mt-5 main-content">
        <div className="row pb-5">
            {content}
        </div>
    </main>)
};

export default Sales;