import React, { useEffect, useState } from 'react';
import Navbar from '../../common/Navbar';
import Sidebar from '../../common/Sidebar';
import { CheckCircle, Edit, Eye, Plus, Trash2, XCircle, Building2, MapPin, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import { apiUrl, token } from '../../common/http';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const Show = () => {
    const [projects, setProjects] = useState([]);

    async function fetchProjects() {
        const res = await fetch(apiUrl + 'projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
        });

        const result = await res.json();
        setProjects(result.data);
    };

    const MySwal = withReactContent(Swal);

    async function deleteProject(project) {
        MySwal.fire({
            title: 'Are you sure?',
            text: `Do you really want to delete "${project.title}"?`,
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
                    const res = await fetch(apiUrl + 'projects/' + project.id, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${token()}`
                        }
                    });
                    const result = await res.json();

                    if (result.status === true) {
                        await fetchProjects();
                        MySwal.fire({
                            title: 'Deleted!',
                            text: 'Project has been deleted successfully.',
                            icon: 'success',
                            customClass: {
                                popup: 'rounded-xl',
                                confirmButton: 'rounded-lg px-4 py-2'
                            }
                        });
                    } else {
                        throw new Error('Failed to delete project');
                    }
                } catch (error) {
                    MySwal.fire({
                        title: 'Error!',
                        text: 'Failed to delete project. Please try again.',
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
        fetchProjects();
    }, []);

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
                                <h1 className="text-3xl font-bold text-slate-900">Projects Management</h1>
                                <p className="text-slate-600 mt-1">Manage your construction projects and track their progress</p>
                            </div>
                            <a
                                href="/admin/projects/create"
                                className="group bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25 flex items-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Create Project
                            </a>
                        </div>

                        {/* Statistics Cards - Matching Form Section Style */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                Project Statistics
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">Total Projects</p>
                                            <p className="text-3xl font-bold text-slate-900 mt-1">{projects.length}</p>
                                        </div>
                                        <div className="bg-sky-50 p-3 rounded-lg">
                                            <Building2 className="w-6 h-6 text-sky-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Projects Grid - Matching Form Section Style */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                Project Portfolio
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200/50 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={`http://localhost:8000/uploads/projects/${project.image}`}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            
                                            <div className="space-y-2 mb-6">
                                                {project.location && (
                                                    <div className="flex items-center gap-2 text-slate-600">
                                                        <MapPin className="w-4 h-4" />
                                                        <span className="text-sm">{project.location}</span>
                                                    </div>
                                                )}
                                                {project.category && (
                                                    <div className="flex items-center gap-2 text-slate-600">
                                                        <Tag className="w-4 h-4" />
                                                        <span className="text-sm">{project.category}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Action Buttons - Matching Form Button Style */}
                                            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                                <button className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors duration-300 group/btn">
                                                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                    <span className="text-sm font-medium">View</span>
                                                </button>
                                                
                                                <Link
                                                    to={`/admin/projects/edit/${project.id}`}
                                                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-300 group/btn"
                                                >
                                                    <Edit className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                    <span className="text-sm font-medium">Edit</span>
                                                </Link>
                                                
                                                <button
                                                    onClick={() => deleteProject(project)}
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
                            {projects.length === 0 && (
                                <div className="text-center py-16 bg-white rounded-xl border border-slate-200/50">
                                    <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-slate-600 mb-2">No Projects Yet</h3>
                                    <p className="text-slate-500 mb-6">Start by creating your first construction project</p>
                                    <a
                                        href="/admin/projects/create"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        <Plus className="w-5 h-5" />
                                        Create Your First Project
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
};

export default Show;