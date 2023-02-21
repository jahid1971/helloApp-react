import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import App from './App'
import Authprovider from './Context/Authprovider'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <App />
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
