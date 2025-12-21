import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='max-w-7xl mx-auto font-urbanist'>
     <RouterProvider router={router} />
  </div>
  </StrictMode>,
)
