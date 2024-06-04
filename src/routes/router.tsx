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
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'profil',
        element: <ComingSoonPage />,
      },
      {
        path: 'berita-sekolah',
        element: <ComingSoonPage />,
      },
      {
        path: 'pengumuman',
        element: <ComingSoonPage />,
      },
      {
        path: 'mading',
        element: <ComingSoonPage />,
      },
      {
        path: 'agenda-sekolah',
        element: <ComingSoonPage />,
      },
      {
        path: 'galeri',
        element: <ComingSoonPage />,
      },
      {
        path: 'kontak',
        element: <ComingSoonPage />,
      },
    ],
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
