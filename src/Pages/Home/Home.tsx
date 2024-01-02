import ProductList from 'components/Logo/Products/ProductList'
type Props = { addProductToCart: (id: number, count: number) => void }

const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <ProductList addProductToCart={addProductToCart} />
        </>
    )
}
export default Home
