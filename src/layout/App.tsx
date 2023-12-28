import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

type CardDataType = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CardDataType>({
        totalCount: 10,
        totalPrice: 100,
    })
    return (
        <>
            <StyledEngineProvider>
                <CssBaseline />
                <Header cartData={cartData} />
                <Main />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}

export default App
