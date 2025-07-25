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

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
