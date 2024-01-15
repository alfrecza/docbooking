import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx'
import NuevoPaciente from './pages/NuevoPaciente.jsx'
import {action as ActionNuevoPaciente} from "./pages/NuevoPaciente.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: "/agregar/paciente",
        element: <NuevoPaciente/>,
        action: ActionNuevoPaciente
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
