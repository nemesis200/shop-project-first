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
                    <PaginationItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <PaginationItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <PaginationItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <PaginationItem />
                </Grid>
            </Grid>
            <PaginationItem />
        </>
    )
}
export default ProductList
