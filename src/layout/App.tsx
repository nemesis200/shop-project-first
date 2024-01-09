import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router'
import { Container } from '@mui/system'
import Home from 'Pages/Home/Home'
import CartPage from 'Pages/Home/CartPage/CartPage'
import { omit } from 'lodash'

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
    const removeProductFromCart = (id: number) => {
        setProductsCart((prevState) => omit(prevState, id))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />

                <Container maxWidth="lg" sx={{ padding: '50px 0' }}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home addProductToCart={addProductToCart} />
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <CartPage
                                    productsInCart={productsInCart}
                                    removeProductFromCart={
                                        removeProductFromCart
                                    }
                                />
                            }
                        />
                    </Routes>
                </Container>

                <Footer />
            </StyledEngineProvider>
        </>
    )
}

export default App
