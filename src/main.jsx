import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayouts from './Components/Root/RootLayouts.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/Users/UsersDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "home", Component: Home
      },
      {
        path: "about", Component:About
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: "users/:userID", 
        loader: ({params}) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component: UserDetails,
      }
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
