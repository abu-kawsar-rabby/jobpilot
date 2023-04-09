import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJob from './components/AppliedJob/AppliedJob'
import Blog from './components/Blog/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied_jobs',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    ></RouterProvider>
  </React.StrictMode>,
)
