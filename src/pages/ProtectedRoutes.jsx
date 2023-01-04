import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/shared/Header'

const ProtectedRoutes = () => {

  const username = useSelector(state => state.username)


  if(username){
      return (
        <>
        <Header />
        <Outlet />
        </>
      )
  }else{
      return <Navigate to='/' />
  }


}

export default ProtectedRoutes