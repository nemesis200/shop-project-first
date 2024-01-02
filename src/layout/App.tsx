import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { number } from 'yargs'

type Props = {}

type CardDataType = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CardDataType>({
        totalCount: 0,
        totalPrice: 0,
    })
    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }
    return (
        <>
            <StyledEngineProvider>
                <CssBaseline />
                <Header cartData={cartData} />
                <button onClick={() => addProductToCart(5, 500)}>
                    Add to Cart
                </button>
                <Main addProductToCart={addProductToCart} />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}

export default App
function setCartData(arg0: (prevCartData: number) => any) {
    throw new Error('Function not implemented.')
}
