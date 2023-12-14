import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
//without jsx
// const el = React.createElement('h1', { id: 'title' }, 'Hello title')

//with jsx
// const a = 10
// const el = <h1 id="title">Hello Title, {a}</h1>

// function App() {
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Numquam, cupiditate perferendis sed culpa ut quaerat voluptatum,
//                 ex est doloribus ipsum laborum explicabo a eaque minus, ullam
//                 beatae. Ab, cum natus.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Accusantium debitis repudiandae nisi quas voluptatum dolorum
//                 voluptate quam maiores sapiente! Facilis illo officia voluptatem
//                 eum debitis suscipit quo quisquam repudiandae et?
//             </p>
//         </div>
//     )
// }

const Header = () => {
    return <h1>Hello world</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat quibusdam tempore recusandae autem fuga praesentium
                consequuntur, voluptas assumenda perferendis, rerum
                reprehenderit consequatur, molestias iure. Commodi fugit quasi
                accusamus aperiam corporis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                provident aliquam labore sed fugiat dolore cum placeat?
                Blanditiis, mollitia perferendis eveniet, id veritatis ad rem,
                voluptatem reiciendis voluptas voluptate sequi.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header />
            <Content />
        </>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
