import { createBrowserRouter } from 'react-router-dom'
import { BerandaPage, ComingSoonPage, LoginPage, RootLayout } from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <BerandaPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'halaman',
        element: <ComingSoonPage />,
      },
      {
        path: 'program-details',
        element: <ComingSoonPage />,
      },
      {
        path: 'berita',
        element: <ComingSoonPage />,
      },
      {
        path: 'agenda',
        element: <ComingSoonPage />,
      },
      {
        path: 'pengumuman',
        element: <ComingSoonPage />,
      },
      {
        path: 'prestasi',
        element: <ComingSoonPage />,
      },
    ],
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
