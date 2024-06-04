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
      {
        path: 'faq',
        element: <ComingSoonPage />,
      },
      {
        path: 'direktori',
        element: <ComingSoonPage />,
      },
      {
        path: 'downloads',
        element: <ComingSoonPage />,
      },
    ],
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
