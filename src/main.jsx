import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import JobDetails from './components/JobDetails/JobDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json'),

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied_jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/job_details',
        element: <JobDetails></JobDetails>
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
