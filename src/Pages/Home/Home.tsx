import ProductList from 'components/Products/ProductList'
import Reviewes from 'components/Reviewes/Reviewes'
type Props = { addProductToCart: (id: number, count: number) => void }

const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <ProductList addProductToCart={addProductToCart} />
            <Reviewes />
        </>
    )
}
export default Home
