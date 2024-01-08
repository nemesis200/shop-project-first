import { CardContent, Grid, Card } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
type Props = {
    product: Product
    productCount: number
}
const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const [count, setCount] = useState(productCount)
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {count}</p>
                    <DeleteIcon
                        onClick={onDecrementClick}
                        sx={{
                            color: 'blue',
                            border: '1px solid blue',
                        }}
                    />
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
