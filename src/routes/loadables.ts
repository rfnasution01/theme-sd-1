import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------

export const RootLayout = loadable(() => import('@/layouts/root-layout'))
export const HalamanLayout = loadable(() => import('@/layouts/halaman-layout'))

// ------------------
// ----- Pages -----
// ------------------

export const ComingSoonPage = loadable(() => import('@/pages/coming-soon'))
export const LoginPage = loadable(() => import('@/pages/login'))
export const BerandaPage = loadable(() => import('@/pages/beranda'))
