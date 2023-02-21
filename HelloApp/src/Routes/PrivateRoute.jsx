import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from '../Components/Spinner/Spinner'
import { AuthContext } from '../Context/Authprovider'

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext)
  const location = useLocation()
  console.log(loader)
  if (loader) {
    return (
      <div className='h-screen'>
        <Spinner></Spinner>
      </div>
    )
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute