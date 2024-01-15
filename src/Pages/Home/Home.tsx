import ProductList from 'components/Products/ProductList'
import Reviewes from 'components/Reviewes/Reviewes'
type Props = {
    addProductToCart: (id: number, count: number) => void
    toggleLikeState: (id: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}
const Home = ({
    addProductToCart,
    toggleLikeState,
    productsLikeState,
}: Props) => {
    return (
        <>
            <ProductList
                addProductToCart={addProductToCart}
                toggleLikeState={toggleLikeState}
                productsLikeState={productsLikeState}
            />
            <Reviewes />
        </>
    )
}
export default Home
