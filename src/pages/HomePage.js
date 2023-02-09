import Bunnre from "../Components/Bunner";
import Product from "../Components/Product";
import LoadingProduct from "../Components/LoadingProduct"
import Error from "../Components/Common/Error"
import useFetch from "../hooks/useFetch";
import "../Styles/css/popularProduct.css"

const HomePage = () => {
    return (<><Bunnre /><PopularProduct /></>)
}

export default HomePage;

const PopularProduct = () => {
    const { data, error, loading } = useFetch("/products?offset=0&limit=12")

    const renderPopular = () => {
        let renderd;
        if (error) {
            renderd = <div className="pop-container flex">
                <Error message={error} />
            </div>
        }
        else if (loading) {
            renderd = <div className="pop-container flex">
                <p className="pop-title">Popular Product</p>
                <div className="prd-list">
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                    <LoadingProduct/>
                </div>
                <button>View All Product</button>
            </div>

        }
        else if (data) {
            renderd = <div className="pop-container flex">
                <p className="pop-title">Popular Product</p>
                <div className="prd-list">
                    {data.map(product => <Product id={product.id} product={product} />)}
                </div>
                <button>View All Product</button>
            </div>

        }
        return renderd
    }

    return (renderPopular());
}

