import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx'
import NuevoPaciente from './pages/NuevoPaciente.jsx'
import EditarPaciente from './pages/EditarPaciente.jsx'
import Administrar, { loader } from './pages/Administrar.jsx'
import {action as ActionNuevoPaciente} from "./pages/NuevoPaciente.jsx"
import { loader as loaderAdministrar } from './pages/Administrar.jsx'
import { loader as loaderEditar, action as actionEditar } from './pages/EditarPaciente.jsx'

export const MyContext = createContext();


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MyContext.Provider value={{}}>
          <Layout />
        </MyContext.Provider>
      ),
      children: [
        {
          index: true,
          element: <Index />
        },
        {
          path: "/agregar/paciente",
          element: <NuevoPaciente />,
          action: ActionNuevoPaciente
        },
        {
          path: "/administrar/pacientes",
          element: <Administrar />,
          loader: loaderAdministrar
        },
        {
          path: "/pacientes/:id/editar",
          element: <EditarPaciente />,
          loader: loaderEditar,
          action: actionEditar
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
