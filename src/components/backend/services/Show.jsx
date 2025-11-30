import React, { useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http'
import { Eye, Edit, Trash2, Plus, CheckCircle, XCircle, Settings } from 'lucide-react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Show = () => {
    const [services, setServices] = useState([]);

    async function fetchServices() {
        const res = await fetch(apiUrl + 'services', {
            'method': "GET",
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        });

        const result = await res.json();
        setServices(result.data);
    }

    const MySwal = withReactContent(Swal);

    async function deleteService(service) {
        MySwal.fire({
            title: 'Are you sure?',
            text: `Do you really want to delete "${service.title}"?`,
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
                    const res = await fetch(apiUrl + 'services/' + service.id, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${token()}`
                        }
                    });
                    const result = await res.json();

                    if (result.status === true) {
                        await fetchServices();
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
                        throw new Error('Failed to delete service');
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
        fetchServices();
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
                                <h1 className="text-3xl font-bold text-slate-900">Services Management</h1>
                                <p className="text-slate-600 mt-1">Manage your construction services and offerings</p>
                            </div>
                            <a
                                href="/admin/services/create"
                                className="group bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25 flex items-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Create Service
                            </a>
                        </div>

                        {/* Statistics Cards - Matching Form Section Style */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                Service Statistics
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Total Services Card */}
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">Total Services</p>
                                            <p className="text-3xl font-bold text-slate-900 mt-1">{services.length}</p>
                                        </div>
                                        <div className="bg-sky-50 p-3 rounded-lg">
                                            <Settings className="w-6 h-6 text-sky-600" />
                                        </div>
                                    </div>
                                </div>

                                {/* Active Services Card */}
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">Active Services</p>
                                            <p className="text-3xl font-bold text-green-600 mt-1">{services.filter((s) => s.status === 1).length}</p>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg">
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </div>
                                    </div>
                                </div>

                                {/* Inactive Services Card */}
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">Inactive Services</p>
                                            <p className="text-3xl font-bold text-red-600 mt-1">{services.filter((s) => s.status === 0).length}</p>
                                        </div>
                                        <div className="bg-red-50 p-3 rounded-lg">
                                            <XCircle className="w-6 h-6 text-red-600" />
                                        </div>
                                    </div>
                                </div>

                                {/* This Month Card */}
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-600 text-sm font-medium">This Month</p>
                                            <p className="text-3xl font-bold text-sky-600 mt-1">+2</p>
                                        </div>
                                        <div className="bg-sky-50 p-3 rounded-lg">
                                            <Plus className="w-6 h-6 text-sky-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services List - Matching Form Section Style */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                                Service Directory
                            </h3>

                            <div className="bg-white rounded-xl shadow-lg border border-slate-200/50 overflow-hidden">
                                {services.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-slate-200">
                                            <thead className="bg-slate-50">
                                                <tr>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">ID</th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Service Name</th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Slug</th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200">
                                                {services.map((service, index) => (
                                                    <tr key={service.id} className={`hover:bg-slate-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-25'}`}>
                                                        <td className="px-6 py-4 text-sm font-medium text-slate-900">#{service.id}</td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm font-semibold text-slate-900">{service.title}</div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-slate-600 font-mono">{service.slug}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${
                                                                service.status === 1 
                                                                    ? 'bg-green-50 text-green-600 border border-green-200' 
                                                                    : 'bg-red-50 text-red-600 border border-red-200'
                                                            }`}>
                                                                {service.status === 1 ? (
                                                                    <>
                                                                        <CheckCircle className="w-3 h-3 mr-1" />
                                                                        Active
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <XCircle className="w-3 h-3 mr-1" />
                                                                        Inactive
                                                                    </>
                                                                )}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-4">
                                                                <button className="flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors duration-300 group/btn">
                                                                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                                    <span className="text-sm font-medium">View</span>
                                                                </button>
                                                                
                                                                <a
                                                                    href={`/admin/services/edit/${service.id}`}
                                                                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-300 group/btn"
                                                                >
                                                                    <Edit className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                                    <span className="text-sm font-medium">Edit</span>
                                                                </a>
                                                                
                                                                <button
                                                                    onClick={() => deleteService(service)}
                                                                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-300 group/btn"
                                                                >
                                                                    <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                                                    <span className="text-sm font-medium">Delete</span>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    /* Empty State */
                                    <div className="text-center py-16">
                                        <Settings className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-slate-600 mb-2">No Services Yet</h3>
                                        <p className="text-slate-500 mb-6">Start by creating your first construction service</p>
                                        <a
                                            href="/admin/services/create"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                            <Plus className="w-5 h-5" />
                                            Create Your First Service
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Show;