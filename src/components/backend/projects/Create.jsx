import React from 'react'

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

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            {/* Basic Information */}
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                    <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                    Basic Information
                                </h3>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Service Name */}
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Service Name *
                                        </label>
                                        <input
                                            {...register('title', { required: "The title field is required" })}
                                            type="text"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                                        />
                                        {errors.title && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.title?.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div>
                                        <label htmlFor="slug" className="block text-sm font-semibold text-slate-700 mb-2">
                                            URL Slug *
                                        </label>
                                        <input
                                            {...register('slug', { required: "The slug field is required" })}
                                            type="text"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                                        />
                                        {errors.slug && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.slug?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                    <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                    Content & Description
                                </h3>

                                {/* Short Description */}
                                <div className="mb-6">
                                    <label htmlFor="short_desc" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Short Description
                                    </label>
                                    <textarea
                                        {...register('short_desc')}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400 resize-none"
                                        rows={4}
                                    ></textarea>
                                </div>

                                {/* Jodit Editor */}
                                <div>
                                    <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Detailed Content
                                    </label>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        onBlur={newContent => setContent(newContent)}
                                        className="border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                    <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                    Media & Images
                                </h3>

                                <label htmlFor="image" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Service Image
                                </label>
                                <div className="relative">
                                    <input
                                        onChange={handleFile}
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-sky-400 hover:bg-sky-50/50 transition-all duration-300">
                                        <div className="space-y-4">

                                            <div>
                                                {imageName ? (
                                                    <p className="text-slate-600 font-medium">{imageName}</p>
                                                ) : (
                                                    <>
                                                        <div className="mx-auto w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                                            <Upload className="w-6 h-6 text-slate-400" />
                                                        </div>
                                                        <p className="text-slate-600 font-medium">Click to upload image</p>
                                                        <p className="text-sm text-slate-500">PNG, JPG, GIF up to 10MB</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-200">
                                <button
                                    disabled={isDisable}
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    <Save className="w-5 h-5" />
                                    {isDisable ? 'Saving...' : 'Create Service'}
                                </button>

                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                                >
                                    <Eye className="w-5 h-5" />
                                    Preview
                                </button>

                                <a
                                    href="/admin/services"
                                    className="inline-flex items-center justify-center gap-2 text-slate-600 hover:text-slate-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                                >
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Create