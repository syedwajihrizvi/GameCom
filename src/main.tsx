import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import theme from './theme.ts'
import './index.css'
import router from './routes/routes.tsx'
import { RouterProvider } from 'react-router-dom'
import GlobalProvider from './providers/global-provider.tsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider  theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <RouterProvider router={router}/>
        </GlobalProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
