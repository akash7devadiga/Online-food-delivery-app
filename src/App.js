import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from './components/Body';

import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu';
//import Grocery from './components/Grocery';

import { Provider } from 'react-redux';

import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    //make an api call by sending username and password, and get the username
    const data = {
      name: "Akash Devadiga"
    }
    setUserName(data.name)
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='app'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      },

      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      },

    ],
    errorElement: <Error />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);