import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// admin
import Toc from './admin/TOC/index'
import ErrorPage from './admin/ErrorPage/index'
import apps from './data/apps'

// global style
import './style/main.css'
import './style/normalize.css'

const appRoutes = apps.map(({ link, element }) => ({ path: link, element, errorElement: <ErrorPage /> }))
const routes = [{ path: '/', element: <Toc />, errorElement: <ErrorPage /> }, ...appRoutes]
const router = createBrowserRouter(routes)
const rootEl = document.getElementById('root')
createRoot(rootEl).render(<RouterProvider router={router} />)
