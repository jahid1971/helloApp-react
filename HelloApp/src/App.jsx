import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'

function App() {

  return (
    <div className="bg-gray-200 min-h-screen">
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App



// import React from 'react'
// import { RouterProvider } from 'react-router-dom'
// import router from './Routes/routes'

// function App() {
//   return <RouterProvider router={router} />
// }

// export default App
