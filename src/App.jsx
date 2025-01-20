import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Trips from './pages/Trips';
import Gallery from './pages/Gallery';
import AboutCompany from './pages/AboutCompany';
import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import store from './redux/store'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/trips",
    element: <Trips/>
  },
  {
    path: "/gallery",
    element: <Gallery/>
  },
  {
    path: "/abou-us",
    element: <AboutCompany/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])
function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
