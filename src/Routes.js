import Productes from "./components/productes/Productes"
import Comments from "./components/comments/Comments"
import Users from "./components/users/Users"
import Orders from "./components/orders/Orders"
import Offs from "./components/Offs/Offs"
import Home from "../src/components/home/Home"

let Routes = [
    {path: '/' , element: <Home /> },
    { path: '/productes', element: <Productes /> },
    { path: '/comments', element: <Comments /> },
    { path: '/users', element: <Users /> },
    { path: '/orders', element: <Orders /> },
    { path: '/offs', element: <Offs /> },
]


export default Routes