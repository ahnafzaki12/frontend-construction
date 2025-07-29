import React, { useEffect, useState } from 'react';
import Navbar from '../../common/Navbar';
import Sidebar from '../../common/Sidebar';
import { CheckCircle, Edit, Eye, Plus, Trash2, XCircle, Building2 } from 'lucide-react';
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
                            text: 'Service has been deleted successfully.',
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
                        text: 'Failed to delete service. Please try again.',
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
                <div className="flex-1 p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-sky-50/30 min-h-screen">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Projects Management</h1>
                                <p className="text-slate-600">Manage your construction projects and track their progress</p>
                            </div>
                            <a
                                href="/admin/projects/create"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <Plus className="w-5 h-5" />
                                Create Project
                            </a>
                        </div>

                        {/* Statistics Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-600 text-sm font-medium">Total Projects</p>
                                        <p className="text-2xl font-bold text-slate-900">{projects.length}</p>
                                    </div>
                                    <div className="bg-sky-100 p-3 rounded-lg">
                                        <Building2 className="w-6 h-6 text-sky-600" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Services Table */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200/50"
                                >
                                    <img
                                        src={`http://localhost:8000/uploads/projects/${project.image}`}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-slate-900 truncate">{project.title}</h3>
                                        <p className="text-sm text-slate-600">{project.location}</p>
                                        <p className="text-sm text-slate-600">{project.category}</p>
                                        <div className="mt-4 space-x-4">
                                            <a
                                                href="#"
                                                className="text-sky-600 hover:text-sky-900 flex items-center gap-1 text-sm"
                                            >
                                                <Eye className="w-4 h-4" />
                                                View
                                            </a>
                                            <Link
                                                to={`/admin/projects/edit/${project.id}`}
                                                className="text-slate-600 hover:text-slate-900 flex items-center gap-1 text-sm"
                                            >
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => deleteProject(project)}
                                                className="text-red-600 hover:text-red-900 flex items-center gap-1 text-sm"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Show;
