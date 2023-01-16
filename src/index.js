import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './admin/ErrorPage/index'

import './style/main.css'
import './style/normalize.css'

import Toc from './admin/TOC/index'

const router = createBrowserRouter([
  { path: '/', element: <Toc />, errorElement: <ErrorPage /> } //
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
