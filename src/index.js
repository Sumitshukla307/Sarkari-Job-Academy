import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './route/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import Eroor from './component/Eroor/Eroor';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Event from './component/Event/Event';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
 { path: "*", element: <Eroor /> },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
