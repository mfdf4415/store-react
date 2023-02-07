import Bunnre from "../Components/Bunner";
import Product from "../Components/Product";
import "../Styles/css/popularProduct.css"

const HomePage = () => {
    return (<><Bunnre /><PopularProduct /></>)
}

export default HomePage;


const PopularProduct = () => {
    return (
        <div className="pop-container flex">
            <p className="pop-title">Popular Product</p>
            <div className="prd-list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <button>View All Product</button>
        </div>
    );
}

