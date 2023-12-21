import { Grid, Typography } from '@mui/material'
import PaginationItem from './ProductListitem'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                list of Products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <PaginationItem
                        title="iPhone 15 Pro"
                        description="This is iPhohe 15 Pro"
                        capacity="256"
                        type="phone"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <PaginationItem
                        title="iPhone 4 Pro"
                        description="This is iPhohe 14 Pro"
                        capacity="128"
                        type="phone"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <PaginationItem
                        title="iPhone 13 Pro"
                        description="This is iPhohe 13 Pro"
                        capacity="64"
                        type="phone"
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
