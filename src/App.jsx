import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/frontend/home'
import AboutUs from './components/frontend/AboutUs'
import OurService from './components/frontend/OurService'
import Project from './components/frontend/Project'
import Blogs from './components/frontend/Blogs'
import ContactUs from './components/frontend/ContactUs'
import Login from './components/backend/Login'
import { ToastContainer, toast } from 'react-toastify';
import { Dashboard } from './components/backend/Dashboard'
import RequiredAuth from './components/common/RequiredAuth'
import {default as ShowServices} from './components/backend/services/Show'
import {default as CreateServices} from './components/backend/services/Create'
import {default as EditServices} from './components/backend/services/Edit'

import {default as ShowProjects} from './components/backend/projects/Show'
import {default as CreateProjects} from './components/backend/projects/Create'
import {default as EditProjects} from './components/backend/projects/Edit'

import {default as ShowPosts} from './components/backend/posts/Show'
import {default as CreatePosts} from './components/backend/posts/Create'
import {default as EditPosts} from './components/backend/posts/Edit'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/our-services' element={<OurService />} />
          <Route path='/project' element={<Project />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/admin/login' element={<Login />} />

          <Route path='/admin/dashboard' element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          } />

          {/* services */}
          <Route path='/admin/services' element={
            <RequiredAuth>
              <ShowServices />
            </RequiredAuth>
          } />

          <Route path='/admin/services/create' element={
            <RequiredAuth>
              <CreateServices />
            </RequiredAuth>
          } />

          <Route path='/admin/services/edit/:id' element={
            <RequiredAuth>
              <EditServices />
            </RequiredAuth>
          } />

          {/* projects */}
          <Route path='/admin/projects' element={
            <RequiredAuth>
              <ShowProjects />
            </RequiredAuth>
          } />

          <Route path='/admin/projects/create' element={
            <RequiredAuth>
              <CreateProjects />
            </RequiredAuth>
          } />

          <Route path='/admin/projects/edit/:id' element={
            <RequiredAuth>
              <EditProjects />
            </RequiredAuth>
          } />

          {/* posts */}
          <Route path='/admin/posts' element={
            <RequiredAuth>
              <ShowPosts />
            </RequiredAuth>
          } />

          <Route path='/admin/posts/create' element={
            <RequiredAuth>
              <CreatePosts />
            </RequiredAuth>
          } />

          <Route path='/admin/posts/edit/:id' element={
            <RequiredAuth>
              <EditPosts />
            </RequiredAuth>
          } />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
