import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Content from './Content'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = () => {
    return (
        <>
            <Header title="App.js" num={10} />
            <Header title="React.js" />
            <Content p1="Hello World 1" p2="Hello World 2" bgColor="red" />
            <Content p1="Hello World 3" p2="Hello World 4" bgColor="purple" />
        </>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
