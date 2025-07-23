import React from 'react'
import { SkipBackIcon, StepBack } from 'lucide-react'
import Navbar from '../../common/Navbar'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'


const Create = () => {
    return (
        <>
            <Navbar />
            <main className="flex mt-16 bg-gradient-to-br from-slate-50 to-sky-50/30">
                <Sidebar />
                <div className="flex-1 p-6 ml-5">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900">Services Management</h1>
                                <p className="text-slate-600 mt-1">Manage your construction services and offerings</p>
                            </div>
                            <a
                                href="/admin/services"
                                className="group bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25 flex items-center gap-2"
                            >
                                <SkipBackIcon className="w-5 h-5" />
                                Back
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Create