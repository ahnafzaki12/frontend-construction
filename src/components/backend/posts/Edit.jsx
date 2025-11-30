import React, { useState, useEffect } from "react";
import Navbar from '../../common/Navbar';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl, token } from "../../common/http";
import { ChevronLeft, Upload, AlertCircle, Save, Eye, ImageIcon } from 'lucide-react';

const Edit = () => {
    const { id } = useParams(); // To capture the post id from URL
    const [isDisable, setIsDisable] = useState(false);
    const [preview, setPreview] = useState(null);
    const [fileName, setFileName] = useState('');
    const [post, setPost] = useState(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    // Fetch existing post data when component mounts
    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch(`${apiUrl}posts/${id}`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token()}`,
                    },
                });
                const result = await res.json();
                if (res.ok) {
                    setPost(result.data);
                    reset(result.data); // Populate form with current post data
                    setPreview(result.data.image ? apiUrl + result.data.image : null);
                    setFileName(result.data.image ? result.data.image : '');
                } else {
                    toast.error(result.message || "Failed to fetch post data");
                }
            } catch (err) {
                toast.error("Connection error occurred");
            }
        }

        fetchPost();
    }, [id, reset]);

    async function onSubmit(data) {
        setIsDisable(true);

        const formData = new FormData();
        formData.append("_method", "PUT"); // Important for method spoofing in Laravel
        formData.append("title", data.title);
        formData.append("author", data.author);
        formData.append("excerpt", data.excerpt);
        formData.append("category", data.category);
        formData.append("featured", data.featured || 1);

        if (data.image && data.image[0]) {
            formData.append("image", data.image[0]);
        }

        try {
            const res = await fetch(`${apiUrl}posts/${id}`, {
                method: "POST", // Send as POST but spoof as PUT in backend
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token()}`,
                },
                body: formData,
            });

            const result = await res.json();
            if (res.ok) {
                toast.success(result.message);
                reset();
                navigate("/admin/posts");
            } else {
                toast.error(result.message || "Failed to update post");
            }
        } catch (err) {
            toast.error("Connection error occurred");
        } finally {
            setIsDisable(false);
        }
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file)); // Preview gambar yang dipilih
            setFileName(file.name);
        } else {
            setPreview(null);
            setFileName('');
        }
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
                                <h1 className="text-3xl font-bold text-slate-900">Edit Blog Post</h1>
                                <p className="text-slate-600 mt-1">Edit and update your blog articles</p>
                            </div>
                            <a
                                href="/admin/posts"
                                className="group bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25 flex items-center gap-2"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Back to Posts
                            </a>
                        </div>

                        {/* Form */}
                        {post && (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                {/* Basic Information */}
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                        <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                        Article Information
                                    </h3>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* Title */}
                                        <div>
                                            <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Article Title *
                                            </label>
                                            <input
                                                {...register('title', { required: "Title is required" })}
                                                type="text"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                                                placeholder="Enter article title"
                                            />
                                            {errors.title && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.title?.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Author */}
                                        <div>
                                            <label htmlFor="author" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Author *
                                            </label>
                                            <input
                                                {...register('author', { required: "Author is required" })}
                                                type="text"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                                                placeholder="Enter author name"
                                            />
                                            {errors.author && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.author?.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                                        {/* Category */}
                                        <div>
                                            <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Category *
                                            </label>
                                            <input
                                                {...register('category', { required: "Category is required" })}
                                                type="text"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400"
                                                placeholder="e.g., Construction, Design, News"
                                            />
                                            {errors.category && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errors.category?.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Featured */}
                                        <div>
                                            <label htmlFor="featured" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Featured Post
                                            </label>
                                            <select
                                                {...register('featured')}
                                                defaultValue={post.featured}
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                                            >
                                                <option value={1}>Yes, feature this post</option>
                                                <option value={0}>No, regular post</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Excerpt */}
                                    <div className="mt-6">
                                        <label htmlFor="excerpt" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Article Excerpt *
                                        </label>
                                        <textarea
                                            {...register('excerpt', { required: "Excerpt is required" })}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 placeholder-slate-400 resize-none"
                                            placeholder="Write a brief summary of your article..."
                                        />
                                        {errors.excerpt && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.excerpt?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                        <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                        Featured Image
                                    </h3>

                                    <div className="relative">
                                        <input
                                            {...register('image')}
                                            onChange={handleImageChange}
                                            type="file"
                                            accept="image/*"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-sky-400 hover:bg-sky-50/50 transition-all duration-300">
                                            {preview ? (
                                                <div className="space-y-4">
                                                    <img
                                                        src={`http://localhost:8000/${post.image}`}
                                                        alt="Preview"
                                                        className="mx-auto rounded-lg shadow-lg max-h-64 object-cover"
                                                    />
                                                    <div className="space-y-2">
                                                        <p className="text-slate-700 font-medium">{fileName}</p>
                                                        <p className="text-sm text-slate-500">Click to change image</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-4">
                                                    <div className="mx-auto w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                                                        <ImageIcon className="w-8 h-8 text-slate-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-slate-600 font-medium">Click to upload featured image</p>
                                                        <p className="text-sm text-slate-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            )}
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
                                        {isDisable ? 'Updating...' : 'Update Article'}
                                    </button>

                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                                    >
                                        <Eye className="w-5 h-5" />
                                        Preview
                                    </button>

                                    <a
                                        href="/admin/posts"
                                        className="inline-flex items-center justify-center gap-2 text-slate-600 hover:text-slate-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                                    >
                                        Cancel
                                    </a>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Edit;
