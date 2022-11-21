import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'



export const PaginaPadrao = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div><Outlet/></div>
    </div>
  )
}
