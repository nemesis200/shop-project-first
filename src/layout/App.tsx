import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

type ProductsInCartType = {
    [id: string]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsCart] = useState<ProductsInCartType>({
        1: 0,
        2: 0,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />

                <Main addProductToCart={addProductToCart} />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}

export default App
