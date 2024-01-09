import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    proctCount: number
}
const CartProductListItem = ({ product, proctCount }: Props) => {
    return (
        <div>
            {product.title}:{proctCount}
        </div>
    )
}
export default CartProductListItem
