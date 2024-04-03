import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import { About } from '../pages/About/About';
import { Contacts } from '../pages/Contacts/Contacts';
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { Garantee } from '../pages/Garantee/Garantee';
import { Items } from '../pages/Items/Items';
import { ItemPage } from '../pages/ItemPage/ItemPage';
import { randomItems } from '../helpers/Utils';
import { Basket } from '../components/header/nav_1/Basket';
export function App() {
    const api = 'https://70f6454af92251a5c0a8264a1c1241f1.serveo.net/api/products/products-api/';
    const router = createHashRouter([
        {
            path:"/",
            element:<Home/>,
            loader: async () => {
                const res = await fetch(api);
                const data = await res.json();
                const shuffledData = randomItems(data);
                return {item: shuffledData};
            }
        },
        {path:"/About", element:<About/> },
        {path:"/Contacts", element:<Contacts/> },
        {path:"/Login", element:<Login/> },
        {path:"/Garantee", element:<Garantee/> },
        {
            path:"/Items",
            element:<Items/>,
            loader: async () => {
                const res = await fetch(api);
                const data = await res.json();
                return {items: data}
            }
        },
        {
            path: "/Items/:id",
            element: <ItemPage/>,
            loader: async ({params}) => {
                const res = await fetch(`${api}${params.id}/`);
                const data = await res.json();
                return data
            }
        },
        {
            path: '/Basket',
            element: <Basket />,
            loader: async () => {
                const { favorites } = store.getState();
                const res = await fetch(api);
                const data = await res.json();
                const filteredData = data.filter(item => favorites.includes(item.id));
                return filteredData;
            },
        },
])
  return (
    <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
  );
}
