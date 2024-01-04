import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Logo/Menu/Menu'
import CartHeader from 'components/Logo/CartHeader/CartHeader'
type Props = {
    productsInCart: {
        [id: string]: number
    }
}

const Header = ({ productsInCart }: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'green',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Logo />
                    <Menu />
                    <CartHeader productsInCart={productsInCart} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
