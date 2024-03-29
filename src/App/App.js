import React from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { About } from '../pages/About/About';
import { Contacts } from '../pages/Contacts/Contacts';
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { Garantee } from '../pages/Garantee/Garantee';
import { Items } from '../components/header/Items';
export function App() {
    const api = 'https://660247539d7276a75552f2f5.mockapi.io/cars/list';
    const router = createHashRouter([
        {path:"/", element:<Home/>},
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
        }
])
  return (
    <RouterProvider router={router}/>
  );
}
