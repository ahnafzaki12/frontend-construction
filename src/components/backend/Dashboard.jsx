import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Sidebar from '../common/Sidebar'

export const Dashboard = () => {
  return (
    <>
        <Navbar />
        <main className="flex mt-16">
            <Sidebar />
            <div className="flex-1 p-6">
                <h4 className="text-xl font-semibold">Welcome to admin console</h4>
                {/* Content Section */}
                {/* You can add other dashboard content here */}
            </div>
        </main>
        <Footer />
    </>
  )
}
