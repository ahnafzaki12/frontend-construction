import React, { useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http'
import { Eye, Edit, Trash2, Plus, CheckCircle, XCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
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
                    // Pastikan API URL sudah benar dengan menambahkan ID service
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
                    {/* Header */}
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

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                            {/* Total Services Card */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-600 text-sm font-medium">Total Services</p>
                                        <p className="text-2xl font-bold text-slate-900">{services.length}</p>
                                    </div>
                                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                                        <Eye className="w-6 h-6 text-sky-600" />
                                    </div>
                                </div>
                            </div>

                            {/* Active Services Card */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-600 text-sm font-medium">Active Services</p>
                                        <p className="text-2xl font-bold text-green-600">{services.filter((s) => s.status === 1).length}</p>
                                    </div>
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                            </div>

                            {/* Inactive Services Card */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-600 text-sm font-medium">Inactive Services</p>
                                        <p className="text-2xl font-bold text-red-600">{services.filter((s) => s.status === 0).length}</p>
                                    </div>
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                        <XCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                </div>
                            </div>

                            {/* This Month Card */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-600 text-sm font-medium">This Month</p>
                                        <p className="text-2xl font-bold text-sky-600">+2</p>
                                    </div>
                                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                                        <Plus className="w-6 h-6 text-sky-600" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services Table */}
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200/50 overflow-hidden">
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">ID</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Service Name</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Slug</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {services.map(service => (
                                        <tr key={service.id}>
                                            <td className="px-6 py-4 text-sm text-slate-900">{service.id}</td>
                                            <td className="px-6 py-4 text-sm text-slate-900">{service.title}</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">{service.slug}</td>
                                            <td className="px-6 py-4">
                                                {service.status === 1 ? 'Active' : 'Inactive'}
                                            </td>
                                            <td className="px-6 py-4 space-x-4">
                                                <a href="#" className="text-sky-600 hover:text-sky-900 flex items-center gap-1">
                                                    <Eye className="w-4 h-4" />
                                                    View
                                                </a>
                                                <Link to={`/admin/services/edit/${service.id}`} className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
                                                    <Edit className="w-4 h-4" />
                                                    Edit
                                                </Link>
                                                <Link onClick={() => deleteService(service)} className="text-red-600 hover:text-red-900 flex items-center gap-1">
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Show;
