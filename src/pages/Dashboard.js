import React from 'react'

import { SideBar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'

export const Dashboard = () => {
  return (
    <div className="flex text-[20px]">
      <SideBar />
      <div className="w-full">
        <div className="min-h-[94vh]">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}