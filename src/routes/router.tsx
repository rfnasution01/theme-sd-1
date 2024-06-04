import { createBrowserRouter } from 'react-router-dom'
import { ComingSoonPage, LoginPage, RootLayout } from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <ComingSoonPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
