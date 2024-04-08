import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import { About } from '../pages/About/About';
import { Contacts } from '../pages/Contacts/Contacts';
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { Garantee } from '../pages/Garantee/Garantee';
import { Items } from '../pages/Items/Items';
import { ItemIphone } from '../pages/ItemPage/ItemIphone';
import { randomItems } from '../helpers/Utils';
import { Mac } from '../pages/ItemPage/Mac';
import { Ipad } from '../pages/ItemPage/Ipad';
import { loadAppleList } from '../Api/loadAppleList';
import { loadAppleItem } from '../Api/loadAppleItem';
import { Watch } from '../pages/ItemPage/Watch';
import { AirPods } from '../pages/ItemPage/AirPods';
import { Vision } from '../pages/ItemPage/Vision';
import { Basket } from '../components/Header/nav_1/Basket';
// import { SearchResults } from '../components/header/nav_1/SearchResults';
export function App() {
    const router = createHashRouter([
        {
            path:"/",
            element:<Home/>,
            loader: async () => {
                const data = await loadAppleList();
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
            loader: loadAppleList,
        },
        {
            path: "/ItemIphone/:id",
            element: <ItemIphone/>,
            loader: async ({params}) => {
                return loadAppleItem(params.id)
            }
        },
        {
            path: "/Ipad/:id",
            element: <Ipad/>,
            loader: async ({params}) => {
                return loadAppleItem(params.id)
            }
        },
        {
            path: "/Mac/:id",
            element: <Mac/>,
            loader: async ({params}) => {
                return loadAppleItem(params.id)
            }
        },
        {
            path: "/Watch/:id",
            element: <Watch/>,
            loader: async ({params}) => {
                return loadAppleItem(params.id)
            }
        },
        {
            path: "/AirPods/:id",
            element: <AirPods/>,
            loader: async ({params}) => {
                return loadAppleItem(params.id)
            }
        },
        {
            path: "/Vision/:id",
            element: <Vision/>,
            loader: async ({params}) => {
                return loadAppleItem(params.id)
            }
        },
        // {
        //     path:"/SearchResults",
        //     element:<SearchResults/>,
        //     loader: loadAppleList,
        // },
        {
            path: '/Basket',
            element: <Basket />,
            loader: async () => {
                const { favorites } = store.getState();
                const data = await loadAppleList();
                return data.filter(item => favorites.includes(item.id));
            },
        },
])
  return (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  );
}
