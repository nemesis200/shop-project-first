import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
//without jsx
// const el = React.createElement('h1', { id: 'title' }, 'Hello title')

//with jsx
// const a = 10
// const el = <h1 id="title">Hello Title, {a}</h1>

function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, cupiditate perferendis sed culpa ut quaerat voluptatum,
                ex est doloribus ipsum laborum explicabo a eaque minus, ullam
                beatae. Ab, cum natus.
            </p>
        </div>
    )
}
root.render(
    <React.StrictMode>
        {' '}
        <App />{' '}
    </React.StrictMode>
)
