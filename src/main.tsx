import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './normalize.css'
import { UserGHProvider } from './context/app-provider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserGHProvider>
        <App />
      </UserGHProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
