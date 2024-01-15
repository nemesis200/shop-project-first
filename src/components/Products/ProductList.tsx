import { Grid, Typography } from '@mui/material'
import PaginationItem from './ProductListitem'
import { productsArray } from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
    toggleLikeState: (id: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}
const ProductList = ({
    addProductToCart,
    toggleLikeState,
    productsLikeState,
}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        capacity,
                        price,
                        type,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <PaginationItem
                                id={id}
                                title={title}
                                description={description}
                                capacity={capacity}
                                type={type}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                                isLiked={productsLikeState[id]}
                                toggleLikeState={toggleLikeState}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
