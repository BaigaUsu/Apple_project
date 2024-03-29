import React from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { About } from '../About/About';
import { Contacts } from '../Contacts/Contacts';
import { Login } from '../Login/Login';
import { Home } from '../Home/Home';
import { Garantee } from '../Garantee/Garantee';
export function App() {
const router = createHashRouter([
          {path:"/", element:<Home/>},
           {path:"/About", element:<About/> },
           {path:"/Contacts", element:<Contacts/> },
           {path:"/Login", element:<Login/> },
           {path:"/Garantee", element:<Garantee/> },
])
  return (
    <RouterProvider router={router}/>
  );
}