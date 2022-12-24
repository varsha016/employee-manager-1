import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/admin/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from './pages/Pagination';
import Infinite from './pages/Infinite';



import PracticePagination from './pages/PracticePagination';




export default function App() {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <Link to='/paginate'>Paginate</Link>
      <Link to='/infinite'>Infinite</Link>
      <Link to='/pages'>PracticePagination</Link>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/paginate' element={<Pagination />} />

        <Route path='/infinite' element={<Infinite />} />
        <Route path='/pages' element={<PracticePagination />} />
      </Routes>
    </BrowserRouter>

  </>
}
