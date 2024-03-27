import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx';

import PackagesPage from './pages/PackagesPage/PackagesPage.jsx'
import { BrowserRouter ,RouterProvider,createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <Home />
    },
    {
      path : "/About",
      element : <About />
    },
    {
      path : "/PackagesPage",
      element : <PackagesPage />
    },
  ],
  { basename: import.meta.env.BASE_URL }
  );

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App >
        <RouterProvider router={router} />
      </App>
    </React.StrictMode>
  </BrowserRouter>
);
