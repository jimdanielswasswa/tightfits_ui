import { useSelector } from "react-redux";
import Category from "./Category";
import { selectAllCategories } from "./categorySlice";

const Categories = () => {
    debugger
    const categories = useSelector(selectAllCategories);
    const content = (categories) ? categories.map((category) => (<Category id={category.id} key={category.id} classes={'col-md-3'}/>)): 'No Categories To Show.'; 
    return(<div className="row p-4" data-masonry='{"percentPosition": true, horizontalOrder: true }'>
        { content }
    </div>);
};
export default Categories;