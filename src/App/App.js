import React from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { About } from '../pages/About/About';
import { Contacts } from '../pages/Contacts/Contacts';
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { Garantee } from '../pages/Garantee/Garantee';
import { Items } from '../pages/Items/Items';
import { ItemPage } from '../pages/ItemPage/ItemPage';
import { randomItems } from '../helpers/Utils';
export function App() {
    const api = 'https://dd216b9d12e1730f3d2795b5126a3da4.serveo.net/api/products/products-api/';
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
])
  return (
    <RouterProvider router={router}/>
  );
}
