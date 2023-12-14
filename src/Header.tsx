const Header = ({ title, num, bgColor, position }: HeaderType) => {
    const style = {
        backgroundColor: bgColor,
        color: position ? 'white' : 'black',
        padding: '15px',
    }
    return (
        <h1 style={style}>
            Hello world , {title}, {num}
        </h1>
    )
}
type HeaderType = {
    title: string
    num?: number
    bgColor: string
    position?: boolean
}

export default Header
