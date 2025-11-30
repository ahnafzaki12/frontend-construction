import React, { useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http'
import { Eye, Edit, Trash2, Plus, FileText, Calendar, User, Tag, Clock } from 'lucide-react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Show = () => {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const res = await fetch(apiUrl + 'posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
        });

        const result = await res.json();
        console.log(result)
        setPosts(result);
    }

    const MySwal = withReactContent(Swal);

    async function deletePost(post) {
        MySwal.fire({
            title: 'Are you sure?',
            text: `Do you really want to delete "${post.title}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            customClass: {
                popup: 'rounded-xl',
                confirmButton: 'rounded-lg px-4 py-2',
                cancelButton: 'rounded-lg px-4 py-2'
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(apiUrl + 'posts/' + post.id, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${token()}`
                        }
                    });
                    const result = await res.json();

                    if (result.status === true) {
                        await fetchPosts();
                        MySwal.fire({
                            title: 'Deleted!',
                            text: 'Post has been deleted successfully.',
                            icon: 'success',
                            customClass: {
                                popup: 'rounded-xl',
                                confirmButton: 'rounded-lg px-4 py-2'
                            }
                        });
                    } else {
                        throw new Error('Failed to delete post');
                    }
                } catch (error) {
                    MySwal.fire({
                        title: 'Error!',
                        text: 'Failed to delete post. Please try again.',
                        icon: 'error',
                        customClass: {
                            popup: 'rounded-xl',
                            confirmButton: 'rounded-lg px-4 py-2'
                        }
                    });
                }
            }
        });
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <>
            <Navbar />
            <main className="flex mt-16 bg-gradient-to-br from-slate-50 to-sky-50/30">
                <Sidebar />
                <div className="flex-1 p-6 ml-5">
                    {/* Header - Matching Create Form Style */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900">Blog Management</h1>
                                <p className="text-slate-600 mt-1">Manage your blog posts and articles</p>
                            </div>
                            <a
                                href="/admin/posts/create"
                                className="group bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25 flex items-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Create Post
                            </a>
                        </div>

                        {/* Statistics Cards - Matching Form Section Style */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                Blog Statistics
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">Total Posts</p>
                                            <p className="text-3xl font-bold text-slate-900 mt-1">{posts.length}</p>
                                        </div>
                                        <div className="bg-sky-50 p-3 rounded-lg">
                                            <FileText className="w-6 h-6 text-sky-600" />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">This Month</p>
                                            <p className="text-3xl font-bold text-green-600 mt-1">
                                                {posts.filter(post => {
                                                    const postDate = new Date(post.created_at);
                                                    const currentMonth = new Date().getMonth();
                                                    return postDate.getMonth() === currentMonth;
                                                }).length}
                                            </p>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg">
                                            <Calendar className="w-6 h-6 text-green-600" />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">Categories</p>
                                            <p className="text-3xl font-bold text-purple-600 mt-1">
                                                {[...new Set(posts.map(post => post.category))].length}
                                            </p>
                                        </div>
                                        <div className="bg-purple-50 p-3 rounded-lg">
                                            <Tag className="w-6 h-6 text-purple-600" />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">Authors</p>
                                            <p className="text-3xl font-bold text-amber-600 mt-1">
                                                {[...new Set(posts.map(post => post.author))].length}
                                            </p>
                                        </div>
                                        <div className="bg-amber-50 p-3 rounded-lg">
                                            <User className="w-6 h-6 text-amber-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Posts Grid - Matching Form Section Style */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                Recent Articles
                            </h3>

                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200/50 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={`http://localhost:8000/${post.image}`}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            
                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-sky-500 text-white px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wide">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-sky-600 transition-colors duration-300">
                                                {post.title}
                                            </h3>
                                            
                                            <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="space-y-2 mb-6">
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <User className="w-4 h-4" />
                                                    <span className="text-sm">{post.author}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-sm">{new Date(post.created_at).toLocaleDateString('id-ID', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}</span>
                                                </div>
                                            </div>

                                            {/* Action Buttons - Matching Form Button Style */}
                                            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                                <button className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors duration-300 group/btn">
                                                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                    <span className="text-sm font-medium">View</span>
                                                </button>
                                                
                                                <a
                                                    href={`/admin/posts/edit/${post.id}`}
                                                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-300 group/btn"
                                                >
                                                    <Edit className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                    <span className="text-sm font-medium">Edit</span>
                                                </a>
                                                
                                                <button
                                                    onClick={() => deletePost(post)}
                                                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-300 group/btn ml-auto"
                                                >
                                                    <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                    <span className="text-sm font-medium">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Empty State */}
                            {posts.length === 0 && (
                                <div className="text-center py-16 bg-white rounded-xl border border-slate-200/50">
                                    <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-slate-600 mb-2">No Posts Yet</h3>
                                    <p className="text-slate-500 mb-6">Start by creating your first blog post</p>
                                    <a
                                        href="/admin/posts/create"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        <Plus className="w-5 h-5" />
                                        Create Your First Post
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Show;