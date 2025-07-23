import React from 'react'
import { SkipBackIcon, StepBack } from 'lucide-react'
import Navbar from '../../common/Navbar'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { useForm } from "react-hook-form";



const Create = () => {
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

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
                                <h1 className="text-3xl font-bold text-slate-900">Create Services Management</h1>
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
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="">Name</label>
                                <input 
                                {
                                    ...register('title', {
                                        required: "The title field is required"
                                    })
                                }
                                type="text" />
                                { errors.title && <p>{errors.title?.message}</p>}
                                <label htmlFor="">Slug</label>
                                <input 
                                {
                                    ...register('slug', {
                                        required: "The slug field is required"
                                    })
                                }
                                type="text" />
                                 { errors.slug && <p>{errors.slug?.message}</p>}
                                <label htmlFor="">Short Description</label>
                                <textarea 
                                {
                                    ...register('short_desc')
                                }
                                ></textarea>
                                <label htmlFor="">Content</label>
                                <textarea 
                                {
                                    ...register('content')
                                }
                                ></textarea>
                                <label htmlFor="">Status</label>
                                <select 
                                {
                                    ...register('status')
                                }
                                name="" id="">
                                    <option value="1">Active</option>
                                    <option value="0">Block</option>
                                </select>
                            </div>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Create