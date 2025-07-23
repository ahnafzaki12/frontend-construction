import React, { useContext, useState } from 'react'
import {
  LayoutDashboard,
  Settings,
  FolderOpen,
  FileText,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Building2
} from "lucide-react"
import { AuthContext } from "../backend/context/Auth"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  const [, , logout] = useContext(AuthContext)

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '#dashboard'
    },
    {
      id: 'services',
      label: 'Services',
      icon: Settings,
      href: '#services'
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: FolderOpen,
      href: '#projects'
    },
    {
      id: 'articles',
      label: 'Articles',
      icon: FileText,
      href: '#articles'
    }
  ]

  const handleItemClick = (itemId) => {
    setActiveItem(itemId)
  }

  const handleLogout = () => {
    console.log('Logging out...')
    // Add your logout logic here
  }

  return (
    <div className={`relative h-screen bg-white border-r border-slate-200/50 shadow-lg transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-72'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 rounded-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">BuildCorp</h4>
              <p className="text-xs text-slate-500">Admin Panel</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          {isCollapsed ? (
            <Menu className="w-5 h-5 text-slate-600" />
          ) : (
            <X className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(item.id)
              }}
              className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-700'}`} />

              {!isCollapsed && (
                <>
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ml-auto transition-transform duration-200 ${isActive ? 'rotate-90 text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                </>
              )}
            </a>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="flex justify-center p-4">
        <button
          onClick={logout}
          className={`group w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 ${isCollapsed ? 'justify-center' : ''}`}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && (
            <span className="font-medium">Logout</span>
          )}
        </button>
      </div>

      {/* Collapse Toggle Indicator */}
      {isCollapsed && (
        <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
          <button
            onClick={() => setIsCollapsed(false)}
            className="bg-white border border-slate-200 rounded-full p-1 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Sidebar
